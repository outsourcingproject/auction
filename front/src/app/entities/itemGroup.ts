export class ItemGroup {
  constructor(public id:Number = null,
              public name:String = null,
              public desc:String = null,
              public no:Number = null,
              public isOpen:Number = null,
              public createAt:Number = +new Date(),
              public updateAt:Number = +new Date()) {


  }
}
