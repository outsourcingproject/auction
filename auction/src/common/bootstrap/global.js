/**
 * this file will be loaded before server started
 * you can define global functions used in controllers, models, templates
 */

/**
 * use global.xxx to define global functions
 *
 * global.fn1 = function(){
 *     
 * }
 */

// 载入模块
var Segment = require('segment');
// 创建实例
var segment = new Segment();
// 使用默认的识别模块及字典，载入字典文件需要1秒，仅初始化时执行一次即可
segment.useDefault();


let initAuthority = async()=> {
  "use strict";

  let defaultAuthorities = think.config('site.defaultAuthorities');
  let authorityModel = think.model('authority', null, 'api');

  for (let authority of defaultAuthorities) {
    let result = await authorityModel.where({name: authority.name}).find();
    if (think.isEmpty(result)) {
      await authorityModel.addAuthority(authority.name, authority.desc, authority.paths);
    }
  }
};
let initRole = async()=> {
  "use strict";

  let defaultRoles = think.config('site.defaultRoles');
  let roleModel = think.model('role', null, 'api');

  for (let role of defaultRoles) {
    let result = await roleModel.where({name: role.name}).find();
    if (think.isEmpty(result)) {
      await roleModel.addRole(role.name, role.desc, role.extend, role.authorities);
    }
  }
};

think.isStringExpReg = (string)=> {
  return think.isRegExp(string) || string.match(/^\/[\w\W]+\/$/);
};
think.segment = segment;

//Promise.all([initAuthority(), initRole()]).then();
//initAuthority().then();
initRole().then();

global.removeHTMLTag = (str)=> {
  return str.replace(/<[^>]+>/g, "");//去掉所有的html标记
};

global.checkAuction = async() => {
  let itemModel = think.model("item", null, "api");
  await itemModel.checkStatus();
  await itemModel.initCheckStatusTimer();
};

checkAuction().then();