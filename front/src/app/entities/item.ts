export class Item {
  constructor(public id:number = null,
              public name:string = '',
              public images:Array<string> = null,
              public desc:string = "",
              public tag:string = "",
              public foundTime:string = "",
              public foundLocation:string = "",
              public group:number = null,
              public beginPrice:number = null,
              public currentPrice:number = null,
              public auctionType:number = null,
              public auctionBeginTime:number = new Date().getTime(),
              public auctionEndTime:number = new Date().getTime(),
              public createAt:number = new Date().getTime(),
              public updateAt:number = new Date().getTime()) {

  }
}
