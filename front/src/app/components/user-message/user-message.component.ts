import {Component, OnInit, ViewChild} from '@angular/core'
import {PagerComponent} from "../pager";
import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS, ModalDirective} from 'ng2-bootstrap/ng2-bootstrap';
import {Observable} from "rxjs/Observable";

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

  @ViewChild('detailModal')
  public detailModal:ModalDirective;

  public onMessageClick(idx:number) {
    this.selected = this.data[idx];
    this.detailModal.show();
  }

  public onPagedDataChange(pagedData) {
    this.pagedData = pagedData;
  }

  ngOnInit() {
    Observable.of(config).delay(500).subscribe((data)=> {
      this.data = data;
    })
  }
}
