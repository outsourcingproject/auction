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
    let items = await this.model("item").where({status:itemModel.AUCTIONING}).limit(10).select();
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
    let items = await this.model("item").where({status:itemModel.AUCTION_ENDED}).limit(10).select();
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

  //返回所有拍品的列表，按照正在拍卖，即将拍卖，拍卖结束排序，搜索内容从此地址获取
  async listAction(){
    let itemModel = this.model("item");
    let auctioningItem = await itemModel.where({status:itemModel.AUCTIONING}).select();
    let auctionedItem = await itemModel.where({status:itemModel.AUCTION_ENDED}).select();
    let unstartItem = await itemModel.where({status:itemModel.AUCTION_NOT_STARTED}).select();
    return this.success(auctioningItem.concat(auctionedItem).concat(unstartItem));
  }
  //返回某个拍品的所有竞拍记录
  async bidAction(){
    let itemId = this.param("id");
    let res = await this.model("bid").getItemBids(itemId);
    return this.success(res);
  }

  async detailAction(){
  	let itemId = this.param("id"); //获取item id;
    let resItemInfo = await this._detailHelper(itemId);
    let resRelatedItems = await this._relatedItemHelper(itemId);
    let user = await this.session("user");
    if(user!=null){
      let userId = user["id"];
      resItemInfo["following"] = await _followingHelper(userId, itemId);
      for(let r of resRelatedItems)
        r["isFollowing"] = await _followingHelper(userId, itemId);
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
    console.log(itemInfo);
    let imageIds = JSON.parse(itemInfo["image"]) ;
    itemInfo["bidCount"] = await this.model("bid").where({"item":id}).count();
    itemInfo["followCount"] = await this.model("follow").where({"item":id}).count();
    itemInfo.startPrice=+itemInfo.startPrice;
    itemInfo.currentPrice=+itemInfo.currentPrice;
    itemInfo["stage"] = await this.model("item").getStage(itemInfo["currentPrice"]);
    return itemInfo;
  }

  async _followingHelper(userId, itemId){
    itemInfo["following"] = await this.model("follow").isFollowing(userId, itemId);    
  }
}