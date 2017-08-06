export class User {
  constructor(public id:number = null,
              public username:string = "",
              public password:string = "",
              public pwdRepeat:string = "",
              public pwdReset:string = "",
              public desc:string = "",
              public avatar:number = null,
              public avatarUrl:string="",
              public captcha:string = "",
              public email:string = "",
              public level:number = 1,
              public creditLines:number = 0,
              public remainCreditLines:number =0,
              public totalVolume:number = 3,
              public totalTurnover:number = 0,
              public lastLogin:number = null,
              public role:number = null,
              public createAt:number = null,
              public updateAt:number = null) {

  }
}
