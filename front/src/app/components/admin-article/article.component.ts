import {Component, ViewChild, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {Observable} from "rxjs/Observable";
import {PagerComponent} from "../pager";
import {
  ModalDirective, MODAL_DIRECTIVES, TimepickerComponent,
  DATEPICKER_DIRECTIVES, BS_VIEW_PROVIDERS
} from "ng2-bootstrap/ng2-bootstrap";

import {Article} from "../../entities/article";
import {UEditorComponent} from "../ueditor/ueditor.component";


let data = require('./data.json');
let articleType = require('./article-type.json');

let debug = require('debug')('ng:admin-article');

@Component({
  selector: 'admin-article',
  template: require('./template.html'),
  styles: [require('./style.styl')],
  directives: [PagerComponent, MODAL_DIRECTIVES, TimepickerComponent, DATEPICKER_DIRECTIVES, UEditorComponent],
  viewProviders: [BS_VIEW_PROVIDERS]
})
export class AdminArticleComponent implements OnInit {

  public articleType = [];
  public data = [];

  public pageSize:number = 15;
  public pagedData;

  public selectedArticle = null;
  public currArticle = new Article();

  @ViewChild('articleModal')
  public articleModal:ModalDirective;

  @ViewChild('delConfirmModal')
  public delConfirmModal:ModalDirective;

  constructor(private _http:Http, private _router:Router) {

  }

  ngOnInit() {
    Observable.of(articleType).delay(400).subscribe((data)=>this.articleType = data);
    Observable.of(data).delay(500).subscribe((data)=>this.data = data);

  }

  public onPagedDataChange(data) {
    this.pagedData = data;
  }

  public onDeleteArticle(article) {
    this.selectedArticle = article;
    this.delConfirmModal.show();
  }

  public onDeleteArticleSubmit() {
    //TODO: delete the article
    this.delConfirmModal.hide();
  }


  public onModifyArticle(article) {
    this.currArticle = this.selectedArticle = article;
    this.articleModal.show();
  }

  public onAddArticle() {
    this.selectedArticle = null;
    this.articleModal.show();
    this.currArticle = new Article();
  }

  public onUeditorBlur(data) {
    this.currArticle.content = data;
  }

  public onSubmit() {

    if (this.selectedArticle) {
      //修改文章
      //TODO:put article : currArticle

    }
    else {
      //添加文章
      //TODO:post article : currArticle
    }

    this.articleModal.hide();

    debug(this.currArticle);
  }
}
