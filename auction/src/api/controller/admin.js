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
  async orderAction(){

  	let result = await this.model("order").getListAdmin();
  	return this.success(result);
  }
  async groupAction(){
  	let result = await this.model("item_group").getListAdmin();
  	return this.success(result);
  }
  async itemAction(){
  	let result = await this.model("item").getListAdmin();
  	return this.success(result);
  }

  async articleAction(){
  	let result = await this.model("article").getListAdmin();
  	return this.success(result);
  }
}