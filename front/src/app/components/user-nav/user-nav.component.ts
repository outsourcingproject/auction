import {Component, OnInit, ContentChildren, QueryList} from '@angular/core'
//import {RouterActive} from "../../directives/router-active";

import {Router, RouterLink} from '@angular/router';

let debug = require('debug')('ng:user-nav');

@Component({
  selector: 'user-nav',
  styles: [require('./style.styl')],
  template: require('./template.html'),
  // directives: [RouterActive]
})
export class UserNavComponent {

  public nav:{userNav:Array<{link:Array<any>,text:string}>};

  constructor(private _router:Router) {
    this.nav = require('./config.json')['userNav'];
  }

}
