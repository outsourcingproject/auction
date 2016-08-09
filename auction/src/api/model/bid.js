import Base from './base.js'

export default class Bid extends Base {
  getList(userId){
    return this.join("item on bid.item=item.id")
      .field("bid.id as bid,value as price,bid.createAt,item.name as name,item.id as id,item.status as itemStatus")
      .where({user:userId}).select();
  }

  getDistinctList(userId){
    return this.where({user:userId})
      .distinct("item")
      .select();
  }
  getPriceOver(itemId, price){
    return this.join("item on bid.item = item.id")
      .field("bid.createAt as time, bid.item as id, bid.value as price, item.name")
      .where({item:itemId,value:{">":price}})
      .order("bid.createAt DESC")
      .find();
  }
  // 查询某件物品的所有竞标记录
  // 返回值 id, userId, username, value, status
  getItemBids(itemId){
    return this.model("bid")
      .join("user on bid.user = user.id")
      .field("bid.id as id, bid.user as userId, user.username as username, bid.value as value, bid.status as status")
      .where("bid.item = " + itemId)
      .select();
  }
  // 查询竞标状态：'得标', '失败', '领先', '被超'
  async getStatus(bidId){
    console.log(bidId);
    let res = 3;
    let bid = (await this.where({id:bidId}).select())[0];
    let itemId = bid["item"];
    let userId = bid["user"];
    let itemModel = think.model("item",null,"api");
    let item = (await itemModel.where({id:itemId}).select())[0];
    console.log(item);
    if(item["status"] == itemModel.AUCTION_ENDED && item["currentBidder"] == userId)
      res = 0;
    else if(item["status"] == itemModel.AUCTION_ENDED || item["status"] == itemModel.AUCTION_FAILED)
      res = 1;
    else if(item["status"] == itemModel.AUCTIONING){
      let maxPrice = await this.where({item:itemId}).max("value");
      console.log(maxPrice);
      if(maxPrice == bid["value"])
        res = 2;
      else res = 3;
    }
    return res;
  }
}