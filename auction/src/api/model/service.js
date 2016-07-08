'use strict';
/**
 * model 
 * service on home page
 */
export default class extends think.model.base {
	selectData(limitNum){
		return this.order("createAt DESC").limit(limitNum).select();
	}
}