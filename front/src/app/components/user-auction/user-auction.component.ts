import {Component, OnInit} from '@angular/core'
import {PagerComponent} from '../pager'
import {Observable} from "rxjs/Observable";
let config = require('./config.json');

@Component({
  selector: 'user-auction',
  styles: [require('./style.styl')],
  template: require('./template.html'),
  directives: [PagerComponent]
})
export class UserAuctionComponent implements OnInit {
  public data = [];
  public pageSize:number = 12;
  public pagedData;

  ngOnInit() {
    Observable
      .of(config)
      .map((data)=> {
        return data.map((i)=>{
          i.itemStatus=Math.floor(i.bidStatus/2)?1:2;
          return i;
        })
      })
      .delay(500)
      .subscribe((data)=>this.data = data);
  }

  public onPagedDataChange(data) {
    this.pagedData = data;
  }
}
