/**
 * Created by zl on 16/2/23.
 */
import Base from './base';
export default class User extends Base {
  userModel;

  init(...args) {
    super.init(...args);
    this.userModel = this.model('user');
    this.messageModel=this.model('message')
  }
  //获取当前用户
  async indexAction() {
    let user = await this.session('user');
    if (think.isEmpty(user))
      return this.fail("未登录", {});

    let userDetail = await this.userModel
      .where({id: user.id}).find();

    userDetail = think.extend(user, userDetail, {
      totalVolume: await this.userModel.getTotalVolume(user.id),
      totalTurnover: await this.userModel.getTotalTurnover(user.id)
    });
    return this.success(userDetail);
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
      let message = [{from:this.userModel.systemUser, to:result.id, title:"欢迎注册，请完善个人资料", content:"请至账户设置页，完善个人资料，我们审核通过后，会增加您的个人信用额度", read:0}];
      await this.messageModel.sendSystemMessage(message)

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
    return this.success({});
  }

  async _login(user) {
    delete user.password;
    await this.session('user', user);

    return this.indexAction();
  }

  async pwdResetAction() {
    let user = await this.session('user');
    let oldPassword = this.param('password');
    let newPassword = this.param('pwdReset');
    console.log(oldPassword, ' ', newPassword);

    let truePassword = await this.model("user").field("password").where({id: user['id']}).find();
    if (oldPassword == truePassword["password"]) {
      let res = await this.model("user").where({id: user["id"]}).update({password: newPassword});
      if (!think.isEmpty(res))
        return this.success("修改成功");
      return this.fail("修改失败")
    }
    return this.fail("PASSWORD_WORRY");
  }


  async infoAction() {
    let user = await this.session('user');
    let userId = user["id"];

    // get messages
    let resultMessages = await this.model("message").getList(userId);
    // get bid record with price over mine;
    let resultPriceOver = await this._getPriceOver(userId);
    //get successful auction items
    let auctionConfirm = await this.model("order").getConfirmedAuction(userId);
    let resultAuctionConfirm = auctionConfirm.map((r) => {
      return {"name": r["name"], "id": r["id"], "price": r["currentPrice"]}
    })
    //git items waiting paying
    let waitPay = await this.model("order").getWaitPay(userId);
    let resultWaitPay = waitPay.map((w) => {
      return {"name": w["name"], "id": w["id"], "price": w["currentPrice"]}
    });

    let result = {
      "messages": resultMessages,
      "priceOver": resultPriceOver,
      "auctionConfirm": resultAuctionConfirm,
      "waitPay": resultWaitPay
    };
    //
    console.log(result);
    return this.success(result);
  }

  async orderAction() {
    let user = await this.session("user");
    let userId = user["id"];
    return this.success(await this.model("order").getList(userId));
  }

  async bidAction() {
    let user = await this.session("user");
    let userId = user["id"];
    let bids = await this.model("bid").getList(userId);
    // for (let b of bids) {
    //   b["bidStatus"] = await this.model("bid").getStatus(b["id"]);
    // }
    return this.success(bids);
  }

  //get following items
  async followAction(){
    let user = await this.session("user");
    console.log(user);
    let userId = user["id"];
    let followings = await this.model("follow").getFollowing(userId);
    return this.success(followings); 
  }

  async _getPriceOver(userId) {
    return await this.model("bid").getPriceOver(userId);

    // let items = await this.model("bid").getDistinctList(userId);

    // let myMaxBids = [];
    // let sql = "select * from bid where item = %d and user=%d and value =(select max(value) from bid where item = %d and user=%d)"
    // for (let i of items) {
    //   let parsedSql = this.model("bid").parseSql(sql, i["item"], userId, i["item"], userId);
    //   myMaxBids.push((await this.model("bid").query(parsedSql))[0]);
    // }
    // console.log(myMaxBids);
    // let resultPriceOver = [];
    // for (let m of myMaxBids) {
    //   let r = await this.model("bid").getPriceOver(m["item"], m["value"]);
    //   if (!think.isEmpty(r))
    //     resultPriceOver.push(r);
    // }
    // return resultPriceOver;
  }
}