import Base from './base.js'

export default class Order extends Base {
	getList(userId){
		return this.join("item on order.item = item.id")
			.field("order.id, item.name,item.currentPrice,order.createAt,order.status")
			.where({user:userId})
			.order("order.createAt DESC")
			.select();
	}
	getConfirmedAuction(userId){
		return this.join("item on order.item = item.id")
	      .field("item.name, order.id, item.currentPrice")
	      .where({user:userId})
	      .order("order.createAt DESC")
	      .select();
	}
	getWaitPay(userId){
		return this.where({user:userId})
	      .where("order.status = 1")
	      .field("item.name, order.id, item.currentPrice")
	      .join("item on order.item = item.id")
	      .order("order.createAt DESC")
	      .select();
	}
	getListAdmin(){
		return this.join("item on order.item = item.id")
			.join("user on order.user = user.id")
			.field("item.id, item.name, item.currentPrice, user.username, order.createAt, order.status")
			.order("order.createAt DESC")
			.select();
	}
}