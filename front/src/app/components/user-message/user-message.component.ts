import {Component, OnInit, ViewChild, Inject} from '@angular/core'
import {Http} from '@angular/http'
import {PagerComponent} from "../pager";
import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS, ModalDirective} from 'ng2-bootstrap/ng2-bootstrap';
import {Observable} from "rxjs/Observable";
import {REQUEST_HOST} from "../../app.config";
import {UserService} from "../../service/user.service";

let config = require('./config.json');

@Component({
  selector: 'user-message',
  styles: [require('./style.styl')],
  template: require('./template.html'),
  viewProviders: [BS_VIEW_PROVIDERS],
  directives: [PagerComponent, MODAL_DIRECTIVES]
})
export class UserMessageComponent implements OnInit {

  public data = [];
  public selected = {from: {}};

  public pageSize:number = 12;

  public pagedData;

  private _requestHost:string = REQUEST_HOST;

  @ViewChild('detailModal')
  public detailModal:ModalDirective;

  public onMessageClick(idx:number) {
    this.selected = this.data[idx];
    this.selected["read"]=1;
    this._http.post(this._requestHost+"/rest/message/" + this.data[idx].id + '?_method=put',{read:1},{withCredentials: true})
        .toPromise()
        .then();
    this.detailModal.show();
  }
  public onMessageDel(msg){
    let res = confirm("确认删除？")
    if(res){
      this._http.post(this._requestHost+"/rest/message/" + msg.id + '?_method=delete',{},{withCredentials: true}).toPromise()
        .then(()=>{
          this._getData()
        })
    }
  }
  public onPagedDataChange(pagedData) {
    this.pagedData = pagedData;
  }

  constructor(private _http:Http, private _userServer:UserService) {
  }

  ngOnInit() {
    this._getData()

  }
  private _getData(){
    this._userServer.getUser().flatMap((user)=> {
      return this._http.get(this._requestHost + '/rest/message?filter=' + JSON.stringify({to: user.id}), {withCredentials: true})
        .map((res)=>res.json().data);
    }).subscribe((data)=>this.data = data);
  }
}
