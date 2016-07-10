import {Component} from '@angular/core'
import {SplitComponent} from "../../components/split";
import {UserDetailComponent} from "../../components/user-detail";
import {UserNavComponent} from "../../components/user-nav";

let debug = require('debug')('ng:user');

@Component({
  selector: 'user',
  styles: [require('./style.styl')],
  template: require('./template.html'),
  directives: [SplitComponent, UserDetailComponent, UserNavComponent]
})

export class UserComponent {
  public id:string;

  public navList:Array<{link:Array<any>,text:string}>=require('./nav-config.json');

  constructor() {
  }
}
