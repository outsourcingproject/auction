import Base from './base.js'
let ObjectID = require('mongodb-core').BSON.ObjectID;

export default class Item extends Base {
  schema = {
    name: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true,
      default: ''
    },
    pic: {
      type: [String],
      required: true,
      default: []
    },
    publisher: {
      //ref to collection user.username
      type: String,
      required: true
    },
    group: {
      //ref to collection item_group._id
      type: String,
      required: true
    },
    beginPrice: {
      type: Number,
      required: true,
      default: 0
    },
    currentPrice: {
      type: Number,
      required: true,
      default: 0
    },
    //one of two type:
    //AHEAD_TIME
    //FIX_TIME (default)
    auctionType: {
      type: String,
      required: true,
      default: 'FIX_TIME'
    },
    auctionBeginTime: {
      type: Date,
      required: true,
      default: ()=>new Date()
    },
    auctionEndTime: {
      type: Date,
      required: true
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

  beforeAdd(data) {
    data = super.beforeAdd(data);
    data.auctionBeginTime = data.auctionBeginTime || new Date();
    return data;
  }
}