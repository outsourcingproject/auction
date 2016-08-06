import {Component,ViewContainerRef} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';

import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS, TimepickerComponent,DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

let data = require('./data.json');

@Component({
  selector: 'admin-overview',
  template: require('./template.html'),
  styles: [require('./style.styl')],
  directives: [MODAL_DIRECTIVES, TimepickerComponent,DATEPICKER_DIRECTIVES],
  viewProviders: [BS_VIEW_PROVIDERS]
})
export class AdminOverviewComponent {

  public data = data;

  public mytime:Date = new Date();


  constructor(private _http:Http, private _router:Router) {
  }

}
