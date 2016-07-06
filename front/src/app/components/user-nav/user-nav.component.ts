import {Component} from '@angular/core'
//import {RouterActive} from "../../directives/router-active";

let debug = require('debug')('ng:user-nav');

@Component({
  selector: 'user-nav',
  styles: [require('./style.styl')],
  template: require('./template.html'),
 // directives: [RouterActive]
})
export class UserNavComponent {
  public nav:Object;

  constructor() {
    this.nav = require('./config.json')['userNav'];
  }
}
