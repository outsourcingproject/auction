import Base from './base.js'
let ObjectID = require('mongodb-core').BSON.ObjectID;

export default class ArticleType extends Base {
  schema = {
    name: {
      type: String,
      require: true,
      unique: true,
      default: ""
    },
    desc: {
      type: String,
      require: true,
      default: ""
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
  }
  indexes={
    name:{$unique: 1}
  };

}