import Base from './base.js'
let ObjectID = require('mongodb-core').BSON.ObjectID;

export default class ItemGroup extends Base {
  schema = {
    name: {
      type: String,
      require: true,
      unique: true,
      default: ''
    },
    desc: {
      type: String,
      require: true,
      default: ''
    },
    no: {
      type: Number,
      require: true,
      unique: true,
      default: ()=> {
        return this.max('no') + 1;
      }

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

  async beforeAdd(data) {
    data = super.beforeAdd(data);
    let groups = await this.select();
    data.no = groups.reduce((pre, curr)=>pre > +curr.no ? pre : +curr.no || pre, 0) + 1;
    return data;
  }

}