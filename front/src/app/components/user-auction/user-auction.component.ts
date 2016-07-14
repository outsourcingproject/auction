import {Component,OnInit} from '@angular/core'
import {PagerComponent} from '../pager'
let config=require('./config.json');

@Component({
  selector:'user-auction',
  styles:[require('./style.styl')],
  template:require('./template.html'),
  directives:[PagerComponent]
})
export class UserAuctionComponent implements OnInit{
  public data=config;
  public pageSize:number=12;
  public pagedData;

  ngOnInit(){

  }
  
  public onPagedDataChange(data){
    this.pagedData=data;
  }
}
