import {Component, Input} from '@angular/core'

import {Router, RouterLink} from '@angular/router';

let debug = require('debug')('ng:user-nav');

@Component({
  selector: 'user-nav',
  styles: [require('./style.styl')],
  template: require('./template.html'),
  // directives: [RouterActive]
})
export class UserNavComponent {

  @Input()
  public navList:Array<{link:Array<any>,text:string}>=[];

  constructor(private _router:Router) {
  }

}
