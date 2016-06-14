import {Component, Inject} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';
import LoggedInRouterOutlet from '../login-form/LoggedInRouterOutlet';
import Todo from '../todo';
import MasterBar from '../masterbar';
import Home from '../home';
import Auctioning from '../auctioning';
import AucItemShown from '../auc-item-shown';
let debug = require('debug')('ng:app');
let template = require('./template.html');
let style = require('./style.less');

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
    directives: [MasterBar, LoggedInRouterOutlet]
})
export default class App {
    constructor(private _router:Router, private _http:Http) {
        debug(this._router);
        debug(this._http);
    }

    // TODO
}