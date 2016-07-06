import {Component} from '@angular/core'
import {SplitComponent} from "../../components/split";
import {UserDetailComponent} from "../../components/user-detail";
import {UserNavComponent} from "../../components/user-nav";

let debug = require('debug')('ng:user-info');

@Component({
  selector: 'user',
  styles: [require('./style.styl')],
  template: require('./template.html'),
  directives: [SplitComponent, UserDetailComponent, UserNavComponent]
})

export class UserComponent {
  public id:string;

  constructor() {
    this.id ;
    debug(this.id);
  }
}
