export class Address {
  constructor(public id:number = 1,
              public province:string = '北京',
              public city:string = '北京',
              public district:string = '东城区',
              public address:string = '',
              public phoneNum:string = '',
              public name:string = '',
              public isDefault:number = 0) {

  }
}
