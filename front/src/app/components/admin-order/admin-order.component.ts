import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {Observable} from "rxjs/Observable";
import {PagerComponent} from "../pager/pager.component";

let data = require('./data.json');

@Component({
  selector: 'admin-order',
  template: require('./template.html'),
  styles: [require('./style.styl')],
  directives:[PagerComponent]
})
export class AdminOrderComponent implements OnInit {

  public data = [];

  public pageSize:number = 15;
  public pagedData;

  public selected = null;

  constructor(private _http:Http, private _router:Router) {

  }

  ngOnInit() {
    Observable.of(data).delay(500).subscribe((data)=> {
      this.data = data;
    })
  }
  public onPagedDataChange(data){
    this.pagedData=data;
  }
}
