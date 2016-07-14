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
    let user = await this.session("user");
    let userId = user["id"];
    let resItemInfo = await this._detailHelper(itemId,userId);
    let resRelatedItems = await this._relatedItemHelper(itemId,userId);
    resItemInfo["relatedItems"] = resRelatedItems;
    return this.success(resItemInfo);
  }


  async _stageHelper(currPrice){
    let configModel = this.model("config");
    let configStage = await configModel.get("auction.bid_increasment");
    let res = 0;
    configStage.map((c)=>{if(c[0]<currPrice) res=c[1];});
    return res;

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
    console.log(imageIds);
    itemInfo["image"] =[];
    for (let i of imageIds){
      console.log("**************"+i);
      itemInfo["image"].push((await this.model("image").where({id:i}).select())[0]);
    }
    itemInfo["bidCount"] = await this.model("bid").where({"item":id}).count();
    itemInfo["followCount"] = await this.model("follow").where({"item":id}).count();
    itemInfo["following"] =think.isEmpty(await this.model("follow").where({"item":id,"user":userId}).select())? false:true;
    itemInfo["stage"] = await this._stageHelper(itemInfo["currPrice"]);
    return itemInfo;
  }


}