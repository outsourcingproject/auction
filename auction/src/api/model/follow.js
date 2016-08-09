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

	async isFollowing(userId,itemId){
		return think.isEmpty(await this.model("follow").where({"item":itemId,"user":userId}).select())? false:true;
	}

	async getFollowing(userId){
		return this.join("item on follow.item = item.id ")
				.field("item.id as id, item.name as name, item.status as status, follow.createAt as createAt")
				.where({user:userId}).select();
	}
}