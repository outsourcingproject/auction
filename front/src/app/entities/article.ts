export class Article{
  constructor(public id:number=0,
              public title:string='',
              public image:string="",
              public content:string="",
              public author:number=0,
              public type:string="",
              public createAt:number=new Date().getTime(),
              public updateAt:number=new Date().getTime()
  ){

  }
}
