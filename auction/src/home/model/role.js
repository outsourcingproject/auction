import Base from './base'

export default class Role extends Base {
  schemas = {
    name: {
      required: true,
      default: '',
      unique: true
    },
    desc: {
      required: true,
      default: ''
    },
    //继承那些角色的权限
    extend: {
      //ref to collection Role.name
      type: [String],
      required: true,
      default: []
    },
    authorities: {
      default: [],
      type: [ObjectID]
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
    name:{$unique: 1}
  };
  /**
   *
   * @param name
   * @param desc
   * @param extend {[String]}
   * @param authorities
   * @returns {*} true if success, otherwise err string
   */
  async addRole(name, desc = '', extend = ['anonymous', 'registered'], authorities = []) {
    let result = await this.thenAdd({name, desc, extend, authorities}, {name});
    if (result.type == 'add') {
      return true;
    } else {
      return 'ROLE_ALREADY_EXIST';
    }
  }

  /**
   * TODO: del other role's extend
   * TODO: del user's role, if none, should assign to what
   * @param name {String}
   * @returns {Promise}
   */
  delRole(name) {
    return this.where({name}).delete();
  }

  /**
   *
   * @param name {String} name of role
   * @param authorities {ObjectID} authorities' name
   * @returns {Promise}
   */
  addAuthorities(name, ...authorities) {
    let role = this.where({name}).find();
    for (let authority of authorities) {

      if (!role.authorities.includes(authority)) {
        role.authorities.push(authority);
      }
    }
    return this.where({name}).update({authorities});
  }

  /**
   *
   * @param name {String} name of role
   * @param authorities {String} authorities' name
   * @returns {Promise}
   */
  rmAuthorities(name, ...authorities) {

    let role = this.where({name}).find();
    for (let authority of authorities) {
      let index = role.authorities.indexOf(authority);
      if (index >= 0) {
        role.authorities.slice(index, 1);
      }
    }
    return this.where({name}).update({authorities});
  }

  /**
   *
   * @param name {String}
   * @param newName {String}
   * @returns {Promise}
   */
  changeName(name, newName) {
    return this.where({name}).update({name: newName});
  }

  /**
   *
   * @param name {String}
   * @param desc {desc}
   * @returns {Promise}
   */
  changeDesc(name, desc) {
    return this.where({name}).update({desc});
  }

  /**
   *
   * @param name {String} name of role
   * @returns {Promise<[Authority]>} authority's array
   */
  async getRoleAuthorities(name) {
    let authorityModel = think.model('authority', null, 'home');

    let addAuthorities = (arr, au)=> {
      for (let i of au) {
        let has = false;
        for (let j of arr) {
          if (i.name == j.name) {
            has = true;
            break;
          }
        }
        if (!has) {
          arr.push(i);
        }
      }
    };

    let getAuthorities = async(name)=> {
      let role = await this.where({name}).find();
      if (think.isEmpty(role)) {
        return [];
      }
      let authorities = [];
      for (let e of role.extend) {
        addAuthorities(authorities, await getAuthorities(e));
      }
      for (let aName of role.authorities) {
        addAuthorities(authorities, [await authorityModel.where({name: aName}).find()]);
      }
      return authorities;
    };

    return getAuthorities(name);
  };
}