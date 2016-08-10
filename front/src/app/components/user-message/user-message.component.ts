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
    this.detailModal.show();
  }

  public onPagedDataChange(pagedData) {
    this.pagedData = pagedData;
  }

  constructor(private _http:Http, private _userServer:UserService) {
  }

  ngOnInit() {
    this._userServer.getUser().flatMap((user)=> {
      console.log(user);
      return this._http.get(this._requestHost + '/rest/message?filter=' + JSON.stringify({to: user.id}), {withCredentials: true})
        .map((res)=>res.json().data);
    }).subscribe((data)=>this.data = data);


    // Observable.of(config).delay(500).subscribe((data)=> {
    //   this.data = data;
    // })
  }
}
