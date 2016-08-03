import Base from './base.js'
import path from 'path';

var URI = require("uri-js");
/**
 * model
 */
export default class extends Base {

  async getImages(imageId) {
    let images;
    if (!(imageId instanceof Array))
      imageId = [imageId];
    images = await this.where({id: ["IN", imageId]}).select();
    for (let i of images) {
      i["realPath"] = this.translatePath(i["path"]);
    }
    return images;
  }

  translatePath(oldPath) {
    let res = URI.parse(oldPath);
    if (res["scheme"].toLowerCase() == "file") {
      if (res["host"].toLowerCase() == "upload_path") {
        return path.join(think.UPLOAD_PATH, res["path"]);
      }
    }
    return res;
  }

}