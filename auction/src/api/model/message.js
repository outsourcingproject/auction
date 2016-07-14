import Base from './base.js'
export default class Message extends Base {
	getList(userId){
		return this.where({"from|to":userId})
	      .field("title,createAt,id")
	      .select();
	}
}