import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){
    let messageModel = think.model("message",null,"api");
    let userModel = think.model("user",null,"api");
    let user = await this.session('user')
    let {title,to,content,sendToAll} = this.param()
    let uids = []
    if(sendToAll){
      uids = (await userModel.field('id').select()).map(i=>i.id)
    }else{
      to = to.split(',')
      for(let i of to){
        let u = await userModel.where({username:i}).field('id').find()
        uids.push(u.id)
      }

    }
    let msg = uids.map(i=>({
      title,
      content,
      to: i,
      from: user.id,
      read: 0
    }))

    await messageModel.addMany(msg)
    return this.success();
  }
}