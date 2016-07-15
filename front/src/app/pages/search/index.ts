/**
 * index.js
 * Created by Huxley on 12/21/15.
 */
import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {AucItemDetailed} from '../../components/auc-item-detailed';
import {SplitComponent} from "../../components/split/split.component";
import {AucListComponent} from "../../components/auc-list";
import {PagerComponent} from "../../components/pager";
import {Observable} from "rxjs/Observable";


let debug = require('debug')('ng:search');
let template = require('./template.html');
let style = require('./style.styl');

let data = require('../auctioning/data.json');

@Component({
  selector: 'search',
  template: template,
  styles: [style],
  directives: [AucItemDetailed, SplitComponent, AucListComponent, PagerComponent]
})
export class Search implements OnInit {
  public data = [];

  constructor(private _http:Http) {
  }

  ngOnInit() {
    Observable.of(data).delay(500).subscribe((data)=> {
      this.data = data
      console.log(this.data);
    });
  }
}
