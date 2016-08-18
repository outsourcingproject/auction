/**
 * Created by zl on 2015/12/30.
 */
import Base from './base.js'


/**
 * 成功时返回true或者具体对象
 * 失败时返回失败字符串,具体请参看 /src/common/config/local/en.js
 * 如果没有当前需要的失败字符串,请在该文件中定义
 */
export default class User extends Base {

  systemUser = 1;
  /**
   *
   * @param username
   * @param password
   * @param email
   * @param role
   * @returns {*} user object if success, otherwise err string
   */
  async createUser(username, password, email, role = 2 /* 'registered'*/) {
    let creditLines = await think.model('config', null, 'api').get('user.default.creditLines');
    let desc = await think.model('config', null, 'api').get('user.default.desc');
    let level = await think.model('config', null, 'api').get('user.default.level');
    let lastLogin = +new Date();

    let result = await this.where({username}).select();
    if (!think.isEmpty(result)) {
      return 'USER_ALREADY_EXIST';
    }
    result = await this.where({email}).select();
    if (!think.isEmpty(result)) {
      return 'EMAIL_ALREADY_USED';
    }
    result = await this.add({username, password, email, role, creditLines, desc, level, lastLogin});

    return this.where({id: result}).find();
  }

  /**
   *
   * @param username
   * @param password
   * @returns {*} user object if success, otherwise err string
   */
  async checkUser(username, password) {
    let result = await this.where({username}).find();
    if (think.isEmpty(result)) {
      return 'NO_THIS_USER';
    }
    if (result.password != password) {
      return 'PASSWORD_WORRY';
    }

    //update last login
    await this.where({id: result.id}).update({lastLogin: +new Date()});
    return result;
  }

  /**
   *
   * @param username
   * @returns {Promise}
   */
  delUser(username) {
    return this.where({username}).delete();
  }

  /**
   *
   * @param username
   * @returns {Promise<Role>}
   */
  async getUserRole(username) {
    let user = await this.where({username}).find();
    console.log(user);
    let roleModel = think.model('role', null, 'api');
    return roleModel.where({name: user.role}).find();
  }

  /**
   *
   * @param username
   * @returns {Promise<[Authority]>}
   */
  async getUserAuthorities(username) {
    let roleModel = think.model('role', null, 'api');
    let user = await this.where({username}).find();
    let role = await roleModel.where({id: user.role}).find();
    // console.log(role);
    return roleModel.getRoleAuthorities(role.name);
  }

  getTotalVolume(userId) {
    let orderModel = think.model("order", null, "api");
    return orderModel.where({user: userId}).count();
  }

  async getTotalTurnover(userId) {
    let orderModel = think.model("order", null, "api");
    let itemModel = think.model("item", null, "api");
    let itemIds = await orderModel.field("item").where({user: userId}).select();
    if (think.isEmpty(itemIds))
      return 0;
    let itemIdArray = itemIds.map((i)=>i["item"]);
    return itemModel.where({id: ["IN", itemIdArray]}).sum("currentPrice");
  }
}