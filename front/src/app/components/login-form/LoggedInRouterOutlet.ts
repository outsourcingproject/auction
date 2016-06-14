/**
 * index.js.js
 * Created by Huxley on 12/2/15.
 */
import { Directive, Attribute, ElementRef, DynamicComponentLoader, Inject } from 'angular2/core'
import { Router, RouterOutlet, ComponentInstruction } from 'angular2/router';
let debug = require('debug')('ng:router');
@Directive({
    selector: 'custom-router-outlet'
})
export class LoggedInRouterOutlet extends RouterOutlet {
    private parentRouter:Router;
    private publicRoutes:Object;

    constructor(@Inject(ElementRef) _elementRef, @Inject(DynamicComponentLoader) _loader,
                @Inject(Router) _parentRouter, @Attribute('name') nameAttr) {
        super(_elementRef, _loader, _parentRouter, nameAttr);

        this.parentRouter = _parentRouter;
        this.publicRoutes = {
            '/home': true,
            '/login': true,
            '/signup': true,
            '/todo': true
        };
    }

    activate(instruction: ComponentInstruction) {
        var url = this.parentRouter.lastNavigationAttempt;
        debug(url);
        if (!this.publicRoutes[url] && !(localStorage.getItem('userToken') && localStorage.getItem('userToken') !== -1)) {
            this.parentRouter.navigateByUrl('/login');
        }
        return super.activate(instruction);
    }
}
