// Angular 2
// rc2 workaround
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {enableDebugTools, disableDebugTools} from '@angular/platform-browser';
import {enableProdMode} from '@angular/core';

let debug = require('debug');



// Environment Providers
let PROVIDERS = [
  // common env directives
];

// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
let _decorateComponentRef = function identity(value) {
  return value;
};

if ('production' === ENV) {
  // Production
  disableDebugTools();
  enableProdMode();

  PROVIDERS = [
    ...PROVIDERS,
    /*{provide: LocationStrategy, useClass: HashLocationStrategy}*/
  ];

  debug.enable('ng:*');
  debug.enable('sv:*');

} else {

  _decorateComponentRef = (cmpRef) => {
    let _ng = (<any>window).ng;
    enableDebugTools(cmpRef);
    (<any>window).ng.probe = _ng.probe;
    (<any>window).ng.coreTokens = _ng.coreTokens;
    return cmpRef;
  };


  // Development
  PROVIDERS = [
    ...PROVIDERS,
    // custom providers in development
  ];


  debug.enable('ng:*');
  debug.enable('sv:*');
}

export const decorateComponentRef = _decorateComponentRef;

export const ENV_PROVIDERS = [
  ...PROVIDERS
];
