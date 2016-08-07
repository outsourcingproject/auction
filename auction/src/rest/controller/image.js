'use strict';

import Base from './base.js';
var fs = require('fs');
var path = require('path');
var uuid = require("uuid")


let renameAsync = think.promisify(fs.rename, fs);
let existsAsync = think.promisify(fs.exists, fs);
let readFileAsync = think.promisify(fs.readFile, fs);

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async __before() {

    this.modelInstance = think.model('image', null, 'api');
    this.modelPk = await this.modelInstance.getPk();
    this.needPaging = false;
    return await super.__before();
  }


  async postAction() {
    //这里的 key 需要和 form 表单里的 name 值保持一致
    var files = think.extend({}, this.file('files'));

    if (think.isEmpty(files)) {
      return this.fail('NO_UPLOAD_FILE');
    }

    if (!files["0"])
      files = {'0': files};

    let picInfos = [];

    for (let f in files) {
      let file = files[f];
      let filepath = file.path;

      let fileType = /\.[^\.]+$/.exec(file.originalFilename); // 判断后缀名
      //文件上传后，需要将文件移动到项目其他地方，否则会在请求结束时删除掉该文件


      let baseName = uuid.v1() + fileType;
      let subpath = 'images';
      let basePath = path.join(think.UPLOAD_PATH, subpath);
      think.mkdir(basePath);
      await renameAsync(filepath, path.join(basePath, baseName));
      picInfos.push({
        "originName": file.originalFilename,
        "path": "file://" + 'UPLOAD_PATH' + '/' + subpath + '/' + baseName
      });
    }

    let imageModel = think.model("image", null, 'api');
    let result = await imageModel.addMany(picInfos);

    return think.isEmpty(result) ? this.fail("Failed to upload!") : this.success(result);
  }

  async getAction() {
    if (!this.id) {
      return this.fail('NO_IMAGE_ID');
    }
    let imageModel = think.model('image', null, 'api');
    try {
      console.log(this.id);
      let images = await imageModel.getImages(this.id);
      let file = await readFileAsync(images[0].realPath);

      this.type('image/*');
      return this.end(file);
    } catch (e) {
      return this.fail('NO_THIS_IMAGE');
    }


  }
}