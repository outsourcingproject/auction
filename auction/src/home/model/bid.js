import Base from './base.js'
let ObjectID = require('mongodb-core').BSON.ObjectID;

export default class Bid extends Base {
  schema = {
    item: {
      //ref to collection item._id
      type: ObjectID,
      require: true
    },
    user: {
      //ref to collection user.username
      type: String,
      require: true
    },
    //出价金额
    value: {
      type: Number,
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
  };

  async afterSelect(data) {
    return  ['sadf', 'sadf'];
  }


}