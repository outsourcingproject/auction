import Base from './base.js'

export default class ItemGroup extends think.model.relation {
  init(...args){
    super.init(...args);
    this.relation = {
      item: {
        type: think.model.HAS_MANY,
        key:"id",
        fKey:"group",
        order: "createAt DESC"
      }
    };
  }

  selectData(id,limit)
  {
      id.toString();
      return this.setRelation(true).where("id = "+id).limit(limit).select();
  }

  getList(){
    return this.setRelation(false).order("createAt DESC").limit(4).select();
  }

  async beforeAdd(data) {
    data = super.beforeAdd(data);
    let groups = await this.select();
    data.no = groups.reduce((pre, curr)=>pre > +curr.no ? pre : +curr.no || pre, 0) + 1;
    return data;
  }

}