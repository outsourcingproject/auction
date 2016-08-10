import {Component, ViewChild, OnInit, Inject} from '@angular/core';
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
import {REQUEST_HOST} from "../../app.config";


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

  private _requestHost:string = REQUEST_HOST;

  @ViewChild('articleModal')
  public articleModal:ModalDirective;

  @ViewChild('delConfirmModal')
  public delConfirmModal:ModalDirective;

  constructor(private _http:Http, private _router:Router) {

  }

  ngOnInit() {


    this._getArticle().subscribe((data)=> {
      this.data = data;
    });
    // Observable.of(articleType).delay(400).subscribe((data)=>this.articleType = data);
    // Observable.of(data).delay(500).subscribe((data)=>this.data = data);

  }

  private _getArticle() {
    return this._http.get(this._requestHost + '/rest/article_type')
      .map((res)=>res.json().data)
      .flatMap((data)=> {
        this.articleType = data;
        return this._http.get(this._requestHost + '/rest/article', {withCredentials: true}).map((res)=>res.json().data);
      })
  }

  public onPagedDataChange(data) {
    this.pagedData = data;
  }

  public onDeleteArticle(article) {
    this.selectedArticle = article;
    this.delConfirmModal.show();
  }

  public onDeleteArticleSubmit() {
    //delete
    this._http.post(this._requestHost + '/rest/article/' + this.selectedArticle.id + '?_method=delete', {}, {withCredentials: true})
      .flatMap(()=> {
        return this._getArticle();
      })
      .subscribe((data)=> {
        this.delConfirmModal.hide();
        this.data = data
      });

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
      //put
      this._http.post(this._requestHost + '/rest/article/' + this.selectedArticle.id + '?_method=put', this.selectedArticle, {withCredentials: true}
        )
        .subscribe(()=> {
          this.articleModal.hide();
        });

    }
    else {
      //添加文章
      this._http.post(this._requestHost + '/rest/article', this.currArticle, {withCredentials: true}
      ).subscribe(()=> {
        this.articleModal.hide();
      });
    }


  }
}
