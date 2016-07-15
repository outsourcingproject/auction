import {Component, OnInit} from '@angular/core'
import {Observable} from "rxjs/Observable";

let data = require('./config.json');
@Component({
  selector: 'user-info',
  template: require('./template.html'),
  styles: [require('./style.styl')]

})
export class UserInfoComponent {

  public data = {};

  constructor() {
  }

  ngOnInit() {
    Observable.of(data).delay(500).subscribe((data)=> {
      this.data = data;
    })
  }
}
