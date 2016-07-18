import Base from './base.js'

export default class Article extends Base {
	getListAdmin(){
		return this.order("createAt DESC").select();
	}
}