// App
export * from './app.component';
export * from './app.service';
export * from './app.routes'

import { AUTH_PROVIDERS } from './auth';

// Application wide providers
export const APP_PROVIDERS = [
  ...AUTH_PROVIDERS
];
