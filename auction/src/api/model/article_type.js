'use strict';
/**
 * relation model
 */
export default class extends think.model.relation {
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
        fkey:"article_type_id"
       
        // field:"id,title"
      }
    }
  }
    getList(){
      return this.setRelation(false).select();
    }    

    selectData(id,limit){
      id.toString();
      return this.setRelation(true).where("id = "+id).limit(limit).select();
    }


  }
