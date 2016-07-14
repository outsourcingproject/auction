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
  indexAction(){
    //auto render template file index_index.html
    return this.display();
  }

  async detailAction(){
  	let itemId = this.param("id");
    let user = this.session("user");
    let userId = user["id"];
    let resItemInfo = await _detailHelper(id,userId);
    let resRelatedItems = await _relatedItemHelper(id,userId);
    resItemInfo["relatedItems"] = resRelatedItems;
    return this.success(resItemInfo);
  }


  async _stageHelper(currPrice){
    let configModel = this.model("config");
    let configStage = await configModel.get("auction.bid_increasment");
    let res = 0;
    configModel.map((c)=>{if(c[0]<currPrice) res=c[1];});
    return res;

  }

  async _relatedItemHelper(id,userId){
    let itemInfo = await this.itemModel.where({"id":id}).select();
    let relatedItems = await this.itemModel.where({"group":itemInfo["group"]}).field("id").select();
    let res = [];
    for (var r in relatedItems){
      let rDetail = _detailHelper(r,userId);
      res.push(rDetail);
    }
    return res;

  }

  async _detailHelper(id,userId){
    let itemInfo = await this.itemModel.where({"id":id}).select();
    itemInfo["bidCount"] = await this.model("bid").where({"item":id}).count();
    itemInfo["followCount"] = await this.model("follow").where({"item":id}).count();
    itemInfo["following"] = await this.model("follow").where({"item":id,"user":userId}).select();
    itemInfo["images"] = await this.model("image").where({"item":id}).select();
    itemInfo["stage"] = await _stageHelper(itemInfo["currPrice"]);
    return itemInfo;
  }


}