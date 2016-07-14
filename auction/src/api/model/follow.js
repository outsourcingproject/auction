import Base from './base.js'


/**
 * model
 */
export default class extends Base {
	async followToggle(userId, itemId){
		let f = await this.where({user:userId, item:itemId}).select();
		if(think.isEmpty(f))
			return this.add({user:userId, item:itemId});
		else 
			return this.delete({user:userId, item:itemId});
	}
}