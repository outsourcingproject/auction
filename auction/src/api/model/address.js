import Base from './base.js'

export default class Address extends Base {
	getList(userId){
		return this.where({user:userId}).find();
	}
	addOne(addr){
		return this.add(addr);
	}
	updateOne(addr){
		return this.where({id:addr.id}).update({addr});
	}
	deleteOne(addrId){
		return this.delete({where:{id:addrId}});
	}
}