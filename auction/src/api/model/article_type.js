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

    selectData(id,limit){
      id.toString();
      return this.setRelation(true).where("id = "+id).limit(limit).select();
    }
  }
