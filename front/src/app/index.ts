// App

export * from './app.component';
export * from './app.service';
export * from './app.routes'
export * from './app.config'

import {AUTH_PROVIDERS} from './auth';
import {SERVICE_PROVIDERS} from './service'
import {MOCK_SERVICE_PROVIDERS} from './service-mock'
import {REQUEST_HOST} from "./app.config";

let PROVIDERS = [];


if ('production' === ENV) {
  // Application wide providers
  PROVIDERS = [
    ...AUTH_PROVIDERS,
    ...SERVICE_PROVIDERS,
    {provide:REQUEST_HOST,useValue:REQUEST_HOST}
  ];
} else {
  PROVIDERS = [
    ...AUTH_PROVIDERS,
    ...MOCK_SERVICE_PROVIDERS
  ];
}


export const APP_PROVIDERS = [...PROVIDERS];
