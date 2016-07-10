/**
 * index.js
 * Created by Huxley on 12/21/15.
 */
import {Component, Inject} from '@angular/core';
import {Http} from '@angular/http';
import {AucItemDetailed} from '../../components/auc-item-detailed';
import {SplitComponent} from "../../components/split/split.component";
import {AucListComponent} from "../../components/auc-list";
import {PagerComponent} from "../../components/pager";


let debug = require('debug')('ng:search');
let template = require('./template.html');
let style = require('./style.styl');

let config = require('./config.json');

@Component({
  selector: 'search',
  template: template,
  styles: [style],
  directives: [AucItemDetailed, SplitComponent, AucListComponent, PagerComponent]
})
export class Search {
  public data=config;
  constructor(private _http:Http) {
  }
}
