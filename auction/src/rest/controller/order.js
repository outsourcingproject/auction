import Base from './base';

export default class Order extends Base {

  async __before() {
    this.modelInstance = think.model('order', null, 'api');
    this.modelPk = await this.modelInstance.getPk();
    this.needPaging = false;
    this.listOrder = {'order.createAt': 'desc'};
    this.join = [
      "user on user.id=order.user",
      "item on item.id=order.item"
    ];
    this.field = "order.id,order.address,order.status,order.createAt,order.updateAt,order.price,user.id as uid,user.username,item.name,item.id as iid,item.tag as tag,expressNo,expressName";
    return await super.__before();
  }
}