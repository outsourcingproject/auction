'use strict';

import Base from './base.js';
var fs = require('fs');
var path = require('path');
var uuid = require("uuid")

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async __before() {
    this.modelInstance = think.model('image', null, 'api');
    this.modelPk = await this.modelInstance.getPk();
    this.needPaging = false;
  }  

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

    if(files["0"] == null)
      files = {'0': files}

    let picInfos = [];

    for(let f in files)
    {
      let file = files[f];
      let filepath = file.path;
     
      let fileType =/\.[^\.]+$/.exec(file.originalFilename); // 判断后缀名    
      //文件上传后，需要将文件移动到项目其他地方，否则会在请求结束时删除掉该文件
      let uploadPath = think.UPLOAD_PATH + '/upload';
      think.mkdir(uploadPath);
      let basename = uuid.v1(); //path.basename(filepath);
      let newPath = uploadPath + '/' + basename + fileType;
      await this.renameAsync(filepath, newPath);
      picInfos.push({"originName":file.originalFilename, "path":"file://"+basename+fileType});
    }  

    let imageModel = think.model("image",null,'api');
    await imageModel.addMany(picInfos);

    return this.success("success");
  }

}