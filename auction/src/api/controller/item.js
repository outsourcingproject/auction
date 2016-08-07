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

  async detailAction(){
  	let itemId = this.param("id"); //获取item id;
    let user = await this.session("user");
    let userId = user["id"];
    let resItemInfo = await this._detailHelper(itemId,userId);
    let resRelatedItems = await this._relatedItemHelper(itemId,userId);
    resItemInfo["relatedItems"] = resRelatedItems;
    return this.success(resItemInfo);
  }

  async _relatedItemHelper(id,userId){
    let itemInfo = (await this.itemModel.where({"id":id}).select())[0];
    let relatedItems = await this.itemModel.where({"group":itemInfo["group"]}).field("id").select();
    let res = [];
    for (let r of relatedItems){
      let rDetail = await this._detailHelper(r["id"],userId);
      res.push(rDetail);
    }
    return res;

  }

  async _detailHelper(id,userId){
    let itemInfo = (await this.itemModel.where({"id":id}).select())[0];
    let imageIds = JSON.parse(itemInfo["image"]) ;
    itemInfo["image"] = await this.model("image").getImages(imageIds);
    itemInfo["bidCount"] = await this.model("bid").where({"item":id}).count();
    itemInfo["followCount"] = await this.model("follow").where({"item":id}).count();
    itemInfo["following"] = await this.model("follow").isFollowing(userId,id);
    itemInfo["stage"] = await this.model("item").getStage(itemInfo["currentPrice"]);
    return itemInfo;
  }


}