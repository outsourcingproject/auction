///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="../../node_modules/angular2/ts/typings/node/node.d.ts"/>
import { bootstrap } from 'angular2/bootstrap';
import { Component, Inject } from 'angular2/core';
import { Router, ROUTER_PROVIDERS, RouteConfig } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import App from './components/app';

bootstrap(App, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);
