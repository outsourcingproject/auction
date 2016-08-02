import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {Observable} from "rxjs/Observable";
import {PagerComponent} from "../pager";

let data = require('./data.json');

@Component({
  selector: 'user-follow',
  template: require('./template.html'),
  styles: [require('./style.styl')],
  directives: [PagerComponent]
})
export class UserFollowComponent implements OnInit {

  public data = [];
  public pageSize:number=15;
  public pagedData;

  constructor(private _http:Http, private _router:Router) {

  }

  ngOnInit() {
    Observable.of(data).delay(500).subscribe((data)=> {
      this.data = data;
    });
  }

  onPagedDataChange(data) {
    this.pagedData = data;
    console.log(data);
    
  }
}
