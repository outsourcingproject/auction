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

  async listAction(){
  	let user = await this.session("user");
  	let userId = user["id"];
  	let bids = await this.model("bid").getList(userId);
  	for (let b of bids){
  		b["status"] = await this.model("bid").getStatus(b["id"]);
  	}
  	return this.success(bids);
  }
}