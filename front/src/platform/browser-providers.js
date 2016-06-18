/*
 * These are globally available services in any component or any other service
 */
"use strict";
// Angular 2
var common_1 = require('@angular/common');
// Angular 2 Http
var http_1 = require('@angular/http');
// Angular 2 Router
var router_deprecated_1 = require('@angular/router-deprecated');
/*
* Application Providers/Directives/Pipes
* providers/directives/pipes that only live in our browser environment
*/
exports.APPLICATION_PROVIDERS = common_1.FORM_PROVIDERS.concat(http_1.HTTP_PROVIDERS, router_deprecated_1.ROUTER_PROVIDERS, [
    { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
]);
exports.PROVIDERS = exports.APPLICATION_PROVIDERS.slice();
//# sourceMappingURL=browser-providers.js.map