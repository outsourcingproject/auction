/*
 * These are globally available directives in any template
 */
"use strict";
var core_1 = require('@angular/core');
// Angular 2 Router
var router_deprecated_1 = require('@angular/router-deprecated');
// application_directives: directives that are global through out the application
exports.APPLICATION_DIRECTIVES = router_deprecated_1.ROUTER_DIRECTIVES.slice();
exports.DIRECTIVES = [
    { provide: core_1.PLATFORM_DIRECTIVES, multi: true, useValue: exports.APPLICATION_DIRECTIVES }
];
//# sourceMappingURL=browser-directives.js.map