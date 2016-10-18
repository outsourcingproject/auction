// App

export * from './app.component';
export * from './app.service';
export * from './app.routes'
export * from './app.config'

import {AUTH_PROVIDERS} from './auth';
import {SERVICE_PROVIDERS} from './service'

let PROVIDERS = [];


// Application wide providers
PROVIDERS = [
  ...AUTH_PROVIDERS,
  ...SERVICE_PROVIDERS
];


export const APP_PROVIDERS = [...PROVIDERS];
