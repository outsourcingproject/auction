export default class Base extends think.model.relation {
  beforeUpdate(data) {
    data.updateAt = new Date();
    return data;
  }

  beforeAdd(data) {
    data.updateAt = new Date();
    data.createAt = new Date();
    return data;
  }
}