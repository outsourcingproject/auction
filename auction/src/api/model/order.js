import Base from './base.js'

export default class Order extends Base {

  WAIT_CONFIRM = 0;
  WAIT_PAY = 1;
  WAIT_CHECK = 2;
  WAIT_DELIEVER = 3;
  DELIEVERED = 4;
  FINISHED = 5;
  CANCELED = 6;
  //添加新订单 地址为默认地址
  addOne(userId, itemId) {
    return this.add({user: userId, item: itemId, status: 0});
  }

  //确认订单：买家确定地址等信息，订单更新状态
  //未测试
  confirmOrder(order) {
    order.status = 1;
    return this.where({id: order.id}).update(order);
  }
  async finishOrder(order){
    let userModel = think.model("user",null,"api"); 
    try{
      await this.startTrans();
      this.where({id:order}).update({status:this.FINISHED});
      let data = this.where({id:order}).field("user","price").find();
      //更新信用值
      // await userModel.where({id:data.user}).increment("creditLines",data.price);
      await this.commit();
    }catch(e){
      await this.rollback();
    }
  }
  //更改订单状态
  // async changeStatus(orderId){
  //   let status = (await this.where({id:orderId}).find())["status"];
  //   switch(status){
  //     case WAIT_CONFIRM:
  //       return this.where({id:orderId}).update({status:WAIT_PAY});
  //     case  WAIT_PAY:
  //       return this.where({id:orderId}).update({status:WAIT_CHECK});
  //     case WAIT_CHECK:
  //       return this.where({id:orderId}).update({status:WAIT_DELIEVER});
  //     case WAIT_DELIEVER:
  //       return this.where({id:orderId}).update({status:DELIEVERED});
  //     case DELIEVERED:
  //       return this.where({id:orderId}).update({status:FINISHED});
  //     default:
  //       return this.where({id:orderId}).update();
  //   }
  // }
  //取消订单，改变订单状态为取消
  cancelOne(orderId) {
    return this.where({id: orderId}).update({status: CANCELED});
  }

  getList(userId) {
    return this.join("item on order.item = item.id")
      .field("order.id, item.name,item.currentPrice as price,order.createAt,order.status,expressName,expressNo")
      .where({user: userId})
      .order("order.createAt DESC")
      .select();
  }

  getConfirmedAuction(userId) {
    return this.join("item on order.item = item.id")
      .field("item.name, order.id, item.currentPrice")
      .where("user = " + userId +" and order.status = " + this.WAIT_CONFIRM)
      .order("order.createAt DESC")
      .select();
  }

  getWaitPay(userId) {
    return this.where({user: userId})
      .where("order.status = " + this.WAIT_PAY)
      .field("item.name, order.id, item.currentPrice")
      .join("item on order.item = item.id")
      .order("order.createAt DESC")
      .select();
  }

  getListAdmin() {
    return this.join("item on order.item = item.id")
      .join("user on order.user = user.id")
      .field("item.id, item.name, item.currentPrice, user.username, order.createAt, order.status")
      .order("order.createAt DESC")
      .select();
  }
}