export class Item {
  constructor(public id:number = null,
              public name:string = '',
              public image:string = '[]',
              public images:Array<number> = [],
              public desc:string = "",
              public tag:string = "",
              public foundTime:string = "",
              public foundLocation:string = "",
              public type:number = null,
              public group:number = null,
              public beginPrice:number = 0,
              public currentPrice:number = 0,
              public auctionType:number = null,
              public auctionBeginTime:number = new Date().getTime(),
              public auctionEndTime:number = new Date().getTime(),
              public createAt:number = new Date().getTime(),
              public updateAt:number = new Date().getTime()) {

  }
}
