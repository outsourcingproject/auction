import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

let debug = require('debug')('ng:pager');

@Component({
  selector: 'pager',
  styles: [require('./style.styl')],
  template: require('./template.html')
})
export class PagerComponent {

  public currPageIdx:number;
  public currPageRange:Array<number>;
  public pageNum:number;
  
  private _data:Array<Object>;
  public get data() {
    return this._data;
  }

  @Input()
  public set data(val) {
    if (!val) {
      return;
    }
    debug(val);
    this._data = val;
    this.pageIdxClick(this.currPageIdx || 1);
  }

  @Input()
  public pageSize:number = 15;

  @Output()
  public pagedDataChange = new EventEmitter<Array<Object>>();


  constructor() {
  }


  public pageIdxClick(idx:number) {
    let pageNum = this.pageNum= Math.ceil(this.data.length / this.pageSize) || 1;

    if (idx <= 0) idx = 1;
    if (pageNum && pageNum < idx) idx = pageNum;
    this.currPageIdx = idx;

    setTimeout(()=> {
      let begin = (idx - 1) * this.pageSize;
      let end = begin + this.pageSize;
      this.pagedDataChange.emit(this.data.slice(begin, end));
    }, 0);


    this.currPageRange = [];
    for (let i = (idx - 2 > 0 ? idx - 2 : 1); i <= (idx + 2 <= pageNum ? idx + 2 : pageNum); ++i)
      this.currPageRange.push(i);
  }

  public prev() {
    this.pageIdxClick(this.currPageIdx - 1);
  }

  public next() {
    this.pageIdxClick(this.currPageIdx + 1);
  }

  public first(){
     this.pageIdxClick(1);
  }
  public last(){
    this.pageIdxClick(this.pageNum);
  }

}
