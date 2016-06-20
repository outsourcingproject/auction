/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig, Router,RouterOutlet} from '@angular/router-deprecated';

import {Http} from '@angular/http';
import {Todo} from './components/todo';
import {RouterActive} from './directives/router-active';
import {MasterBar} from './components/masterbar';
import {Home} from './pages/home';
import {Auctioning} from './pages/auctioning';
import {AucItemShown} from './pages/auc-item-shown';
import {InfoShown} from './pages/info-shown'
import {LoginForm} from "./components/login-form";
import {SignupForm} from "./components/signup-form";
import {CustomRouterOutlet} from "./directives/custom-router-outlet";

let debug = require('debug')('ng:app');
let template = require('./template.html');
let style = require('./style.styl');


@RouteConfig([
  {path: '/home', as: 'Home', component: Home, useAsDefault: true},
  {path: '/auc_item/:id', as: 'AucItem', component: AucItemShown},
  {path: '/auctioning', as: 'Auctioning', component: Auctioning},
  {path: '/info', as: 'Info', component: InfoShown},
  {path: '/login', as: 'Login', component: LoginForm},
  {path: '/signup', as: 'Signup', component: SignupForm},
  {path: '/todo', as: 'Todo', component: Todo}
])
@Component({
  selector: 'app',
  template: template,
  styles: [style],
  directives: [MasterBar, CustomRouterOutlet]
})
export class App {
  constructor(private _router:Router, private _http:Http) {
    debug(this._router);
    debug(this._http);
  }

  // TODO
}
