import {Component,} from '@angular/core'
import {PagerComponent} from "../pager";
import { MODAL_DIRECTIVES,BS_VIEW_PROVIDERS } from 'ng2-bootstrap/ng2-bootstrap';

let config=require('./config.json');

@Component({
  selector:'user-message',
  styles:[require('./style.styl')],
  template:require('./template.html'),
  viewProviders:[BS_VIEW_PROVIDERS],
  directives:[PagerComponent,MODAL_DIRECTIVES]
})
export class UserMessageComponent{
  public data=config;
  public selectedMessage:number;
  public pagedData;
  
  public pageSize:number=12;
  
  public lgModal;

  public onMessageClick(idx:number){
    this.selectedMessage=idx;
  }
  public onPagedDataChange(pagedData){
    this.pagedData=pagedData;
  }
}
