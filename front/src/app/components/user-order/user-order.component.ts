import {Component} from '@angular/core'
import {PagerComponent} from "../pager";

let orders = require('./order.json');

@Component({
  selector: 'user-auction',
  styles: [require('./style.styl')],
  template: require('./template.html'),
  directives:[PagerComponent]
})
export class UserOrderComponent {
  public data = orders;

  public pageSize:number = 12;

  public pagedData;

  public onPagedDataChange(data) {
    this.pagedData = data;
  }
}
