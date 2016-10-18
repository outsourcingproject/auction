import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';

@Component({
  selector: 'admin-search',
  template: require('./template.html'),
  styles: [require('./style.styl')]
})
export class AdminSearchComponent implements OnInit {


  private _keyword: string = '';
  public get keyword() {
    return this._keyword;
  }

  public set keyword(val) {
    this._keyword = val;
    this.updateResult();
  }

  private _config = {"name": 1};
  public get config() {
    return this._config;
  }

  @Input()
  public set config(val) {
    this._config = val;
    this.updateResult();
  }


  private _data: Array<any> = [];
  public get data() {
    return this._data;
  }

  @Input()
  public set data(val) {
    this._data = val;
    this.updateResult();
  }

  @Output()
  public result = new EventEmitter<Array<any>>();

  private updateResult() {
    if (this.keyword) {

      let result = this.data.map((item)=> {
        let hintTimes = 0;

        for (let key in this.config) {
          hintTimes += ((item[key] || '').split(this.keyword).length - 1) * this.config[key];
        }
        item.hintTimes = hintTimes;
        return item;
      })
        .filter((i)=>i.hintTimes)
        .sort((x, y)=>y.hintTimes - x.hintTimes || +y.createAt - +x.createAt);

      this.result.emit(result);
    }
    else {
      this.result.emit(this.data);
    }
  }

  ngOnInit() {
    this.updateResult();
  }

}
