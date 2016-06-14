/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig, Router} from '@angular/router-deprecated';

import {Http} from '@angular/http';
//import LoggedInRouterOutlet from '../login-form/LoggedInRouterOutlet';
import {Todo} from './components/todo';
import {RouterActive} from './directives/router-active';

import {MasterBar} from './components/masterbar';
import {Home} from './components/home';
import {Auctioning} from './components/auctioning';
import {AucItemShown} from './components/auc-item-shown';

let debug = require('debug')('ng:app');
let template = require('./template.html');
let style = require('./style.scss');

@RouteConfig([
  {path: '/home', as: 'Home', component: Home, useAsDefault: true},
  {path: '/auc_item/:id', as: 'AucItem', component: AucItemShown},
  {path: '/auctioning', as: 'Auctioning', component: Auctioning},
  {path: '/todo', as: 'Todo', component: Todo}
])
@Component({
  selector: 'app',
  template: template,
  styles: [style],
  directives: [MasterBar, /*LoggedInRouterOutlet*/]
})
export class App {
  constructor(private _router:Router, private _http:Http) {
    debug(this._router);
    debug(this._http);
  }

  // TODO
}
