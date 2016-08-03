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
    let configModel = think.model("config", null, "api");
    let configStage = await configModel.get("auction.bid_increasment");
    let res = configStage.filter((i)=>i[0] <= currPrice).sort((i, j)=>i[0] < j[0])[0][1];
    return res;
  }

  //check and change item status
  async checkStatus() {
    let currentTime = new date().getTime();
    try {
      await this.startTrans();

      let items_end = await this.where({
        auctionEndTime: {"<": currentTime},
        status: ["NOTIN", [AUCTION_FAILED, AUCTION_ENDED]]
      }).select();
      items_end.map(async(i)=> {
        let boolBid = await this.where({item: i["id"]}).count();
        if (boolBid == 0)
          await this.where({id: i["id"]}).update({status: AUCTION_FAILED});
        else
          await this.where({id: i["id"]}).update({status: AUCTION_ENDED});
      })

      let items_auctioning = await  itemModel.where({
        auctionBeginTime: {"<": currentTime},
        auctionEndTime: {">": currentTime},
        status: ["NOTIN", [AUCTIONING]]
      }).select();
      items_auctioning.map(async(i)=> await itemModel.where({id: i["id"]}).update({status: AUCTIONING}));

      await this.commit();
    }
    catch (e) {
      await this.rollback();
    }
  }

  async autoProcessItem() {
  
  }

  getListAdmin() {
    return this.order("item.createAt DESC")
      .select();
  }
}