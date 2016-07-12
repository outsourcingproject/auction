'use strict';

import Base from './base.js';
var uuid = require("uuid")

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    return this.display();
  }

  renameAsync(oldPath,newPath){
  	var renamePromise = think.promisify(fs.rename, fs);
  	return renamePromise(oldPath,newPath);
  }
  async postAction(){
  	//这里的 key 需要和 form 表单里的 name 值保持一致
    var files = think.extend({}, this.file('files'));
    for(let f in files)
    {
      var file = files[f];
      var filepath = file.path;
    
      //文件上传后，需要将文件移动到项目其他地方，否则会在请求结束时删除掉该文件
      var uploadPath = think.RESOURCE_PATH + '/upload';
      think.mkdir(uploadPath);
      var basename = uuid.v1(); //path.basename(filepath);
      await renameAsync(filepath, uploadPath + '/' + basename);
      //fs.renameSync(filepath, uploadPath + '/' + basename);
  
      file.path = uploadPath + '/' + basename;
  
      if(think.isFile(file.path)){
        console.log('is file')
      }else{
        console.log('not exist')
      }
    }  	

  }
}