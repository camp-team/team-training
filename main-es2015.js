(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _bread_list_bread_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bread-list/bread-list.component */ "./src/app/bread-list/bread-list.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 41, vars: 0, consts: [[1, "placeholder"], [1, "container"], [1, "hero-grid"], [1, "hero-grid__main"], [1, "hero-grid__bg"], [1, "hero-grid__news"], [1, "trend-grid"], [1, "now-grid"], [1, "card-grid"], [1, "divider"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-bread-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "hero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-news");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "TRENDING");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "card-middle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "card-middle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "card-middle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "HAPPENING NOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "card-large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "card-large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "card-small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "card-small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "card-small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_bread_list_bread_list_component__WEBPACK_IMPORTED_MODULE_1__["BreadListComponent"], _news_news_component__WEBPACK_IMPORTED_MODULE_2__["NewsComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  max-width: calc(1160px + 48px);\n  margin: 0 auto;\n  padding: 0 24px;\n  box-sizing: border-box;\n}\n\n.hero-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 640px;\n  position: relative;\n}\n\n.hero-grid__bg[_ngcontent-%COMP%] {\n  background: url(/assets/hero.jpg) center/cover;\n}\n\n@media screen and (max-width: 750px) {\n  .hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.hero-grid__main[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  transform: translateY(-50%);\n}\n\n@media screen and (max-width: 750px) {\n  .hero-grid__main[_ngcontent-%COMP%] {\n    position: static;\n    transform: none;\n  }\n}\n\n.hero-grid__news[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n  background: white;\n}\n\n@media screen and (max-width: 750px) {\n  .hero-grid__news[_ngcontent-%COMP%] {\n    padding: 24px;\n  }\n}\n\n.now-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 40px;\n}\n\n@media screen and (min-width: 750px) {\n  .now-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 760px 360px;\n  }\n}\n\n.placeholder[_ngcontent-%COMP%] {\n  display: block;\n  background: #ccc;\n}\n\n.card-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 40px;\n}\n\n.divider[_ngcontent-%COMP%] {\n  height: 2px;\n  background: #ebeded;\n}\n\n@media screen and (min-width: 750px) {\n  .divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.trend-grid[_ngcontent-%COMP%] {\n  display: grid;\n}\n\n@media screen and (min-width: 750px) {\n  .trend-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n\nmain[_ngcontent-%COMP%] {\n  margin-bottom: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RlYW0tdHJhaW5pbmcvdGVhbS10cmFpbmluZy9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREFFO0VBQ0UsOENBQUE7QUNFSjs7QURBRTtFQVBGO0lBUUksMEJBQUE7RUNHRjtBQUNGOztBREZFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQ0lKOztBREhJO0VBTkY7SUFPSSxnQkFBQTtJQUNBLGVBQUE7RUNNSjtBQUNGOztBREpFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNNSjs7QURMSTtFQUpGO0lBS0ksYUFBQTtFQ1FKO0FBQ0Y7O0FESkE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQ09GOztBRE5FO0VBSEY7SUFJSSxrQ0FBQTtFQ1NGO0FBQ0Y7O0FETkE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNTRjs7QUROQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FDU0Y7O0FETkE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUNTRjs7QURSRTtFQUhGO0lBSUksYUFBQTtFQ1dGO0FBQ0Y7O0FEUkE7RUFDRSxhQUFBO0FDV0Y7O0FEVkU7RUFGRjtJQUdJLHFDQUFBO0VDYUY7QUFDRjs7QURWQTtFQUNFLG9CQUFBO0FDYUYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiBjYWxjKDExNjBweCArIDQ4cHgpO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAyNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uaGVyby1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNjQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgJl9fYmcge1xuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2hlcm8uanBnKSBjZW50ZXIvY292ZXI7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuICAmX19tYWluIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxuICB9XG4gICZfX25ld3Mge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICAgICAgcGFkZGluZzogMjRweDtcbiAgICB9XG4gIH1cbn1cblxuLm5vdy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiA0MHB4O1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NTBweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzYwcHggMzYwcHg7XG4gIH1cbn1cblxuLnBsYWNlaG9sZGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG59XG5cbi5jYXJkLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDQwcHg7XG59XG5cbi5kaXZpZGVyIHtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICNlYmVkZWQ7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc1MHB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4udHJlbmQtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc1MHB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgfVxufVxuXG5tYWluIHtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG4iLCIuY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiBjYWxjKDExNjBweCArIDQ4cHgpO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAyNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uaGVyby1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNjQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5oZXJvLWdyaWRfX2JnIHtcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaGVyby5qcGcpIGNlbnRlci9jb3Zlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC5oZXJvLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG4uaGVyby1ncmlkX19tYWluIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC5oZXJvLWdyaWRfX21haW4ge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG4uaGVyby1ncmlkX19uZXdzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICAuaGVyby1ncmlkX19uZXdzIHtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICB9XG59XG5cbi5ub3ctZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogNDBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc1MHB4KSB7XG4gIC5ub3ctZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3NjBweCAzNjBweDtcbiAgfVxufVxuXG4ucGxhY2Vob2xkZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogI2NjYztcbn1cblxuLmNhcmQtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogNDBweDtcbn1cblxuLmRpdmlkZXIge1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogI2ViZWRlZDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc1MHB4KSB7XG4gIC5kaXZpZGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi50cmVuZC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc1MHB4KSB7XG4gIC50cmVuZC1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICB9XG59XG5cbm1haW4ge1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _bread_list_bread_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bread-list/bread-list.component */ "./src/app/bread-list/bread-list.component.ts");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _bread_list_bread_list_component__WEBPACK_IMPORTED_MODULE_5__["BreadListComponent"],
        _news_news_component__WEBPACK_IMPORTED_MODULE_4__["NewsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _bread_list_bread_list_component__WEBPACK_IMPORTED_MODULE_5__["BreadListComponent"],
                    _news_news_component__WEBPACK_IMPORTED_MODULE_4__["NewsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/bread-list/bread-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/bread-list/bread-list.component.ts ***!
  \****************************************************/
/*! exports provided: BreadListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadListComponent", function() { return BreadListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BreadListComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
BreadListComponent.ɵfac = function BreadListComponent_Factory(t) { return new (t || BreadListComponent)(); };
BreadListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreadListComponent, selectors: [["app-bread-list"]], decls: 6, vars: 0, consts: [[1, "bread-list"], ["src", "assets/home.svg", "alt", "", 1, "bread-list__img"], [1, "bread-list__list"]], template: function BreadListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "STORY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "WORLD NEWS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".bread-list[_ngcontent-%COMP%] {\n  display: flex;\n}\n.bread-list__img[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  padding-right: 30px;\n}\n.bread-list__list[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 11px;\n  font-weight: bold;\n}\n.bread-list__list[_ngcontent-%COMP%]::after {\n  content: \"/\";\n  margin-left: 18px;\n  margin-right: 18px;\n}\n.bread-list__list[_ngcontent-%COMP%]:last-child {\n  color: #a6adb4;\n  font-weight: bold;\n}\n.bread-list__list[_ngcontent-%COMP%]:last-child::after {\n  content: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RlYW0tdHJhaW5pbmcvdGVhbS10cmFpbmluZy9zcmMvYXBwL2JyZWFkLWxpc3QvYnJlYWQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYnJlYWQtbGlzdC9icmVhZC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGO0FEQUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDRUo7QURBRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNFSjtBREFFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNFSjtBREFFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDRUo7QURBRTtFQUNFLGFBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2JyZWFkLWxpc3QvYnJlYWQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmVhZC1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgJl9faW1nIHtcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgfVxuICAmX19saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAmX19saXN0OjphZnRlciB7XG4gICAgY29udGVudDogJy8nO1xuICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xuICAgIG1hcmdpbi1yaWdodDogMThweDtcbiAgfVxuICAmX19saXN0Omxhc3QtY2hpbGQge1xuICAgIGNvbG9yOiAjYTZhZGI0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gICZfX2xpc3Q6bGFzdC1jaGlsZDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IG5vbmU7XG4gIH1cbn1cbiIsIi5icmVhZC1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5icmVhZC1saXN0X19pbWcge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuLmJyZWFkLWxpc3RfX2xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmJyZWFkLWxpc3RfX2xpc3Q6OmFmdGVyIHtcbiAgY29udGVudDogXCIvXCI7XG4gIG1hcmdpbi1sZWZ0OiAxOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG59XG4uYnJlYWQtbGlzdF9fbGlzdDpsYXN0LWNoaWxkIHtcbiAgY29sb3I6ICNhNmFkYjQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmJyZWFkLWxpc3RfX2xpc3Q6bGFzdC1jaGlsZDo6YWZ0ZXIge1xuICBjb250ZW50OiBub25lO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bread-list',
                templateUrl: './bread-list.component.html',
                styleUrls: ['./bread-list.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NewsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
NewsComponent.ɵfac = function NewsComponent_Factory(t) { return new (t || NewsComponent)(); };
NewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsComponent, selectors: [["app-news"]], decls: 29, vars: 0, consts: [[1, "news"], [1, "head"], [1, "head__title"], [1, "spacer"], ["src", "/assets/news/arrow-back.svg", "alt", "", 1, "head__icon-back"], ["src", "/assets/news/arrow.svg", "alt", "", 1, "head__icon"], [1, "content"], [1, "content__title"], [1, "content__sub-title"], [1, "content__text"], [1, "content__time"], [1, "content__image"], ["src", "/assets/news/time.svg", "alt", ""]], template: function NewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "MORE NEWS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "TRAVEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Article title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat\u2026 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "2 min ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "TECHNOLOGY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Article title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat\u2026 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "2 min ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.news[_ngcontent-%COMP%] {\n  padding: 100px;\n  max-width: 600px;\n  max-height: 600px;\n}\n\n@media screen and (max-width: 750px) {\n  .news[_ngcontent-%COMP%] {\n    padding: 40px 24px;\n    margin: 0 auto;\n  }\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.head[_ngcontent-%COMP%] {\n  max-width: 380px;\n  margin-bottom: 40px;\n  border-bottom: 2px solid #ebeded;\n  padding-bottom: 40px;\n  display: flex;\n  align-items: center;\n}\n\n.head__title[_ngcontent-%COMP%] {\n  height: 30px;\n  display: flex;\n  align-items: center;\n  font-size: 24px;\n  line-height: 20px;\n}\n\n.head__icon-back[_ngcontent-%COMP%] {\n  margin-right: 32px;\n}\n\n.content[_ngcontent-%COMP%] {\n  max-width: 380px;\n  margin-bottom: 40px;\n}\n\n@media screen and (max-width: 750px) {\n  .content[_ngcontent-%COMP%] {\n    margin-bottom: 24px;\n  }\n}\n\n.content__title[_ngcontent-%COMP%] {\n  color: #fa6980;\n  font-size: 16px;\n  margin-bottom: 24px;\n}\n\n.content__sub-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 10px;\n}\n\n.content__text[_ngcontent-%COMP%] {\n  color: #a6adb4;\n  font-size: 16px;\n  margin-bottom: 10px;\n  line-height: 26px;\n}\n\n.content__time[_ngcontent-%COMP%] {\n  color: #a6adb4;\n  font-size: 13px;\n  font-family: Helvetica;\n  font-style: Oblique;\n  display: flex;\n  text-align: center;\n}\n\n.content__image[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RlYW0tdHJhaW5pbmcvdGVhbS10cmFpbmluZy9zcmMvYXBwL25ld3MvbmV3cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmV3cy9uZXdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUNDRjs7QURDQTtFQUNFLFNBQUE7QUNFRjs7QURBQTtFQUNFLFNBQUE7QUNHRjs7QUREQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDSUY7O0FESEU7RUFKRjtJQUtJLGtCQUFBO0lBQ0EsY0FBQTtFQ01GO0FBQ0Y7O0FESkE7RUFDRSxPQUFBO0FDT0Y7O0FETEE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ1FGOztBRFBFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ1NKOztBRFBFO0VBQ0Usa0JBQUE7QUNTSjs7QUROQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNTRjs7QURSRTtFQUhGO0lBSUksbUJBQUE7RUNXRjtBQUNGOztBRFZFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ1lKOztBRFZFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDWUo7O0FEVkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNZSjs7QURWRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ1lKOztBRFZFO0VBQ0Usa0JBQUE7QUNZSiIsImZpbGUiOiJzcmMvYXBwL25ld3MvbmV3cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuaDIge1xuICBtYXJnaW46IDA7XG59XG5wIHtcbiAgbWFyZ2luOiAwO1xufVxuLm5ld3Mge1xuICBwYWRkaW5nOiAxMDBweDtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWF4LWhlaWdodDogNjAwcHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgcGFkZGluZzogNDBweCAyNHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG4uc3BhY2VyIHtcbiAgZmxleDogMTtcbn1cbi5oZWFkIHtcbiAgbWF4LXdpZHRoOiAzODBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlYmVkZWQ7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAmX190aXRsZSB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIH1cbiAgJl9faWNvbi1iYWNrIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gIH1cbn1cbi5jb250ZW50IHtcbiAgbWF4LXdpZHRoOiAzODBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICB9XG4gICZfX3RpdGxlIHtcbiAgICBjb2xvcjogI2ZhNjk4MDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgfVxuICAmX19zdWItdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gICZfX3RleHQge1xuICAgIGNvbG9yOiAjYTZhZGI0O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICB9XG4gICZfX3RpbWUge1xuICAgIGNvbG9yOiAjYTZhZGI0O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xuICAgIGZvbnQtc3R5bGU6IE9ibGlxdWU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgJl9faW1hZ2Uge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxufVxuIiwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmgyIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubmV3cyB7XG4gIHBhZGRpbmc6IDEwMHB4O1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXgtaGVpZ2h0OiA2MDBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC5uZXdzIHtcbiAgICBwYWRkaW5nOiA0MHB4IDI0cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cblxuLnNwYWNlciB7XG4gIGZsZXg6IDE7XG59XG5cbi5oZWFkIHtcbiAgbWF4LXdpZHRoOiAzODBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlYmVkZWQ7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRfX3RpdGxlIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLmhlYWRfX2ljb24tYmFjayB7XG4gIG1hcmdpbi1yaWdodDogMzJweDtcbn1cblxuLmNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDM4MHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgLmNvbnRlbnQge1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIH1cbn1cbi5jb250ZW50X190aXRsZSB7XG4gIGNvbG9yOiAjZmE2OTgwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG4uY29udGVudF9fc3ViLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmNvbnRlbnRfX3RleHQge1xuICBjb2xvcjogI2E2YWRiNDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cbi5jb250ZW50X190aW1lIHtcbiAgY29sb3I6ICNhNmFkYjQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcbiAgZm9udC1zdHlsZTogT2JsaXF1ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRlbnRfX2ltYWdlIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-news',
                templateUrl: './news.component.html',
                styleUrls: ['./news.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/team-training/team-training/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map