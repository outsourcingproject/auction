import Base from './base'

export default class RoleAuthority extends Base {
/**
   *
   * @param roleName {String} name of role
   * @param authorities {ObjectID} authorities' name
   * @returns {Promise}
   */
  async addRoleAuthorities(roleName, ...authorities) {
    
    let authorityModel=think.model('authority',null,'api');
    let roleModel=think.model('role',null,'api');

    let role = await roleModel.where({name:roleName}).find();

    if(think.isEmpty(role)){
    	return ;
    }

    for (let an of authorities) {
      let authority = await authorityModel.where({name:an}).find();
      if(think.isEmpty(authority)){
      	continue;
      }
      await this.thenAdd({role:role.id,authority:authority.id},{role:role.id,authority:authority.id})
    }
  }

}