// App
export * from './app.component';
export * from './app.service';
export * from './app.routes'

import {AUTH_PROVIDERS} from './auth';
import {SERVICE_PROVIDERS} from './service'
import {MOCK_SERVICE_PROVIDERS} from './service-mock'

let PROVIDERS = [];


if ('production' === ENV) {
  // Application wide providers
  PROVIDERS = [
    ...AUTH_PROVIDERS,
    ...SERVICE_PROVIDERS
  ];
} else {
  PROVIDERS = [
    ...AUTH_PROVIDERS,
    ...MOCK_SERVICE_PROVIDERS
  ];
}


export const APP_PROVIDERS = [...PROVIDERS];
