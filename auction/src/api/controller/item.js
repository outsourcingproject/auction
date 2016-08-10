'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  init(...args) {
    super.init(...args);
    this.itemModel = this.model('item');
  }

  async auctioningAction(){
    let itemModel = this.model("item");
    let items = await this.model("item")
          .setRelation(false)
          .where({status:itemModel.AUCTIONING})
          .join("item_type on item.type = item_type.id")
          .field("item.id as id, currentPrice, item.name as name, followCount, auctionEndTime, image, item_type.name as type")
          .limit(10)
          .select();
    let user = await this.session("user");
    if(!think.isEmpty(user)){ 
      let followingItems =await this.model("follow").field("item").where({user:user["id"]}).select();
      let itemIds = followingItems.map((f)=>f["item"]);
      items.map((i)=>{return (itemIds.indexOf(i["id"])!==-1)?i["following"]=true:i["following"]=false});
    }else{
      items.map((i)=>{return i["following"] = null});
    }
    return this.success(items);
  }

  async auctionedAction(){
    let itemModel = this.model("item");
    let items = await this.model("item")
          .setRelation(false)
          .where({status:itemModel.AUCTION_ENDED})
          .join("item_type on item.type = item_type.id")
          .field("item.id as id, currentPrice, item.name as name, followCount, auctionEndTime, image, item_type.name as type")          
          .limit(10)
          .select();
    let user = await this.session("user");
    if(!think.isEmpty(user)){ 
      let followingItems =await this.model("follow").field("item").where({user:user["id"]}).select();
      let itemIds = followingItems.map((f)=>f["item"]);
      items.map((i)=>{return (itemIds.indexOf(i["id"])!==-1)?i["following"]=true:i["following"]=false});
    }else{
      items.map((i)=>{return i["following"] = null});
    }
    return this.success(items);
  }

  //返回某个拍品的所有竞拍记录
  async getBidAction(){
    let itemId = this.param("id");
    let res = await this.model("bid").getItemBids(itemId);
    return this.success(res);
  }

  //竞拍某样物品
  //传入参数 auctionPrice：竞拍价格，itemId: 竞拍物品；
  async bidAction(){
    let user = await this.session("user");
    let userId = user["id"];
    let value = this.param("auctionPrice");
    let item = this.param("itemId");
    let res = await this.model("bid").add({user:userId, item:item, value:value, status:this.model("item").AUCTIONING});
    //将新的价格数据返回给前端。
    console.log(res);
    let newPrice = await this.model("item").setRelation(false).where({id:item}).field("currentPrice").find();
    let newStage = await this.model("item").getStage(newPrice["currentPrice"]);
    return this.success({id:res, newPrice: newPrice["currentPrice"], newStage: newStage});
  }

  async detailAction(){
  	let itemId = this.param("id"); //获取item id;
    let resItemInfo = await this._detailHelper(itemId);
    let resRelatedItems = await this._relatedItemHelper(itemId);
    let user = await this.session("user");
    if(!think.isEmpty(user)){
      let userId = user["id"];
      resItemInfo["following"] = await this._followingHelper(userId, itemId);
      for(let r of resRelatedItems)
        r["isFollowing"] = await this._followingHelper(userId, itemId);
    }else{
      resItemInfo["following"] = null;
      for(let r of resRelatedItems)
        r["isFollowing"] = null;
    }
    resItemInfo["relatedItems"] = resRelatedItems;
    return this.success(resItemInfo);
  }

  async _relatedItemHelper(id,userId){
    let itemInfo = await this.itemModel.setRelation(false).where({"id":id}).find();
    let relatedItems = await this.itemModel.setRelation(false).where({"group":itemInfo["group"]}).field("id").select();
    let res = [];
    for (let r of relatedItems){
      let rDetail = await this._detailHelper(r["id"],userId);
      res.push(rDetail);
    }
    return res;

  }

  async _detailHelper(id){
    let itemInfo = await this.itemModel.setRelation(false).where({"id":id}).find();
    let imageIds = JSON.parse(itemInfo["image"]) ;
    itemInfo["bidCount"] = await this.model("bid").where({"item":id}).count();
    itemInfo["followCount"] = await this.model("follow").where({"item":id}).count();
    itemInfo.beginPrice=+itemInfo.beginPrice;
    itemInfo.currentPrice=+itemInfo.currentPrice;
    itemInfo["stage"] = await this.model("item").getStage(itemInfo["currentPrice"]);
    return itemInfo;
  }

  async _followingHelper(userId, itemId){
    return await this.model("follow").isFollowing(userId, itemId);
  }
}