import Base from './base.js'
export default class Message extends Base {
	getList(userId){
		return this.where({to:userId,read:0})
		  .order({createAt: "DESC"})
		  .limit(10)
	      .select();
	}

	//messages: an array of message object
	sendSystemMessage(messages){
		return this.addMany(messages);
	}
}