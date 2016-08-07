'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    return this.display();
  }
  async detailAction(){
    let id = this.param("id");
    let detail = await this.model("article").getDetailAdmin(id);
    let tabdata = await this._tabdataHelper();
    let res = {
        "lefttab":tabdata.lefttab,
        "righttab":tabdata.righttab,
        "detail":detail
    }
    return this.success(res);
  }

  async _tabdataHelper(){
      let detailNum = 6; //每个类别显示的新闻条数
      let articleTypeModel = this.model('article_type',true);
      let articles = [];
      
      try{
        await articleTypeModel.startTrans();
        let typeList = await articleTypeModel.getList();
        for(var t in typeList){
          let a = await articleTypeModel.selectData(typeList[t]["id"])
          articles.push(a[0]);
        }
        await articleTypeModel.commit();

      }catch(e){
        await articleTypeModel.rollback();
      }

      let resultDetails = [];
      for (let  a of articles){
        a["article"].map((aa)=>resultDetails.push({"id":aa["id"],"image":aa["image"],"title":aa["title"],"date":aa["createAt"]}));
      }

      let res ={
        "lefttab":{
          "tabs":[articles[0]["name"]],
          "details":[resultDetails.slice(0,1*detailNum)]
        },
        "righttab":{
          "tabs":[articles[1]["name"],articles[2]["name"],articles[3]["name"]],
          "details":[resultDetails.slice(1*detailNum,2*detailNum),resultDetails.slice(2*detailNum,3*detailNum),resultDetails.slice(3*detailNum,4*detailNum)]      
        }
      };
      return res;
  }
}