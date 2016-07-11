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
    let authorities = await this.userModel.getUserAuthorities(user.username);
    await this.session('authorities', authorities);

    let obj = {user, authorities};
    //删除敏感信息
    delete obj.user.password;
    return obj;
  }

  async infoAction(){
    let userId = await this.session('user');

    // get messages
    let messages = await this.model("message").select();
    let resultMessages  = messages.map((m)=>{
      return {"title":m["title"],"creatAt":m["creatAt"],"messageId":m["id"]}
    })

    // get bid record with price over mine;
    let items = await this.model("item").where({user:userId}).select();
    let myMaxBids = items.map(async(i)=>await self.model("bid").where({user:userId, item:i["id"]}).max("value"));
    let resultPriceOver = myMaxBids.map(async(m) => await self.model("bid").join("item on bid.item = item.id")
      .where({id:m["id"],value:{">":m["value"]}}).order({creatAt:"DESC"}).select())
    .sort((a,b)=>b["creatAt"]-a["creatAt"])
    .map((p)=>{return {"name":p["name"],"id":p["item"],"price":p["value"]}});

    //get successful auction items
    let auctionConfirm = await this.model("order").join("item on order.item = item.id").select();
    resultAuctionConfirm.map((r) => {return {"name":r["name"], "id":r["id"], "price":r["currentPrice"]}})


    //git items waiting paying
    let waitPay = this.model("order")
      .join("item on order.item = item.id")
      .where({user:userId, status:0})
      .order({creatAt:"DESC"})
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

  async detailAction(){
    let userId = await this.session('user');
    let userDetail = await this.userModel.field("creatAt,level,creditLines,lastLogin").select();
    if(think.isEmpty())
      return this.fail("无此用户");
    userDetail["totalVolume"] = await this.model("order").where({user:userId}).count();
    userDetail["totalTurnover"] = await this.model("order").transcaction(async()=>{
      let itemIds = await this.model("order").where({user:userId}).select();
      return await self.model("item").where({id:["IN",itemIds]}).sum(currentPrice);
    })
    return this.this.success(userDetail);
  }
}