"use strict";
var core_1 = require('@angular/core');
var lang_1 = require('@angular/core/src/facade/lang');
var router_deprecated_1 = require('@angular/router-deprecated');
/**
 * RouterActive dynamically finds the first element with routerLink and toggles the active class
 *
 * ## Use
 *
 * ```
 * <li router-active="active"><a [routerLink]=" ['/Home'] ">Home</a></li>
 * <li [routerActive]=" activeStringValue "><a [routerLink]=" ['/Home'] ">Home</a></li>
 * ```
 */
var RouterActive = (function () {
    function RouterActive(router, element, renderer, routerLink, routerActiveAttr) {
        this.router = router;
        this.element = element;
        this.renderer = renderer;
        this.routerLink = routerLink;
        this.routerActive = undefined;
        this.routerActiveAttr = 'active';
        this.routerActiveAttr = this._defaultAttrValue(routerActiveAttr);
    }
    RouterActive.prototype.ngOnInit = function () {
        var _this = this;
        this.routerLink.changes.subscribe(function () {
            if (_this.routerLink.first) {
                _this._updateClass();
                _this._findRootRouter().subscribe(function () {
                    _this._updateClass();
                });
            }
        });
    };
    RouterActive.prototype._findRootRouter = function () {
        var router = this.router;
        while (lang_1.isPresent(router.parent)) {
            router = router.parent;
        }
        return router;
    };
    RouterActive.prototype._updateClass = function () {
        var active = this.routerLink.first.isRouteActive;
        this.renderer.setElementClass(this.element.nativeElement, this._attrOrProp(), active);
    };
    RouterActive.prototype._defaultAttrValue = function (attr) {
        return this.routerActiveAttr = attr || this.routerActiveAttr;
    };
    RouterActive.prototype._attrOrProp = function () {
        return lang_1.isPresent(this.routerActive) ? this.routerActive : this.routerActiveAttr;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RouterActive.prototype, "routerActive", void 0);
    RouterActive = __decorate([
        core_1.Directive({
            selector: '[router-active]'
        }),
        __param(3, core_1.Query(router_deprecated_1.RouterLink)),
        __param(4, core_1.Optional()),
        __param(4, core_1.Attribute('router-active')), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_deprecated_1.Router !== 'undefined' && router_deprecated_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _b) || Object, (typeof (_c = typeof core_1.Renderer !== 'undefined' && core_1.Renderer) === 'function' && _c) || Object, (typeof (_d = typeof core_1.QueryList !== 'undefined' && core_1.QueryList) === 'function' && _d) || Object, String])
    ], RouterActive);
    return RouterActive;
    var _a, _b, _c, _d;
}());
exports.RouterActive = RouterActive;
//# sourceMappingURL=router-active.directive.js.map