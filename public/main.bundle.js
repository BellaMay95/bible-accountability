webpackJsonp([1,4],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return ValidateService;
}());
ValidateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
        //  .map(res => res.json());
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers})
        //  .map(res => res.json());
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        //return this.http.get('http://localhost:3000/users/profile', {headers: headers})
        //  .map(res => res.json());
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 417:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 417;


/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(436);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(529),
        styles: [__webpack_require__(495)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_datepicker__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_dropdown__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ngx_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_profile_profile_component__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_reading_reading_component__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_validate_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_readinglist_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_log_log_component__ = __webpack_require__(429);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_15__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_reading_reading_component__["a" /* ReadingComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_log_log_component__["a" /* LogComponent */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__["a" /* CollapseDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_6_ng2_datepicker__["a" /* DatePickerModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_dropdown__["DropdownModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_17__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_18__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_20__services_readinglist_service__["a" /* ReadingListService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(530),
        styles: [__webpack_require__(496)]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (this.authService.loggedIn() == true)
            this.router.navigate(['/dashboard']);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(531),
        styles: [__webpack_require__(497)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_readinglist_service__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { AuthService } from '../../services/auth.service';
var LogComponent = (function () {
    function LogComponent(readingList, router) {
        this.readingList = readingList;
        this.router = router;
    }
    LogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.readingList.getReadingLog().subscribe(function (reading) {
            _this.log = reading.reading;
        }),
            function (err) {
                console.log(err);
                return false;
            };
    };
    return LogComponent;
}());
LogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-log',
        template: __webpack_require__(532),
        styles: [__webpack_require__(498)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_readinglist_service__["a" /* ReadingListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_readinglist_service__["a" /* ReadingListService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LogComponent);

var _a, _b;
//# sourceMappingURL=log.component.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            // console.log(data);
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in!', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.message, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                _this.router.navigate(['login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(533),
        styles: [__webpack_require__(499)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.isCollapsed = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show("You are now logged out! Thank you for your visit!", {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/home']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(534),
        styles: [__webpack_require__(500)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }),
            function (err) {
                console.log(err);
                return false;
            };
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(535),
        styles: [__webpack_require__(501)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_datepicker__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_readinglist_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReadingComponent = (function () {
    function ReadingComponent(readingList, authService, flashMessage, router) {
        this.readingList = readingList;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.numChapters = [];
        this.selTest = "Select Testament";
        this.selBook = "Select Book";
        this.selChapter = "Select Chapter";
        this.options = new __WEBPACK_IMPORTED_MODULE_1_ng2_datepicker__["b" /* DatePickerOptions */]();
    }
    ReadingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }),
            function (err) {
                console.log(err);
                return false;
            };
        this.readingList.getOldTestament().subscribe(function (books) {
            _this.oldTestament = books.stash;
        }),
            function (err) {
                console.log(err);
                return false;
            };
        this.readingList.getNewTestament().subscribe(function (books) {
            _this.newTestament = books.stash;
        }),
            function (err) {
                console.log(err);
                return false;
            };
    };
    ReadingComponent.prototype.selectTest = function (testament) {
        this.selTest = testament;
    };
    ReadingComponent.prototype.selectBook = function (book) {
        this.selBook = book;
        this.numChapters = [];
        var element;
        var length;
        if (this.selTest == "Old Testament") {
            for (var i = 0; i < this.oldTestament.length; i++) {
                if (this.oldTestament[i].name == this.selBook)
                    length = this.oldTestament[i].chapters;
            }
        }
        else if (this.selTest == "New Testament") {
            for (var i = 0; i < this.newTestament.length; i++) {
                if (this.newTestament[i].name == this.selBook)
                    length = this.newTestament[i].chapters;
            }
        }
        for (var i = 1; i <= length; i++) {
            this.numChapters.push(i);
        }
    };
    ReadingComponent.prototype.selectChapter = function (chapter) {
        this.selChapter = chapter;
    };
    ReadingComponent.prototype.dateSubmit = function () {
        var _this = this;
        //alert("Can't submit readings yet!");
        var date_format = this.date.month + "-" + this.date.day + "-" + this.date.year;
        var reading = {
            date: date_format,
            book: this.selBook,
            chapter: this.selChapter,
            id: this.user.id
        };
        this.readingList.saveReading(reading).subscribe(function (data) {
            if (data.success) {
                //this.flashMessage.show("You are now registered and you may log in!", {cssClass: 'alert-success', timeout: 10000});
                _this.flashMessage.show(data.message, { cssClass: 'alert-success', timeout: 10000 });
                _this.router.navigate(['/home']);
            }
        });
    };
    return ReadingComponent;
}());
ReadingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reading',
        template: __webpack_require__(536),
        styles: [__webpack_require__(502)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_readinglist_service__["a" /* ReadingListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_readinglist_service__["a" /* ReadingListService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ReadingComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=reading.component.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        //Required Fields
        if (!this.validateService.validateRegister(user)) {
            //console.log("Please fill in all fields");
            this.flashMessage.show("Please fill in all the fields!", { cssClass: 'alert-danger', timeout: 10000 });
            return false;
        }
        //Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            //console.log("Please enter a valid email");
            this.flashMessage.show("Please enter a valid email", { cssClass: 'alert-danger', timeout: 10000 });
            return false;
        }
        //Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                //this.flashMessage.show("You are now registered and you may log in!", {cssClass: 'alert-success', timeout: 10000});
                _this.flashMessage.show(data.message, { cssClass: 'alert-success', timeout: 10000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show(data.message, { cssClass: 'alert-danger', timeout: 10000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(537),
        styles: [__webpack_require__(503)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadingListService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReadingListService = (function () {
    function ReadingListService(http) {
        this.http = http;
    }
    ReadingListService.prototype.getOldTestament = function () {
        //return this.oldTestament;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        //return this.http.get('http://localhost:3000/reading/oldbooks', {headers: headers})
        //  .map(res => res.json());
        return this.http.get('reading/oldbooks', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ReadingListService.prototype.getNewTestament = function () {
        //return this.newTestament;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        //return this.http.get('http://localhost:3000/reading/newbooks', {headers: headers})
        //  .map(res => res.json());
        return this.http.get('reading/newbooks', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ReadingListService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    ReadingListService.prototype.saveReading = function (reading) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:3000/reading/save', reading, {headers: headers})
        //  .map(res => res.json());
        return this.http.post('reading/save', reading, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ReadingListService.prototype.getReadingLog = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        //return this.http.get('http://localhost:3000/reading/load', {headers: headers})
        //  .map(res => res.json());
        return this.http.get('reading/load', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return ReadingListService;
}());
ReadingListService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ReadingListService);

var _a;
//# sourceMappingURL=readinglist.service.js.map

/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 497:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 118,
	"./af.js": 118,
	"./ar": 125,
	"./ar-dz": 119,
	"./ar-dz.js": 119,
	"./ar-kw": 120,
	"./ar-kw.js": 120,
	"./ar-ly": 121,
	"./ar-ly.js": 121,
	"./ar-ma": 122,
	"./ar-ma.js": 122,
	"./ar-sa": 123,
	"./ar-sa.js": 123,
	"./ar-tn": 124,
	"./ar-tn.js": 124,
	"./ar.js": 125,
	"./az": 126,
	"./az.js": 126,
	"./be": 127,
	"./be.js": 127,
	"./bg": 128,
	"./bg.js": 128,
	"./bn": 129,
	"./bn.js": 129,
	"./bo": 130,
	"./bo.js": 130,
	"./br": 131,
	"./br.js": 131,
	"./bs": 132,
	"./bs.js": 132,
	"./ca": 133,
	"./ca.js": 133,
	"./cs": 134,
	"./cs.js": 134,
	"./cv": 135,
	"./cv.js": 135,
	"./cy": 136,
	"./cy.js": 136,
	"./da": 137,
	"./da.js": 137,
	"./de": 140,
	"./de-at": 138,
	"./de-at.js": 138,
	"./de-ch": 139,
	"./de-ch.js": 139,
	"./de.js": 140,
	"./dv": 141,
	"./dv.js": 141,
	"./el": 142,
	"./el.js": 142,
	"./en-au": 143,
	"./en-au.js": 143,
	"./en-ca": 144,
	"./en-ca.js": 144,
	"./en-gb": 145,
	"./en-gb.js": 145,
	"./en-ie": 146,
	"./en-ie.js": 146,
	"./en-nz": 147,
	"./en-nz.js": 147,
	"./eo": 148,
	"./eo.js": 148,
	"./es": 150,
	"./es-do": 149,
	"./es-do.js": 149,
	"./es.js": 150,
	"./et": 151,
	"./et.js": 151,
	"./eu": 152,
	"./eu.js": 152,
	"./fa": 153,
	"./fa.js": 153,
	"./fi": 154,
	"./fi.js": 154,
	"./fo": 155,
	"./fo.js": 155,
	"./fr": 158,
	"./fr-ca": 156,
	"./fr-ca.js": 156,
	"./fr-ch": 157,
	"./fr-ch.js": 157,
	"./fr.js": 158,
	"./fy": 159,
	"./fy.js": 159,
	"./gd": 160,
	"./gd.js": 160,
	"./gl": 161,
	"./gl.js": 161,
	"./gom-latn": 162,
	"./gom-latn.js": 162,
	"./he": 163,
	"./he.js": 163,
	"./hi": 164,
	"./hi.js": 164,
	"./hr": 165,
	"./hr.js": 165,
	"./hu": 166,
	"./hu.js": 166,
	"./hy-am": 167,
	"./hy-am.js": 167,
	"./id": 168,
	"./id.js": 168,
	"./is": 169,
	"./is.js": 169,
	"./it": 170,
	"./it.js": 170,
	"./ja": 171,
	"./ja.js": 171,
	"./jv": 172,
	"./jv.js": 172,
	"./ka": 173,
	"./ka.js": 173,
	"./kk": 174,
	"./kk.js": 174,
	"./km": 175,
	"./km.js": 175,
	"./kn": 176,
	"./kn.js": 176,
	"./ko": 177,
	"./ko.js": 177,
	"./ky": 178,
	"./ky.js": 178,
	"./lb": 179,
	"./lb.js": 179,
	"./lo": 180,
	"./lo.js": 180,
	"./lt": 181,
	"./lt.js": 181,
	"./lv": 182,
	"./lv.js": 182,
	"./me": 183,
	"./me.js": 183,
	"./mi": 184,
	"./mi.js": 184,
	"./mk": 185,
	"./mk.js": 185,
	"./ml": 186,
	"./ml.js": 186,
	"./mr": 187,
	"./mr.js": 187,
	"./ms": 189,
	"./ms-my": 188,
	"./ms-my.js": 188,
	"./ms.js": 189,
	"./my": 190,
	"./my.js": 190,
	"./nb": 191,
	"./nb.js": 191,
	"./ne": 192,
	"./ne.js": 192,
	"./nl": 194,
	"./nl-be": 193,
	"./nl-be.js": 193,
	"./nl.js": 194,
	"./nn": 195,
	"./nn.js": 195,
	"./pa-in": 196,
	"./pa-in.js": 196,
	"./pl": 197,
	"./pl.js": 197,
	"./pt": 199,
	"./pt-br": 198,
	"./pt-br.js": 198,
	"./pt.js": 199,
	"./ro": 200,
	"./ro.js": 200,
	"./ru": 201,
	"./ru.js": 201,
	"./sd": 202,
	"./sd.js": 202,
	"./se": 203,
	"./se.js": 203,
	"./si": 204,
	"./si.js": 204,
	"./sk": 205,
	"./sk.js": 205,
	"./sl": 206,
	"./sl.js": 206,
	"./sq": 207,
	"./sq.js": 207,
	"./sr": 209,
	"./sr-cyrl": 208,
	"./sr-cyrl.js": 208,
	"./sr.js": 209,
	"./ss": 210,
	"./ss.js": 210,
	"./sv": 211,
	"./sv.js": 211,
	"./sw": 212,
	"./sw.js": 212,
	"./ta": 213,
	"./ta.js": 213,
	"./te": 214,
	"./te.js": 214,
	"./tet": 215,
	"./tet.js": 215,
	"./th": 216,
	"./th.js": 216,
	"./tl-ph": 217,
	"./tl-ph.js": 217,
	"./tlh": 218,
	"./tlh.js": 218,
	"./tr": 219,
	"./tr.js": 219,
	"./tzl": 220,
	"./tzl.js": 220,
	"./tzm": 222,
	"./tzm-latn": 221,
	"./tzm-latn.js": 221,
	"./tzm.js": 222,
	"./uk": 223,
	"./uk.js": 223,
	"./ur": 224,
	"./ur.js": 224,
	"./uz": 226,
	"./uz-latn": 225,
	"./uz-latn.js": 225,
	"./uz.js": 226,
	"./vi": 227,
	"./vi.js": 227,
	"./x-pseudo": 228,
	"./x-pseudo.js": 228,
	"./yo": 229,
	"./yo.js": 229,
	"./zh-cn": 230,
	"./zh-cn.js": 230,
	"./zh-hk": 231,
	"./zh-hk.js": 231,
	"./zh-tw": 232,
	"./zh-tw.js": 232
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 504;


/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 259,
	"./af.js": 259,
	"./ar": 266,
	"./ar-dz": 260,
	"./ar-dz.js": 260,
	"./ar-kw": 261,
	"./ar-kw.js": 261,
	"./ar-ly": 262,
	"./ar-ly.js": 262,
	"./ar-ma": 263,
	"./ar-ma.js": 263,
	"./ar-sa": 264,
	"./ar-sa.js": 264,
	"./ar-tn": 265,
	"./ar-tn.js": 265,
	"./ar.js": 266,
	"./az": 267,
	"./az.js": 267,
	"./be": 268,
	"./be.js": 268,
	"./bg": 269,
	"./bg.js": 269,
	"./bn": 270,
	"./bn.js": 270,
	"./bo": 271,
	"./bo.js": 271,
	"./br": 272,
	"./br.js": 272,
	"./bs": 273,
	"./bs.js": 273,
	"./ca": 274,
	"./ca.js": 274,
	"./cs": 275,
	"./cs.js": 275,
	"./cv": 276,
	"./cv.js": 276,
	"./cy": 277,
	"./cy.js": 277,
	"./da": 278,
	"./da.js": 278,
	"./de": 281,
	"./de-at": 279,
	"./de-at.js": 279,
	"./de-ch": 280,
	"./de-ch.js": 280,
	"./de.js": 281,
	"./dv": 282,
	"./dv.js": 282,
	"./el": 283,
	"./el.js": 283,
	"./en-au": 284,
	"./en-au.js": 284,
	"./en-ca": 285,
	"./en-ca.js": 285,
	"./en-gb": 286,
	"./en-gb.js": 286,
	"./en-ie": 287,
	"./en-ie.js": 287,
	"./en-nz": 288,
	"./en-nz.js": 288,
	"./eo": 289,
	"./eo.js": 289,
	"./es": 291,
	"./es-do": 290,
	"./es-do.js": 290,
	"./es.js": 291,
	"./et": 292,
	"./et.js": 292,
	"./eu": 293,
	"./eu.js": 293,
	"./fa": 294,
	"./fa.js": 294,
	"./fi": 295,
	"./fi.js": 295,
	"./fo": 296,
	"./fo.js": 296,
	"./fr": 299,
	"./fr-ca": 297,
	"./fr-ca.js": 297,
	"./fr-ch": 298,
	"./fr-ch.js": 298,
	"./fr.js": 299,
	"./fy": 300,
	"./fy.js": 300,
	"./gd": 301,
	"./gd.js": 301,
	"./gl": 302,
	"./gl.js": 302,
	"./gom-latn": 303,
	"./gom-latn.js": 303,
	"./he": 304,
	"./he.js": 304,
	"./hi": 305,
	"./hi.js": 305,
	"./hr": 306,
	"./hr.js": 306,
	"./hu": 307,
	"./hu.js": 307,
	"./hy-am": 308,
	"./hy-am.js": 308,
	"./id": 309,
	"./id.js": 309,
	"./is": 310,
	"./is.js": 310,
	"./it": 311,
	"./it.js": 311,
	"./ja": 312,
	"./ja.js": 312,
	"./jv": 313,
	"./jv.js": 313,
	"./ka": 314,
	"./ka.js": 314,
	"./kk": 315,
	"./kk.js": 315,
	"./km": 316,
	"./km.js": 316,
	"./kn": 317,
	"./kn.js": 317,
	"./ko": 318,
	"./ko.js": 318,
	"./ky": 319,
	"./ky.js": 319,
	"./lb": 320,
	"./lb.js": 320,
	"./lo": 321,
	"./lo.js": 321,
	"./lt": 322,
	"./lt.js": 322,
	"./lv": 323,
	"./lv.js": 323,
	"./me": 324,
	"./me.js": 324,
	"./mi": 325,
	"./mi.js": 325,
	"./mk": 326,
	"./mk.js": 326,
	"./ml": 327,
	"./ml.js": 327,
	"./mr": 328,
	"./mr.js": 328,
	"./ms": 330,
	"./ms-my": 329,
	"./ms-my.js": 329,
	"./ms.js": 330,
	"./my": 331,
	"./my.js": 331,
	"./nb": 332,
	"./nb.js": 332,
	"./ne": 333,
	"./ne.js": 333,
	"./nl": 335,
	"./nl-be": 334,
	"./nl-be.js": 334,
	"./nl.js": 335,
	"./nn": 336,
	"./nn.js": 336,
	"./pa-in": 337,
	"./pa-in.js": 337,
	"./pl": 338,
	"./pl.js": 338,
	"./pt": 340,
	"./pt-br": 339,
	"./pt-br.js": 339,
	"./pt.js": 340,
	"./ro": 341,
	"./ro.js": 341,
	"./ru": 342,
	"./ru.js": 342,
	"./sd": 343,
	"./sd.js": 343,
	"./se": 344,
	"./se.js": 344,
	"./si": 345,
	"./si.js": 345,
	"./sk": 346,
	"./sk.js": 346,
	"./sl": 347,
	"./sl.js": 347,
	"./sq": 348,
	"./sq.js": 348,
	"./sr": 350,
	"./sr-cyrl": 349,
	"./sr-cyrl.js": 349,
	"./sr.js": 350,
	"./ss": 351,
	"./ss.js": 351,
	"./sv": 352,
	"./sv.js": 352,
	"./sw": 353,
	"./sw.js": 353,
	"./ta": 354,
	"./ta.js": 354,
	"./te": 355,
	"./te.js": 355,
	"./tet": 356,
	"./tet.js": 356,
	"./th": 357,
	"./th.js": 357,
	"./tl-ph": 358,
	"./tl-ph.js": 358,
	"./tlh": 359,
	"./tlh.js": 359,
	"./tr": 360,
	"./tr.js": 360,
	"./tzl": 361,
	"./tzl.js": 361,
	"./tzm": 363,
	"./tzm-latn": 362,
	"./tzm-latn.js": 362,
	"./tzm.js": 363,
	"./uk": 364,
	"./uk.js": 364,
	"./ur": 365,
	"./ur.js": 365,
	"./uz": 367,
	"./uz-latn": 366,
	"./uz-latn.js": 366,
	"./uz.js": 367,
	"./vi": 368,
	"./vi.js": 368,
	"./x-pseudo": 369,
	"./x-pseudo.js": 369,
	"./yo": 370,
	"./yo.js": 370,
	"./zh-cn": 371,
	"./zh-cn.js": 371,
	"./zh-hk": 372,
	"./zh-hk.js": 372,
	"./zh-tw": 373,
	"./zh-tw.js": 373
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 514;


/***/ }),

/***/ 529:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 530:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2 class=\"page-header\">Dashboard</h2>\n    <app-reading></app-reading>\n    <app-log></app-log>\n</div>"

/***/ }),

/***/ 531:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron text-center\">\n    <h1>Bible Accountability App</h1>\n    <p class=\"lead\">Welcome to the shiny new Bible Accountability app!</p>\n    <div> \n      <a class=\"btn btn-primary\" [routerLink]=\"['/login']\">Login</a>\n      <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a>\n    </div>\n  </div>\n\n  <h1>Purpose Statement</h1>\n  <div class=\"well\">\n    <p>This web-app is intended to help accountability partners keep up with each others reading log.<br>\n    This website is currently under active development. Please contact the author at <b>gabriellelc95@gmail.com</b> with feature requests.</p>\n  </div>\n</div>"

/***/ }),

/***/ 532:
/***/ (function(module, exports) {

module.exports = "<h3>\n  Reading History\n</h3>\n\n<ul>\n  <li *ngFor=\"let item of log\">Date: {{ item.date }}, Text: {{ item.book }} {{ item.chapter}}</li>\n</ul>\n"

/***/ }),

/***/ 533:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n"

/***/ }),

/***/ 534:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\"> <!--navbar-inverse bg-inverse\">-->\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" (click)=\"isCollapsed = !isCollapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Bible Accountability</a>\n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse\" [collapse]=\"isCollapsed\">\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/']\">Home</a></li>\n      </ul>\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/profile']\">Profile</a></li>\n        \n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/register']\">Register</a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n      </ul>\n    </div> \n  </div>\n</nav>\n\n<!--<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n\n    <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" (click)=\"isCollapsed = !isCollapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n        </button>\n        <!--<a class=\"navbar-brand\" href=\"#\">\n            <img src=\"/logo.png\" />\n        </a>-\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\" [collapse]=\"isCollapsed\">\n        <ul class=\"nav navbar-nav\">\n            <li router-active>\n                <a [routerLink]=\" ['Index'] \">Summary<span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li router-active>\n                <a [routerLink]=\" ['Portfolio'] \">Portfolio<span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li router-active>\n                <a [routerLink]=\" ['About'] \">About<span class=\"sr-only\">(current)</span></a>\n            </li>\n        </ul>\n        <form class=\"navbar-form navbar-left\" role=\"search\">\n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n        </form>\n        <ul class=\"nav navbar-nav navbar-right\">\n            <li dropdown keyboardNav=\"true\">\n                <a href class=\"dropdown-toggle\" role=\"button\" aria-expanded=\"false\" dropdownToggle>\n                    <span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span>\n                    Andrew Duncan \n                    <span class=\"caret\"></span>\n                </a>\n                <ul class=\"dropdown-menu\" role=\"menu\">\n                    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Account Settings</a></li>\n                    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\n                    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n                    <li class=\"divider dropdown-divider\"></li>\n                    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Logout</a></li>\n                </ul>\n            </li>\n\n        </ul>\n    </div>\n</div>-->\n"

/***/ }),

/***/ 535:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n</div>"

/***/ }),

/***/ 536:
/***/ (function(module, exports) {

module.exports = "<div class=\"well\">\n  <label style='padding-right: 10px'>Enter Your Reading!</label>\n  <ng2-datepicker [options]=\"options\" [(ngModel)]=\"date\"></ng2-datepicker>\n  <div class=\"dropdown\" dropdown style=\"display: inline\">\n    <button class=\"btn btn-default\" dropdown-open>{{ selTest }}</button>\n    <ul class=\"dropdown-menu\">\n        <li><a class=\"btn btn-default\" (click)=\"selectTest('Old Testament')\">Old Testament</a></li>\n        <li><a class=\"btn btn-default\" (click)=\"selectTest('New Testament')\">New Testament</a></li>\n    </ul>\n  </div>\n  <div class=\"dropdown\" dropdown style=\"display: inline\">\n    <button class=\"btn btn-default\" [disabled]=\"selTest == 'Select Testament'\" dropdown-open>{{ selBook }}</button>\n    <ul class=\"dropdown-menu\">\n        <li *ngIf=\"selTest == 'Old Testament'\"><a class=\"btn btn-default\" *ngFor=\"let book of oldTestament\" (click)=\"selectBook(book.name)\">{{book.name}}</a></li>\n        <li *ngIf=\"selTest == 'New Testament'\"><a class=\"btn btn-default\" *ngFor=\"let book of newTestament\" (click)=\"selectBook(book.name)\">{{book.name }}</a></li>\n    </ul>\n  </div>\n  <div class=\"dropdown\" dropdown style=\"display: inline\">\n    <button class=\"btn btn-default\" [disabled]=\"selBook == 'Select Book'\" dropdown-open>{{ selChapter }}</button>\n    <ul class=\"dropdown-menu\">\n        <li><a *ngFor=\"let chapter of numChapters\" class=\"btn btn-default\" (click)=\"selectChapter(chapter)\">{{chapter}}</a></li>\n    </ul>\n  </div>\n\n  <button class=\"btn btn-primary\" [disabled]=\"selChapter == 'Select Chapter' || date == undefined\" (click)=\"dateSubmit()\">Log Reading</button>\n</div>"

/***/ }),

/***/ 537:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(418);


/***/ })

},[580]);
//# sourceMappingURL=main.bundle.js.map