import Base from './base.js'
var URI = require("uri-js");
/**
 * model
 */
export default class extends Base {

	async getImages(imageId){
		let images;
		if(!(imageId instanceof Array))
			imageId = new Array(imageId);
		images = await this.where({id:["IN",imageId]}).select();
		for(let i of images){
			i["path"] = this.translatePath(i["path"]);
		}
		return images;
	}

	translatePath(oldPath){
		let res = URI.parse(oldPath);
		if(res["scheme"]=="file"){
			if(res["host"]=="upload_path"){
				return think.UPLOAD_PATH + res["path"];
			}
		}
		return res;
	}

}