/**
 * Created by zl on 16/2/23.
 */
import Base from './base';
export default class User extends Base {
  userModel;

  init(...args) {
    super.init(...args);
    this.userModel = this.model('user');
  }

  async signupAction() {
    let username = this.param('username');
    let password = this.param('password');
    let email = this.param('email');

    let result = await this.userModel.createUser(username, password, email);

    if (think.isString(result)) {
      return this.fail(result);
    } else {
      // auto login
      return this.success(await this._login(result));

    }

  }

  async loginAction() {
    let username = this.param('username');
    let password = this.param('password');

    let result = await this.userModel.checkUser(username, password);
    // console.log(result);

    if (think.isString(result)) {
      return this.fail(result)
    }
    //login success
    return this.success(await this._login(result));

  }

  async logoutAction() {
    //clear session
    await this.session();
    return this.success();
  }

  async _login(user) {
    await this.session('user', user);
    // console.log(user.username);
    let authorities = await this.userModel.getUserAuthorities(user.username);
    // console.log(authorities);
    await this.session('authorities', authorities);

    let obj = {user, authorities};
    //删除敏感信息
    delete obj.user.password;
    return obj;
  }



  async detailAction(){
    let user = await this.session('user');
    let userId = user.id;
    let userDetail = await this.userModel.field("createAt,level,creditLines,lastLogin").where({id:userId}).select();
    if(think.isEmpty(userDetail))
      return this.fail("无此用户");
    userDetail[0]["totalVolume"] = await this.model("order").where({user:userId}).count();
    userDetail[0]["totalTurnover"] = await this.model("order").transaction(async()=>{
      let itemIds = await this.model("order").field("item").where({user:userId}).select();
      let itemIdArray = itemIds.map((i)=>i["item"]);
      return this.model("item").where({id:["IN",itemIdArray]}).sum("currentPrice"); 
    })
    return this.success(userDetail[0]);
  }
  async infoAction(){
    let user = await this.session('user');
    let userId = user["id"];

    // get messages
    let messages = await this.model("message")
      .where({"from|to":userId})
      .select();
    let resultMessages  = messages.map((m)=>{
      return {"title":m["title"],"createAt":m["createAt"],"messageId":m["id"]}
    });

    // get bid record with price over mine;
    let resultPriceOver = await this._priceOver(userId);

    //get successful auction items
    let auctionConfirm = await this.model("order")
      .join("item on order.item = item.id")
      .field("item.name, order.id, item.currentPrice")
      .where({user:userId})
      .order("order.createAt DESC")
      .select();
    // console.log(auctionConfirm);
    let resultAuctionConfirm = auctionConfirm.map((r) => {return {"name":r["name"], "id":r["id"], "price":r["currentPrice"]}})


    //git items waiting paying

    let waitPay = await this.model("order")
      .where({user:userId})
      .where("order.status=0")
      .field("item.name, order.id, item.currentPrice")
      .join("item on order.item = item.id")
      .order("order.createAt DESC")
      .select();
    let resultWaitPay = waitPay.map((w) => {return {"name":w["name"],"id":w["id"],"price":w["currentPrice"]}});

    let result = {
      "messages":resultMessages,
      "priceOver":resultPriceOver,
      "auctionConfirm":resultAuctionConfirm, 
      "waitPay":resultWaitPay
    };
    //
    return this.success(result);
  }

  async _priceOver(userId){
    let items = await this.model("bid")
      .where({user:userId})
      .distinct("item")
      .select();

    let sql ="select * from bid where item = %d and user=%d and value =(select max(value) from bid where item = %d and user=%d)"

    let myMaxBids = [];
    console.log(items);
    for (let i of items){
      console.log("******************"+i);
      let parsedSql = this.model("bid").parseSql(sql, i["item"], userId, i["item"],userId);
      myMaxBids.push((await this.model("bid").query(parsedSql))[0]);
    }
    let resultPriceOver = [];
    for(let m of myMaxBids){
      let r = await this.model("bid")
      .join("item on bid.item = item.id")
      .field("bid.createAt, bid.item, bid.value, item.name")
      .where({item:m["item"],value:{">":m["value"]}})
      .order("bid.createAt DESC")
      .select();
      if(!think.isEmpty(r))
        resultPriceOver.push(r);
    }
    return resultPriceOver;
  }
}