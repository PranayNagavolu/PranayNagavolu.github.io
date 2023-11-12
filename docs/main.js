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
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");





const routes = [
    { path: '', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"] }
];
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
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = 'portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-landing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 16, vars: 0, consts: [[1, "container", "mt-5"], [1, "row", "py-4", "d-flex", "align-items-center", "justify-content-center", "shadow-sm"], [1, "col-6", "text-white", "ml-auto", "font-22"], [1, "col-6", "text-gray"], [1, "float-right", "text-center"], ["onclick", " window.open('https://www.linkedin.com/in/pranay-nagavolu/');", 1, "m-2"], ["src", "assets/in.png", "alt", "", 1, "img-fluid", "pointer", "img-size"], ["href", "mailto:pranay12430.nagavolu@gmail.com", 1, "m-2"], ["src", "assets/mail.png", "alt", "", 1, "img-fluid", "pointer", "img-size"], ["onclick", " window.open('https://www.instagram.com/pranay_nagavolu/');", 1, "m-2"], ["src", "assets/insta.png", "alt", "", 1, "img-fluid", "pointer", "img-size"], ["onclick", " window.open('https://gitlab.com/PranayNagavolu');", 1, "m-2"], ["src", "assets/gitlab.png", "alt", "", 1, "img-fluid", "pointer", "img-size"], ["onclick", " window.open('https://github.com/PranayNagavolu');", 1, "m-2"], ["src", "assets/github.svg", "alt", "", 1, "img-fluid", "pointer", "img-size"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Got an idea? let's talk! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".img-size[_ngcontent-%COMP%]{\r\n    max-height: 30px;\r\n}\r\n@media screen and (min-width: 750px) {\r\n    .img-size[_ngcontent-%COMP%]{\r\n        max-height: 50px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1zaXple1xyXG4gICAgbWF4LWhlaWdodDogMzBweDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NTBweCkge1xyXG4gICAgLmltZy1zaXple1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function LandingComponent_div_142_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const line_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", line_r4, " ");
} }
function LandingComponent_div_142_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LandingComponent_div_142_p_12_Template, 2, 1, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.duration, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", "#collapseExample" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "collapseExample", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.description);
} }
class LandingComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.showContent = false;
        this.experience = [
            {
                company: 'Spark, University of North Texas',
                position: 'Lead Technology Engagement Specialist',
                duration: 'Jan 2022 to May 2023',
                description: ['Maintain and troubleshoot technical equipment in laptops, cameras to 3D printers and laser cutters.',
                    'Conducting hands-on workshops on python programming and problem solving.',
                    'Training and managing a team of 12 as a lead supervising their work and resolving any internal disputes.']
            },
            {
                company: 'Working with Caarya',
                position: 'Junior Software Developer',
                duration: 'Oct 2020 to Mar 2021',
                description: ['Designed web applications with unique structures and aesthetics using Angular and Node, enhancing cross-functional collaboration, and delivering innovative solutions with 25% increased project efficiency following Agile SDLC.',
                    'Incorporated AWS Cloud Services for web operations, reducing costs by 15% while maintaining peak performance with AWS RDS.']
            },
            {
                company: 'Working with Fountane',
                position: 'Junior Software Developer Intern',
                duration: 'Jun 2020 to Sep 2020',
                description: ['Facilitated a design thinking research program, collaborating with cross-functional teams to redefine problems and discover effective solutions.',
                    'Awarded Most Outstanding Student Intern for contributions and leadership and guiding 4 other interns through the internship experience.',
                    'Utilized AWS Cloud Services for web operations and demonstrated competence in cloud computing with AWS RDS.']
            },
            {
                company: 'Working with DeltaNow',
                position: 'Front-End Software Engineer',
                duration: 'Jun 2020 to Sep 2020',
                description: ["Facilitated effective collaboration among design and development teams, reducing Datatrove's product development time by 20% and accelerating feature delivery by 30% for the DoAA Data Management Solution.",
                    'Headed front-end UI development and integration for various product modules, using Bootstrap, Angular, Node, SQL, MongoDB, and Django; improved load times by 50% and enhanced customer retention by 15%.',]
            },
            {
                company: 'Work at IEEE Student Chapter',
                position: 'Designing and Management',
                duration: 'Dec 2017 to Jun 2021',
                description: ['Played the role of a designer and an administrator in the IEEE student chapter for 3 years. My duties involved designing templates and banners for events, maintaining the website, managing and organizing events, constant monitoring of work done by members in all domains. Mentioned below are a few events I worked and organzed',
                    'NIRVANA 2.0',
                    'IMITOR 2k18']
            },
        ];
        this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl('/assets/resume.pdf');
    }
    ngOnInit() {
    }
    openPdf() {
        // Cast the SafeResourceUrl back to a string
        const unsafeUrl = this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].RESOURCE_URL, this.pdfSrc);
        if (unsafeUrl) {
            window.open(unsafeUrl, '_blank');
        }
    }
    scroll(element) {
        const ele = document.getElementById(element);
        window.scrollTo(ele.offsetLeft, ele.offsetTop);
    }
    toggleContent() {
        this.showContent = !this.showContent;
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 172, vars: 3, consts: [[1, "container"], ["id", "about", 1, "container", "bg-deep-blue", 2, "height", "fit-content"], [1, "row", "d-flex", "align-items-center", "mt-6"], [1, "col-12", "col-sm-8", "col-md-4", "mx-auto", "px-5", "px-md-2"], ["src", "assets/hoodie.jpg", "alt", "Sri Pranay Nagavolu", 1, "img-fluid", 2, "border-radius", "20px"], [1, "font-25", "text-white"], [1, "col-sm-12", "offset-1", "col-md-7", "my-4", "font-22", "font-weight-light", "text-gray"], [1, "font-25", "text-blue"], [1, "mt-2"], [1, "text-blue"], [1, "text-white"], ["data-toggle", "modal", "data-target", "#pdfModal", 1, "btn", "btn-primary", "bg-deep-blue", "mt-2", "d-none", "d-md-block"], [1, "btn", "btn-primary", "bg-deep-blue", "mt-2", "d-block", "d-md-none", 3, "click"], ["id", "pdfModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "pdfModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-lg"], [1, "modal-content", "bg-deep-blue"], [1, "modal-header", "text-white", "border-0", "shadow-2"], ["id", "pdfModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true", 1, "text-white"], [1, "modal-body"], ["width", "100%", "height", "600px", "frameborder", "0", "scrolling", "no", "allowfullscreen", "", 3, "src"], [1, "container", "bg-deep-blue", "mt-6"], [1, "row", "text-center", "text-green"], [1, "col-12", "font-25", "mb-3", "mb-md-5"], [1, "material-icons", "material-icons-outlined"], [1, "row", "text-center", "font-18"], [1, "col-12", "col-md-4", "mb-3", "mb-md-5", "px-2"], [1, "text-gray"], ["id", "skills", 1, "m-0", "bg-deep-blue", "d-flex", "align-items-center", "mt-5"], [1, "row", "mb-3", "mb-md-5", "text-center", "text-purple"], [1, "col", "font-25"], [1, "row", "d-flex", "text-center", "font-18"], [1, "col-sm-12", "col-md-4"], [1, "text-white", "mb-2"], [1, "text-gray", "text-center"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "py-1"], ["id", "works", 1, "m-0", "bg-deep-blue", "d-flex", "align-items-center", "mt-5"], [1, "row", "text-center", "text-green", "mb-5"], [1, "col-12", "font-25"], [1, "timeline"], ["class", "timeline-row", 4, "ngFor", "ngForOf"], [1, "m-0", "bg-deep-blue", "d-flex", "align-items-center", "mt-5"], [1, "row", "text-center", "text-purple", "mb-5"], [1, "row"], [1, "col-md-4", "col-sm-12"], ["href", "https://github.com/PranayNagavolu/Encrypted-Messaging-System", "target", "_blank", 1, "card-link"], [1, "card", "my-2", "bg-deep-blue", "text-white", "shadow-lg", 2, "width", "18rem"], ["src", "/assets/CN project.png", "alt", "...", 1, "card-img-top"], [1, "card-body"], [1, "card-text"], ["href", "https://github.com/PranayNagavolu/fake-news-detection", "target", "_blank", 1, "card-link"], ["src", "/assets/NLP project.png", "alt", "...", 1, "card-img-top"], ["href", "https://github.com/SaiDevPrakashJ/AUTOMOBILE_SALES-AND-SERVICE-DATABASE-PROJECT", "target", "_blank", 1, "card-link"], ["src", "/assets/FDB project.png", "alt", "...", 1, "card-img-top"], [1, "timeline-row"], [1, "timeline-time"], [1, "timeline-content"], [1, "card", "bg-deep-blue", "shadow-sm"], ["data-toggle", "collapse", 1, "card-header", "font-22"], [1, "collapse", 3, "id"], [1, "card-body", "text-gray", "font-18"], [4, "ngFor", "ngForOf"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Sri Pranay Nagavolu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " About me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Welcome! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " I'm a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Junior Full Stack Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " with over 3 years of experience and a Master's in Computer Science. I've shouldered a profound responsibility in diverse industries, including technology, business, and design. I specialize in streamlining projects, consistently reducing timelines by 25%, and enhancing load times. Proficient in a wide range of technologies, including ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Angular, Node.js, Django, SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, ", and more, I'm deeply committed to pushing the boundaries of software development to consistently deliver exceptional results. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Here's my professional resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_24_listener() { return ctx.openPdf(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Here's my professional resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "iframe", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "school");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Education ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Masters, Computer and Information Science ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " (2021-2023) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " University of North Texas, Denton, TX ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Bachelor, Computer Science ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " (2017-2021) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Gitam University, India ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " High School (2015-2017) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Ascent, India ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "terminal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Skills and Tools ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Web-Technologies: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "ul", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "JavaScript/TypeScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "HTML5/CSS3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "SASS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "REST APIs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Django");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Express JS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Node");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "React");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Material UI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Programming Languages and Concepts: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "ul", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Python");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "C/C++");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Data Structures");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Algorithms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " Other Tools and Miscellaneous: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "ul", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "ASP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, ".NET");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Model View Control");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Git");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Postman");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Photoshop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Docker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Figma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "work_history");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Previous Work Experiences ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](142, LandingComponent_div_142_Template, 13, 6, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "collections_bookmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " Portfolio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "The Secure Communication Protocol employs RSA and AES for encrypted exchanges between Node A and Node B. Both nodes generate RSA keys, sharing public keys via a Trusted Third Party server. After initial challenges and responses using mixed key encryption, they derive a shared AES key, enabling encrypted chat sessions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "This project uses BERT for news classification, distinguishing fake from real news. BERT's non-directional processing allows understanding of context in text, improving prediction accuracy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "An online car dealership, crafted using Angular for a dynamic user interface, Bootstrap for responsive design, and SQL for robust data management. Our platform welcomes new and returning customers to an immersive online dealership experience, offering personalized deals, coupon incentives, and a comprehensive service tracking system to streamline your automotive journey.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.pdfSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experience);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".timeline[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    border-radius: 4px;\r\n    padding: 5rem;\r\n    margin: 0 auto 1rem auto;\r\n    overflow: hidden;\r\n}\r\n.timeline[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 50%;\r\n    margin-left: -2px;\r\n    border-right: 2px dashed #4b546f;\r\n    height: 100%;\r\n    display: block;\r\n}\r\n.timeline-row[_ngcontent-%COMP%] {\r\n    padding-left: 50%;\r\n    position: relative;\r\n    margin-bottom: 30px;\r\n}\r\n.timeline-row[_ngcontent-%COMP%]   .timeline-time[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 50%;\r\n    top: 15px;\r\n    text-align: right;\r\n    margin-right: 20px;\r\n    color: #bcd0f7;\r\n    font-size: 1.5rem;\r\n}\r\n.timeline-row[_ngcontent-%COMP%]   .timeline-time[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 0.8rem;\r\n}\r\n.timeline-row[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding: 20px 30px;\r\n    background: #1a233a;\r\n    border-radius: 4px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    text-align: center;\r\n}\r\n.timeline-row[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 20px;\r\n    height: 16px;\r\n    width: 16px;\r\n    background: #1a233a;\r\n}\r\n.timeline-row[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 20px;\r\n    right: -49px;\r\n    width: 20px;\r\n    height: 20px;\r\n    border-radius: 100px;\r\n    z-index: 10;\r\n    background: #272e48;\r\n    border: 2px dashed #4b546f;\r\n}\r\n.timeline-row[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    margin: 0 0 20px 0;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    line-height: 150%;\r\n}\r\n.timeline-row[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-bottom: 30px;\r\n    line-height: 150%;\r\n}\r\n.timeline-row[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 1.2rem;\r\n    line-height: 100%;\r\n    padding: 15px;\r\n    border-radius: 100px;\r\n    background: #272e48;\r\n    margin-bottom: 10px;\r\n    display: inline-block;\r\n}\r\n.timeline-row[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .thumbs[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n    display: flex;\r\n}\r\n.timeline-row[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .thumbs[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin: 5px;\r\n    max-width: 60px;\r\n}\r\n.timeline-row[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\r\n    color: #ffffff;\r\n    background: linear-gradient(120deg, #00b5fd 0%, #0047b1 100%);\r\n}\r\n.timeline-row[_ngcontent-%COMP%]:nth-child(even)   .timeline-content[_ngcontent-%COMP%] {\r\n    margin-left: 40px;\r\n    text-align: left;\r\n}\r\n.timeline-row[_ngcontent-%COMP%]:nth-child(even)   .timeline-content[_ngcontent-%COMP%]:after {\r\n    left: -8px;\r\n    right: initial;\r\n    border-bottom: 0;\r\n    border-left: 0;\r\n    transform: rotate(-135deg);\r\n}\r\n.timeline-row[_ngcontent-%COMP%]:nth-child(even)   .timeline-content[_ngcontent-%COMP%]:before {\r\n    left: -52px;\r\n    right: initial;\r\n}\r\n.timeline-row[_ngcontent-%COMP%]:nth-child(odd) {\r\n    padding-left: 0;\r\n    padding-right: 50%;\r\n}\r\n.timeline-row[_ngcontent-%COMP%]:nth-child(odd)   .timeline-time[_ngcontent-%COMP%] {\r\n    right: auto;\r\n    left: 50%;\r\n    text-align: left;\r\n    margin-right: 0;\r\n    margin-left: 20px;\r\n}\r\n.timeline-row[_ngcontent-%COMP%]:nth-child(odd)   .timeline-content[_ngcontent-%COMP%] {\r\n    margin-right: 40px;\r\n}\r\n.timeline-row[_ngcontent-%COMP%]:nth-child(odd)   .timeline-content[_ngcontent-%COMP%]:after {\r\n    right: -8px;\r\n    border-left: 0;\r\n    border-bottom: 0;\r\n    transform: rotate(45deg);\r\n}\r\n@media (max-width: 992px) {\r\n    .timeline[_ngcontent-%COMP%] {\r\n        padding: 15px;\r\n    }\r\n    .timeline[_ngcontent-%COMP%]:after {\r\n        border: 0;\r\n    }\r\n    .timeline[_ngcontent-%COMP%]   .timeline-row[_ngcontent-%COMP%]:nth-child(odd) {\r\n        padding: 0;\r\n    }\r\n    .timeline[_ngcontent-%COMP%]   .timeline-row[_ngcontent-%COMP%]:nth-child(odd)   .timeline-time[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        top: 0;\r\n        left: 0;\r\n        margin: 0 0 10px 0;\r\n    }\r\n    .timeline[_ngcontent-%COMP%]   .timeline-row[_ngcontent-%COMP%]:nth-child(odd)   .timeline-content[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n    }\r\n    .timeline[_ngcontent-%COMP%]   .timeline-row[_ngcontent-%COMP%]:nth-child(odd)   .timeline-content[_ngcontent-%COMP%]:before {\r\n        display: none;\r\n    }\r\n    .timeline[_ngcontent-%COMP%]   .timeline-row[_ngcontent-%COMP%]:nth-child(odd)   .timeline-content[_ngcontent-%COMP%]:after {\r\n        display: none;\r\n    }\r\n    .timeline[_ngcontent-%COMP%]   .timeline-row[_ngcontent-%COMP%]:nth-child(even) {\r\n        padding: 0;\r\n    }\r\n    .timeline[_ngcontent-%COMP%]   .timeline-row[_ngcontent-%COMP%]:nth-child(even)   .timeline-time[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        top: 0;\r\n        left: 0;\r\n        margin: 0 0 10px 0;\r\n        text-align: left;\r\n    }\r\n    .timeline[_ngcontent-%COMP%]   .timeline-row[_ngcontent-%COMP%]:nth-child(even)   .timeline-content[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n    }\r\n    .timeline[_ngcontent-%COMP%]   .timeline-row[_ngcontent-%COMP%]:nth-child(even)   .timeline-content[_ngcontent-%COMP%]:before {\r\n        display: none;\r\n    }\r\n    .timeline[_ngcontent-%COMP%]   .timeline-row[_ngcontent-%COMP%]:nth-child(even)   .timeline-content[_ngcontent-%COMP%]:after {\r\n        display: none;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFHbEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osY0FBYztBQUNsQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFHbkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFHWixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsYUFBYTtJQUdiLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsNkRBQTZEO0FBQ2pFO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGdCQUFnQjtJQUNoQix3QkFBd0I7QUFDNUI7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksU0FBUztJQUNiO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixNQUFNO1FBQ04sT0FBTztRQUNQLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksU0FBUztJQUNiO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixNQUFNO1FBQ04sT0FBTztRQUNQLGtCQUFrQjtRQUNsQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFNBQVM7SUFDYjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGltZWxpbmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDVyZW07XHJcbiAgICBtYXJnaW46IDAgYXV0byAxcmVtIGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi50aW1lbGluZTphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0ycHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDJweCBkYXNoZWQgIzRiNTQ2ZjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4udGltZWxpbmUtcm93IHtcclxuICAgIHBhZGRpbmctbGVmdDogNTAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4udGltZWxpbmUtcm93IC50aW1lbGluZS10aW1lIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA1MCU7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjYmNkMGY3O1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuLnRpbWVsaW5lLXJvdyAudGltZWxpbmUtdGltZSBzbWFsbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcbi50aW1lbGluZS1yb3cgLnRpbWVsaW5lLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzFhMjMzYTtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGltZWxpbmUtcm93IC50aW1lbGluZS1jb250ZW50OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGJhY2tncm91bmQ6ICMxYTIzM2E7XHJcbn1cclxuLnRpbWVsaW5lLXJvdyAudGltZWxpbmUtY29udGVudDpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHJpZ2h0OiAtNDlweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgYmFja2dyb3VuZDogIzI3MmU0ODtcclxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjNGI1NDZmO1xyXG59XHJcbi50aW1lbGluZS1yb3cgLnRpbWVsaW5lLWNvbnRlbnQgaDQge1xyXG4gICAgbWFyZ2luOiAwIDAgMjBweCAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xyXG59XHJcbi50aW1lbGluZS1yb3cgLnRpbWVsaW5lLWNvbnRlbnQgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XHJcbn1cclxuLnRpbWVsaW5lLXJvdyAudGltZWxpbmUtY29udGVudCBpIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIGJhY2tncm91bmQ6ICMyNzJlNDg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi50aW1lbGluZS1yb3cgLnRpbWVsaW5lLWNvbnRlbnQgLnRodW1icyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4udGltZWxpbmUtcm93IC50aW1lbGluZS1jb250ZW50IC50aHVtYnMgaW1nIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgbWF4LXdpZHRoOiA2MHB4O1xyXG59XHJcbi50aW1lbGluZS1yb3cgLnRpbWVsaW5lLWNvbnRlbnQgLmJhZGdlIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgIzAwYjVmZCAwJSwgIzAwNDdiMSAxMDAlKTtcclxufVxyXG4udGltZWxpbmUtcm93Om50aC1jaGlsZChldmVuKSAudGltZWxpbmUtY29udGVudCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnRpbWVsaW5lLXJvdzpudGgtY2hpbGQoZXZlbikgLnRpbWVsaW5lLWNvbnRlbnQ6YWZ0ZXIge1xyXG4gICAgbGVmdDogLThweDtcclxuICAgIHJpZ2h0OiBpbml0aWFsO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgIGJvcmRlci1sZWZ0OiAwO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XHJcbn1cclxuLnRpbWVsaW5lLXJvdzpudGgtY2hpbGQoZXZlbikgLnRpbWVsaW5lLWNvbnRlbnQ6YmVmb3JlIHtcclxuICAgIGxlZnQ6IC01MnB4O1xyXG4gICAgcmlnaHQ6IGluaXRpYWw7XHJcbn1cclxuLnRpbWVsaW5lLXJvdzpudGgtY2hpbGQob2RkKSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MCU7XHJcbn1cclxuLnRpbWVsaW5lLXJvdzpudGgtY2hpbGQob2RkKSAudGltZWxpbmUtdGltZSB7XHJcbiAgICByaWdodDogYXV0bztcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG4udGltZWxpbmUtcm93Om50aC1jaGlsZChvZGQpIC50aW1lbGluZS1jb250ZW50IHtcclxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxufVxyXG4udGltZWxpbmUtcm93Om50aC1jaGlsZChvZGQpIC50aW1lbGluZS1jb250ZW50OmFmdGVyIHtcclxuICAgIHJpZ2h0OiAtOHB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC50aW1lbGluZSB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgIH1cclxuICAgIC50aW1lbGluZTphZnRlciB7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgfVxyXG4gICAgLnRpbWVsaW5lIC50aW1lbGluZS1yb3c6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAudGltZWxpbmUgLnRpbWVsaW5lLXJvdzpudGgtY2hpbGQob2RkKSAudGltZWxpbmUtdGltZSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDEwcHggMDtcclxuICAgIH1cclxuICAgIC50aW1lbGluZSAudGltZWxpbmUtcm93Om50aC1jaGlsZChvZGQpIC50aW1lbGluZS1jb250ZW50IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICAudGltZWxpbmUgLnRpbWVsaW5lLXJvdzpudGgtY2hpbGQob2RkKSAudGltZWxpbmUtY29udGVudDpiZWZvcmUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAudGltZWxpbmUgLnRpbWVsaW5lLXJvdzpudGgtY2hpbGQob2RkKSAudGltZWxpbmUtY29udGVudDphZnRlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC50aW1lbGluZSAudGltZWxpbmUtcm93Om50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIC50aW1lbGluZSAudGltZWxpbmUtcm93Om50aC1jaGlsZChldmVuKSAudGltZWxpbmUtdGltZSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDEwcHggMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLnRpbWVsaW5lIC50aW1lbGluZS1yb3c6bnRoLWNoaWxkKGV2ZW4pIC50aW1lbGluZS1jb250ZW50IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICAudGltZWxpbmUgLnRpbWVsaW5lLXJvdzpudGgtY2hpbGQoZXZlbikgLnRpbWVsaW5lLWNvbnRlbnQ6YmVmb3JlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLnRpbWVsaW5lIC50aW1lbGluZS1yb3c6bnRoLWNoaWxkKGV2ZW4pIC50aW1lbGluZS1jb250ZW50OmFmdGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59Il19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter, :leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s ease-in')
                ]),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing',
                templateUrl: './landing.component.html',
                styleUrls: ['./landing.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeIn', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter, :leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s ease-in')
                        ]),
                    ]),
                ]
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NavbarComponent {
    constructor() {
    }
    scroll(element) {
        const ele = document.getElementById(element);
        window.scrollTo(ele.offsetLeft, ele.offsetTop);
    }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 19, vars: 0, consts: [[1, "row", "fixed-top", "bg-deep-blue", "m-0", "shadow", "p-3"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "fixed-top", "bg-deep-blue"], ["href", "#", 1, "navbar-brand", "d-flex", "align-items-center", "text", "text-blue"], [1, "material-icons"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavDropdown", "aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavDropdown", 1, "collapse", "navbar-collapse", "text-gray"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["href", "#education", 1, "nav-link"], ["href", "#skills", 1, "nav-link"], ["href", "#works", 1, "nav-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Full Stack Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
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

module.exports = __webpack_require__(/*! C:\Users\itspr\Desktop\Projects\PranayNagavolu.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map