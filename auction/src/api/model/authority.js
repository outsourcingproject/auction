import Base from './base.js'
export default class Authority extends Base {
  // schemas = {
  //   name: {
  //     type: String,
  //     required: true,
  //     unique: true,
  //     default: ''
  //   },
  //   desc: {
  //     type: String,
  //     required: true,
  //     default: ''
  //   },
  //   paths: {
  //     type: [String|RegExp],
  //     required: true,
  //     default: []
  //   },
  //   createAt: {
  //     type:Date,
  //     required: true,
  //     default: ()=>new Date()
  //   },
  //   updateAt: {
  //     type:Date,
  //     required: true,
  //     default: ()=>new Date()
  //   }
  // };

  indexeses={
    name:{$unique: 1}
  };
  /**
   *
   * @param name
   * @param desc
   * @param allows {[String|RegExp]}
   * @returns {*} true if success, otherwise err string
   */
  async addAuthority(name, desc = '', allows = []) {

    allows=JSON.stringify(allows);
    let result = await this.thenAdd({name, desc, allows,createAt:new Date(),updateAt:new Date()}, {name});

    if (result.type == 'add') {
      return true;
    } else {
      return 'AUTHORITY_ALREADY_EXIST';
    }
  }

  /**
   *
   * @param name
   * @returns {Promise}
   */
  delAuthority(name) {
    return this.where({name}).delete();
  }

}