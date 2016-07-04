export default class Base extends think.model.relation {
  async beforeUpdate(data) {
    data.updateAt = new Date().getTime();
    return data;
  }

  async beforeAdd(data) {

    data.createAt=data.updateAt = new Date().getTime();
    return data;
  }

}