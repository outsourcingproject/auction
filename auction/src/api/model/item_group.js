import Base from './base.js'

export default class ItemGroup extends Base {
  init(...args){
    super.init(...args);
    this.relation = {
      item: {
        type: think.model.HAS_MANY,
        key:"id",
        fKey:"group",
        order: "createAt DESC",
        relation: false
      }
    };
  }

  selectData(id)
  {
      id.toString();
      return this.setRelation(true).where("id = "+id).limit(8).find();
  }

  //获取首页显示的列表
  getList(){
    return this.setRelation(false).where({isOpen:1}).order("createAt DESC").select();
  }
  //显示在首页的拍卖物品信息
  async getGroupItem(){
    let groups = [];
    let itemGroup = await this.getList();
    for (let i in itemGroup){
      let g = await  this.selectData(itemGroup[i]["id"]);
      groups.push(g);
    }
    return groups;
  }

  //管理员获取物品列表
  getListAdmin(){
    return this.setRelation(false).order("createAt DESC").select();
  }

  async beforeAdd(data) {
    data = super.beforeAdd(data);
    let groups = await this.select();
    data.no = groups.reduce((pre, curr)=>pre > +curr.no ? pre : +curr.no || pre, 0) + 1;
    return data;
  }
}  