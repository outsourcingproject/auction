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

      console.log("========================")
      let items_end = await this.where({
        auctionEndTime: {"<": currentTime},
        status: ["NOTIN", [this.AUCTION_FAILED, this.AUCTION_ENDED]]
      }).select();

      for(let i of items_end)
      {
        let boolBid = await bidModel.where({item: i["id"]}).count();
        if (boolBid == 0){
          await this.where({id: i["id"]}).update({status: this.AUCTION_FAILED});
        }
        else{
          try{
            await this.startTrans();
            await orderModel.addOne(i["currentBidder"],i["id"]);
            await this.where({id: i["id"]}).update({status:this.AUCTION_ENDED});
            await this.commit();
          }catch(e){
            await this.rollback();
          }
        }
      }

      console.log("========================")

      let items_auctioning = await  itemModel.where({
        auctionBeginTime: {"<": currentTime},
        auctionEndTime: {">": currentTime},
        status: ["NOTIN", [this.AUCTIONING]]
      }).select();
      for(let i of items_auctioning){
        await itemModel.where({id: i["id"]}).update({status: this.AUCTIONING})
      }
      return true;
  }

  async autoProcessItem() {  
  }

  getListAdmin() {
    return this.order("item.createAt DESC")
      .select();
  }
}