import Base from './base.js'

export default class Order extends Base {
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
}