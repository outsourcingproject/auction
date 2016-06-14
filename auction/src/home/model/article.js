import Base from './base.js'
let ObjectID = require('mongodb-core').BSON.ObjectID;

export default class Article extends Base {
  schema = {
    title: {
      type: String,
      require: true,
      default: ""
    },
    content: {
      type: String,
      require: true,
      default: ""
    },
    author: {
      //ref to collection user.username
      type: String,
      require: true
    },
    type: {
      //ref to collection article_type.name
      type: String,
      require: true
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
}