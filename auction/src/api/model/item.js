import Base from './base.js'

export default class Item extends Base {
  beforeAdd(data) {
    data = super.beforeAdd(data);
    data.auctionBeginTime = data.auctionBeginTime || new Date();
    return data;
  }

  //check and change item status
  async checkStatus(){
    let currentTime = new date().getTime();
    try{
      await this.startTrans();

      let items_end = await this.where({auctionEndTime:{"<": currentTime},status:["NOTIN",[AUCTION_FAILED,AUCTION_ENDED]]}).select(); 
      items_end.map(async(i)=>{
      let boolBid = await this.where({item:i["id"]}).count();
      if( boolBid == 0 )
        await this.where({id:i["id"]}).update({status: AUCTION_FAILED});
      else
        await this.where({id:i["id"]}).update({status: AUCTION_ENDED});
      })

      let items_auctioning = await  itemModel.where({auctionBeginTime:{"<":currentTime}, auctionEndTime:{">": currentTime}, status:["NOTIN",[AUCTIONING]]}).select();
      items_auctioning.map(async(i)=> await itemModel.where({id:i["id"]}).update({status:AUCTIONING}));  

      await this.commit();
    }
    catch(e){
      await this.rollback();
    }
  }




}