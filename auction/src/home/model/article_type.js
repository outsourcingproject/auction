import Base from './base.js'

export default class ArticleType extends Base {
  schemas = {
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