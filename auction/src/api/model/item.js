import Base from './base.js'

export default class Item extends Base {

  AUCTION_NOT_STARTED = 0;
  AUCTIONING = 1;
  AUCTION_ENDED = 2;
  AUCTION_FAILED = 3; //流拍

  init(...args) {
    super.init(...args);
    this.relation = {
      item_group: {
        type: think.model.BELONG_TO,
        key: "group",
        fKey: "id",
        order: "createAt DESC",
        relation: false
      }
    };
  }

  beforeAdd(data) {
    data = super.beforeAdd(data);
    data.auctionBeginTime = data.auctionBeginTime || new Date();
    return data;
  }

  async getStage(currPrice) {
    console.log(currPrice);
    let configModel = think.model("config", null, "api");
    let configStage = await configModel.get("auction.bid_increasment");
    let res = configStage.filter((i)=>i[0] <= currPrice).sort((i, j)=>i[0] < j[0])[0][1];
    return res;
  }

  //check and change item status
  async checkStatus() {
    let currentTime = new Date().getTime();
    let bidModel = think.model("bid",null,"api");
    let orderModel = think.model("order",null,"api");
    let itemModel = think.model("item",null,"api");
    let messageModel = think.model("message",null,"api");
    let userModel = think.model("user",null,"api");

    let items_end = await this.where({
      auctionEndTime: {"<": currentTime},
      status: ["NOTIN", [this.AUCTION_FAILED, this.AUCTION_ENDED]]
    }).select();

    for(let i of items_end)
    {
      let boolBid = await bidModel.where({item: i["id"]}).count();
      if (boolBid == 0 || think.isEmpty(i["currentBidder"])){
        await this.where({id: i["id"]}).update({status: this.AUCTION_FAILED});
      }
      else{
          // #comment：用事务处理出错
          // try{
          //   await this.startTrans();
            await this.where({id: i["id"]}).update({status:this.AUCTION_ENDED});
            await orderModel.addOne(i["currentBidder"],i["id"]);
            //更新bid 状态
            await bidModel.where({item:i["id"],value:i["currentPrice"]}).update({status:bidModel.WINNING});
            await bidModel.where({item:i["id"],value:["!=",i["currentPrice"]]}).update({status:bidModel.FAILING});
            //发送成功和失败的系统消息
            await messageModel.sendSystemMessage([{from:userModel.systemUser, to:i["currentBidder"], title:"系统消息", content:"您的商品"+i["name"]+bidModel.STATUS[0], read:0}]);
            let userIds = bidModel.where({item:i["id"],status:bidModel.FAILING,user:{"!=":i["currentBidder"]}}).distinct("id").select();
            let messages = userIds.map((u)=>{return {from:userModel.systemUser, to:u.user, title:"系统消息", content:"您的商品"+i["name"]+bidModel.STATUS[1], read:0}});
            await messageModel.sendSystemMessage(messages);
          //   await this.commit();
          // }catch(e){
          //   await this.rollback();
          // }
      }
    }

    let items_auctioning = await  itemModel.where({
      auctionBeginTime: {"<": currentTime},
      auctionEndTime: {">": currentTime},
      status: ["NOTIN", [this.AUCTIONING]]
    }).select();
    for(let i of items_auctioning){
      await itemModel.where({id: i["id"]}).update({status: this.AUCTIONING})
    }
    return true; //返回值有问题。
  }

  getListAdmin() {
    return this.order("item.createAt DESC")
      .select();
  }
}