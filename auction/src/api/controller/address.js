'use strict';

import Base from './base.js';

export default class extends Base {
  async getAction(){
    let user = await this.session('user');
    let result = await this.model("address").getList(user.id);
    return this.success(result);
  }
  async postAction(){
  	let addr = this.params("address");
  	let result = await this.model("address").addOne(addr);
  	if(!think.isEmpty(result))
  		return this.fail();
  	return this.success(result);  	
  }
  updateAction(){
  	let addr = this.params("address");
  	let result = await this.model("address").updateOne(addr);
  	if(!think.isEmpty(result));
  		return this.fail();
  	return this.success(result);
  }
  deleteAction(){
  	let address = this.params("address");
  	let result = await this.model("address").deleteOne(address.id); 
  	if(!think.isEmpty(result))
  		return this.fail();
  	return this.success(result);
  }
}