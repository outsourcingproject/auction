import {Component, Input, OnInit} from '@angular/core'
let debug = require('debug')('ng:user');

@Component({
  selector: 'user-detail',
  styles: [require('./style.styl')],
  template: require('./template.html'),
  inputs: ['uid']
})
export class UserDetailComponent implements OnInit {

  @Input()
  public uid:string;


  ngOnInit() {
    debug(this.uid)
  }
}
