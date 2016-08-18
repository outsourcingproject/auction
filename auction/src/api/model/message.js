import Base from './base.js'
export default class Message extends Base {
	getList(userId){
		return this.where({"to":userId})
	      .field("title,createAt,id")
	      .select();
	}

	//messages: an array of message object
	sendSystemMessage(messages){
		return this.addMany(messages);
	}
}