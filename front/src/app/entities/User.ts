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
              public level:number = 1) {

  }
}
