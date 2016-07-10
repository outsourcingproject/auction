import {Component} from '@angular/core'

let config=require('./config.json');

@Component({
  selector:'user-auction',
  styles:[require('./style.styl')],
  template:require('./template.html')
})
export class UserAuctionComponent{
  public data=config;
}
