/**
 * index.js
 * Created by Huxley on 12/21/15.
 */
import {Component, Inject} from '@angular/core';
import {Http} from '@angular/http';
import {AucItemDetailed} from '../auc-item-detailed';

let debug = require('debug')('ng:auctioning');
let config = require('./config.json');
let template = require('./template.html');
let style = require('./style.scss');
const service = require('./service');

@Component({
  selector: 'auctioning',
  template: template,
  styles: [style],
  directives: [AucItemDetailed]
})
export class Auctioning {
  public header;
  public filters;
  public filterSelected;
  public end;
  public curPageIdx;
  public items;
  public curPageRange;

  constructor(@Inject(Http)
              private http) {
    this.header = config.header;
    this.filters = config.filters;

    this.filterSelected = this.filters.map(() => {
      return 0;
    });
    this.pageIdxClick(1);
  }

  onFilterClick(filterIdx, listIdx) {
    this.filterSelected[filterIdx] = listIdx;
  }

  pageIdxClick(idx) {
    if (idx <= 0) idx = 1;
    if (this.end && this.end < idx) idx = this.end;
    this.curPageIdx = idx;
    let {ret, end} = service.getItems(this.curPageIdx, this.filterSelected);
    this.items = ret;
    this.end = end;
    end = end === 0 ? idx + 3 : end;
    this.curPageRange = [];
    for (let i = (idx - 2 > 0 ? idx - 2 : 1); i <= (idx + 2 <= end ? idx + 2 : end); ++i)
      this.curPageRange.push(i);
    debug(this.end);
  }

  prev() {
    this.pageIdxClick(this.curPageIdx - 1);
  }

  next() {
    this.pageIdxClick(this.curPageIdx + 1);
  }
}
