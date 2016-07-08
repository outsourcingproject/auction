import {Component} from '@angular/core'

@Component({
  selector:'user-info',
  template:require('./template.html'),
  styles:[require('./style.styl')]

})
export class UserInfoComponent {

  public data:Object;

  constructor(){
    this.data=require('./config.json');
    console.log(this.data);
  }
}
