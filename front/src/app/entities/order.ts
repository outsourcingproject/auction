export class Order {
  constructor(public id:number = null,
              public user:number = null,
              public uid:number = null,
              public username:string = null,
              public item:number = null,
              public iid:number = null,
              public name:string = null,
              public address:string = null,
              public status:number = null,
              public remainCreditLines:number = null,
              public price:number = null,
              public expressName:string = null,
              public expressNo:string = null,
              public createAt:number = +new Date(),
              public updateAt = +new Date()) {
  }
}
