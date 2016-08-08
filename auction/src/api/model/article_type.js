'use strict';
import Base from './base.js'
/**
 * relation model
 */
export default class extends Base {
  /**
   * init
   * @param  {} args []
   * @return {}         []
   */
  init(...args){
    super.init(...args);

    this.relation = {
      article:{
        type: think.model.HAS_MANY,
        key:"id",
        fKey:"type"
       
        // field:"id,title"
      }
    }
  }
    getList(){
      return this.setRelation(false).select();
    }    

    //根据文章类别id 读取文章
    selectData(id){
      id.toString();
      return this.setRelation(true)
        .where("id = "+id)
        .order("createAt DESC")
        .find();
    }

    //查询文章类别和文章详情页
    async getArticle(){
      let articles = [];
      let typeList = await this.getList();
      for(var t in typeList){
        let a = await this.selectData(typeList[t]["id"]);
        articles.push(a);
      }
      return articles;
    }
  }
