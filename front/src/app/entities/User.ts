export class User {
  constructor(public id:number = null,
              public username:string = "",
              public password:string = "",
              public pwdRepeat:string = "",
              public pwdReset:string = "",
              public desc:string = "",
              public avatar:string = "",
              public captcha:string = "",
              public email:string = "",
              public level:number = 1,
              public creditLines:number = 0,
              public totalVolume:number = 3,
              public totalTurnover:number = 5000,
              public lastLogin:number = null,
              public createAt:number = null,
              public updateAt:number = null) {

  }
}
