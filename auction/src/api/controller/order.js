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
  async getAction(){
  	let user = await this.session("user");
  	let userId = user["id"];
  	return this.success(await this.model("order").getList(userId));
  }

}