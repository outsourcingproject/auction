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
  schemas = {
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    emailValidate: {
      type: Boolean,
      required: true,
      default: false
    },
    level: {
      type: Number,
      default: 0
    },
    role: {
      //ref to collection role.name
      type: String,
      required:true
    },
    createAt: {
      type: Date,
      required: true,
      default: ()=>new Date()
    },
    updateAt: {
      type: Date,
      required: true,
      default: ()=>new Date()
    }
  };
  
  indexeses={
    username:{$unique: 1}
  };

  /**
   *
   * @param username
   * @param password
   * @param email
   * @param role
   * @returns {*} user object if success, otherwise err string
   */
  async createUser(username, password, email, role = 'registered') {
    let result = await this.where({username}).select();
    if (!think.isEmpty(result)) {
      return 'USER_ALREADY_EXIST';
    }
    result = await this.where({email}).select();
    if (!think.isEmpty(result)) {
      return 'EMAIL_ALREADY_USED';
    }
    result = await this.add({username, password, email, role});

    return this.where({_id: result}).find();

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
    let role = await roleModel.where({name: user.role}).find();

    return roleModel.getRoleAuthorities(role.name);

  }
}