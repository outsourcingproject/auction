'use strict';
import Base from './base.js'

/**
 * model 
 * service on home page
 */
export default class extends Base {
	selectData(limitNum){
		return this.order("createAt DESC").limit(limitNum).select();
	}
}