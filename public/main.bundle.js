webpackJsonp([1,4],{

/***/ 102:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(438);
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
        //return this.http.post('http://localhost:8080/users/register', user, {headers: headers})
        //  .map(res => res.json());
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:8080/users/authenticate', user, {headers: headers})
        //  .map(res => res.json());
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        //return this.http.get('http://localhost:8080/users/profile', {headers: headers})
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

/***/ 414:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 414;


/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(433);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 422:
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
        template: __webpack_require__(525),
        styles: [__webpack_require__(492)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_datepicker__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_reading_reading_component__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_validate_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_readinglist_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_log_log_component__ = __webpack_require__(426);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { DropdownModule } from "ngx-dropdown";














var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_reading_reading_component__["a" /* ReadingComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_log_log_component__["a" /* LogComponent */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["a" /* CollapseDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_6_ng2_datepicker__["a" /* DatePickerModule */],
            //DropdownModule,
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["b" /* BsDropdownModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_16__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_17__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_19__services_readinglist_service__["a" /* ReadingListService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 424:
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
        template: __webpack_require__(526),
        styles: [__webpack_require__(493)]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 425:
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
        template: __webpack_require__(527),
        styles: [__webpack_require__(494)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_readinglist_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_objSort__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_objSort___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__services_objSort__);
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
    function LogComponent(flashMessage, readingList, router) {
        this.flashMessage = flashMessage;
        this.readingList = readingList;
        this.router = router;
    }
    LogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.readingList.getReadingLog().subscribe(function (reading) {
            var newobject = _this.prettyDate(reading.reading);
            _this.log = newobject;
            _this.log.objSort("formatted", -1);
        }),
            function (err) {
                console.log(err);
                return false;
            };
    };
    LogComponent.prototype.prettyDate = function (array) {
        for (var i = 0; i < array.length; i++) {
            array[i].date.prettydate = new Date(array[i].date.formatted).toDateString();
            array[i].formatted = array[i].date.formatted;
        }
        return array;
    };
    LogComponent.prototype.removeEntry = function (item) {
        var _this = this;
        // alert("removing entry with id: " + id);
        this.readingList.removeReading(item).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.message, { cssClass: 'alert-success', timeout: 10000 });
                _this.router.navigate(['/home']);
            }
            else {
                _this.flashMessage.show(data.message, { cssClass: 'alert-danger', timeout: 10000 });
            }
        });
    };
    LogComponent.prototype.editEntry = function (item) {
        alert("Edit functionality coming soon! For now, just delete this entry and add a new one.");
    };
    return LogComponent;
}());
LogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-log',
        template: __webpack_require__(528),
        styles: [__webpack_require__(495)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_readinglist_service__["a" /* ReadingListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_readinglist_service__["a" /* ReadingListService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LogComponent);

var _a, _b, _c;
//# sourceMappingURL=log.component.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(25);
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
        template: __webpack_require__(529),
        styles: [__webpack_require__(496)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(25);
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
        template: __webpack_require__(530),
        styles: [__webpack_require__(497)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 429:
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
        template: __webpack_require__(531),
        styles: [__webpack_require__(498)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_datepicker__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(25);
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
    ReadingComponent.prototype.saveEntry = function () {
        var _this = this;
        var reading = {
            date: this.date,
            book: this.selBook,
            chapter: this.selChapter,
            id: this.user.id
        };
        this.readingList.saveReading(reading).subscribe(function (data) {
            if (data.success) {
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
        template: __webpack_require__(532),
        styles: [__webpack_require__(499)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_readinglist_service__["a" /* ReadingListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_readinglist_service__["a" /* ReadingListService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ReadingComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=reading.component.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__(102);
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
        template: __webpack_require__(533),
        styles: [__webpack_require__(500)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 432:
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

/***/ 433:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(89);
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
        //return this.http.get('http://localhost:8080/reading/oldbooks', {headers: headers})
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
        //return this.http.get('http://localhost:8080/reading/newbooks', {headers: headers})
        //  .map(res => res.json());
        return this.http.get('reading/newbooks', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ReadingListService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    ReadingListService.prototype.saveReading = function (reading) {
        var user = JSON.parse(localStorage.getItem('user'));
        reading.id = user.id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:8080/reading/save', reading, {headers: headers})
        //  .map(res => res.json());
        return this.http.post('reading/save', reading, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ReadingListService.prototype.removeReading = function (item) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:8080/reading/remove', item, {headers: headers})
        //  .map(res => res.json());
        return this.http.post('reading/remove', item, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ReadingListService.prototype.getReadingLog = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        headers.append('User_Id', user.id);
        //return this.http.get('http://localhost:8080/reading/load', {headers: headers})
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

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

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

var map = {
	"./af": 116,
	"./af.js": 116,
	"./ar": 123,
	"./ar-dz": 117,
	"./ar-dz.js": 117,
	"./ar-kw": 118,
	"./ar-kw.js": 118,
	"./ar-ly": 119,
	"./ar-ly.js": 119,
	"./ar-ma": 120,
	"./ar-ma.js": 120,
	"./ar-sa": 121,
	"./ar-sa.js": 121,
	"./ar-tn": 122,
	"./ar-tn.js": 122,
	"./ar.js": 123,
	"./az": 124,
	"./az.js": 124,
	"./be": 125,
	"./be.js": 125,
	"./bg": 126,
	"./bg.js": 126,
	"./bn": 127,
	"./bn.js": 127,
	"./bo": 128,
	"./bo.js": 128,
	"./br": 129,
	"./br.js": 129,
	"./bs": 130,
	"./bs.js": 130,
	"./ca": 131,
	"./ca.js": 131,
	"./cs": 132,
	"./cs.js": 132,
	"./cv": 133,
	"./cv.js": 133,
	"./cy": 134,
	"./cy.js": 134,
	"./da": 135,
	"./da.js": 135,
	"./de": 138,
	"./de-at": 136,
	"./de-at.js": 136,
	"./de-ch": 137,
	"./de-ch.js": 137,
	"./de.js": 138,
	"./dv": 139,
	"./dv.js": 139,
	"./el": 140,
	"./el.js": 140,
	"./en-au": 141,
	"./en-au.js": 141,
	"./en-ca": 142,
	"./en-ca.js": 142,
	"./en-gb": 143,
	"./en-gb.js": 143,
	"./en-ie": 144,
	"./en-ie.js": 144,
	"./en-nz": 145,
	"./en-nz.js": 145,
	"./eo": 146,
	"./eo.js": 146,
	"./es": 148,
	"./es-do": 147,
	"./es-do.js": 147,
	"./es.js": 148,
	"./et": 149,
	"./et.js": 149,
	"./eu": 150,
	"./eu.js": 150,
	"./fa": 151,
	"./fa.js": 151,
	"./fi": 152,
	"./fi.js": 152,
	"./fo": 153,
	"./fo.js": 153,
	"./fr": 156,
	"./fr-ca": 154,
	"./fr-ca.js": 154,
	"./fr-ch": 155,
	"./fr-ch.js": 155,
	"./fr.js": 156,
	"./fy": 157,
	"./fy.js": 157,
	"./gd": 158,
	"./gd.js": 158,
	"./gl": 159,
	"./gl.js": 159,
	"./gom-latn": 160,
	"./gom-latn.js": 160,
	"./he": 161,
	"./he.js": 161,
	"./hi": 162,
	"./hi.js": 162,
	"./hr": 163,
	"./hr.js": 163,
	"./hu": 164,
	"./hu.js": 164,
	"./hy-am": 165,
	"./hy-am.js": 165,
	"./id": 166,
	"./id.js": 166,
	"./is": 167,
	"./is.js": 167,
	"./it": 168,
	"./it.js": 168,
	"./ja": 169,
	"./ja.js": 169,
	"./jv": 170,
	"./jv.js": 170,
	"./ka": 171,
	"./ka.js": 171,
	"./kk": 172,
	"./kk.js": 172,
	"./km": 173,
	"./km.js": 173,
	"./kn": 174,
	"./kn.js": 174,
	"./ko": 175,
	"./ko.js": 175,
	"./ky": 176,
	"./ky.js": 176,
	"./lb": 177,
	"./lb.js": 177,
	"./lo": 178,
	"./lo.js": 178,
	"./lt": 179,
	"./lt.js": 179,
	"./lv": 180,
	"./lv.js": 180,
	"./me": 181,
	"./me.js": 181,
	"./mi": 182,
	"./mi.js": 182,
	"./mk": 183,
	"./mk.js": 183,
	"./ml": 184,
	"./ml.js": 184,
	"./mr": 185,
	"./mr.js": 185,
	"./ms": 187,
	"./ms-my": 186,
	"./ms-my.js": 186,
	"./ms.js": 187,
	"./my": 188,
	"./my.js": 188,
	"./nb": 189,
	"./nb.js": 189,
	"./ne": 190,
	"./ne.js": 190,
	"./nl": 192,
	"./nl-be": 191,
	"./nl-be.js": 191,
	"./nl.js": 192,
	"./nn": 193,
	"./nn.js": 193,
	"./pa-in": 194,
	"./pa-in.js": 194,
	"./pl": 195,
	"./pl.js": 195,
	"./pt": 197,
	"./pt-br": 196,
	"./pt-br.js": 196,
	"./pt.js": 197,
	"./ro": 198,
	"./ro.js": 198,
	"./ru": 199,
	"./ru.js": 199,
	"./sd": 200,
	"./sd.js": 200,
	"./se": 201,
	"./se.js": 201,
	"./si": 202,
	"./si.js": 202,
	"./sk": 203,
	"./sk.js": 203,
	"./sl": 204,
	"./sl.js": 204,
	"./sq": 205,
	"./sq.js": 205,
	"./sr": 207,
	"./sr-cyrl": 206,
	"./sr-cyrl.js": 206,
	"./sr.js": 207,
	"./ss": 208,
	"./ss.js": 208,
	"./sv": 209,
	"./sv.js": 209,
	"./sw": 210,
	"./sw.js": 210,
	"./ta": 211,
	"./ta.js": 211,
	"./te": 212,
	"./te.js": 212,
	"./tet": 213,
	"./tet.js": 213,
	"./th": 214,
	"./th.js": 214,
	"./tl-ph": 215,
	"./tl-ph.js": 215,
	"./tlh": 216,
	"./tlh.js": 216,
	"./tr": 217,
	"./tr.js": 217,
	"./tzl": 218,
	"./tzl.js": 218,
	"./tzm": 220,
	"./tzm-latn": 219,
	"./tzm-latn.js": 219,
	"./tzm.js": 220,
	"./uk": 221,
	"./uk.js": 221,
	"./ur": 222,
	"./ur.js": 222,
	"./uz": 224,
	"./uz-latn": 223,
	"./uz-latn.js": 223,
	"./uz.js": 224,
	"./vi": 225,
	"./vi.js": 225,
	"./x-pseudo": 226,
	"./x-pseudo.js": 226,
	"./yo": 227,
	"./yo.js": 227,
	"./zh-cn": 228,
	"./zh-cn.js": 228,
	"./zh-hk": 229,
	"./zh-hk.js": 229,
	"./zh-tw": 230,
	"./zh-tw.js": 230
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
webpackContext.id = 501;


/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 257,
	"./af.js": 257,
	"./ar": 264,
	"./ar-dz": 258,
	"./ar-dz.js": 258,
	"./ar-kw": 259,
	"./ar-kw.js": 259,
	"./ar-ly": 260,
	"./ar-ly.js": 260,
	"./ar-ma": 261,
	"./ar-ma.js": 261,
	"./ar-sa": 262,
	"./ar-sa.js": 262,
	"./ar-tn": 263,
	"./ar-tn.js": 263,
	"./ar.js": 264,
	"./az": 265,
	"./az.js": 265,
	"./be": 266,
	"./be.js": 266,
	"./bg": 267,
	"./bg.js": 267,
	"./bn": 268,
	"./bn.js": 268,
	"./bo": 269,
	"./bo.js": 269,
	"./br": 270,
	"./br.js": 270,
	"./bs": 271,
	"./bs.js": 271,
	"./ca": 272,
	"./ca.js": 272,
	"./cs": 273,
	"./cs.js": 273,
	"./cv": 274,
	"./cv.js": 274,
	"./cy": 275,
	"./cy.js": 275,
	"./da": 276,
	"./da.js": 276,
	"./de": 279,
	"./de-at": 277,
	"./de-at.js": 277,
	"./de-ch": 278,
	"./de-ch.js": 278,
	"./de.js": 279,
	"./dv": 280,
	"./dv.js": 280,
	"./el": 281,
	"./el.js": 281,
	"./en-au": 282,
	"./en-au.js": 282,
	"./en-ca": 283,
	"./en-ca.js": 283,
	"./en-gb": 284,
	"./en-gb.js": 284,
	"./en-ie": 285,
	"./en-ie.js": 285,
	"./en-nz": 286,
	"./en-nz.js": 286,
	"./eo": 287,
	"./eo.js": 287,
	"./es": 289,
	"./es-do": 288,
	"./es-do.js": 288,
	"./es.js": 289,
	"./et": 290,
	"./et.js": 290,
	"./eu": 291,
	"./eu.js": 291,
	"./fa": 292,
	"./fa.js": 292,
	"./fi": 293,
	"./fi.js": 293,
	"./fo": 294,
	"./fo.js": 294,
	"./fr": 297,
	"./fr-ca": 295,
	"./fr-ca.js": 295,
	"./fr-ch": 296,
	"./fr-ch.js": 296,
	"./fr.js": 297,
	"./fy": 298,
	"./fy.js": 298,
	"./gd": 299,
	"./gd.js": 299,
	"./gl": 300,
	"./gl.js": 300,
	"./gom-latn": 301,
	"./gom-latn.js": 301,
	"./he": 302,
	"./he.js": 302,
	"./hi": 303,
	"./hi.js": 303,
	"./hr": 304,
	"./hr.js": 304,
	"./hu": 305,
	"./hu.js": 305,
	"./hy-am": 306,
	"./hy-am.js": 306,
	"./id": 307,
	"./id.js": 307,
	"./is": 308,
	"./is.js": 308,
	"./it": 309,
	"./it.js": 309,
	"./ja": 310,
	"./ja.js": 310,
	"./jv": 311,
	"./jv.js": 311,
	"./ka": 312,
	"./ka.js": 312,
	"./kk": 313,
	"./kk.js": 313,
	"./km": 314,
	"./km.js": 314,
	"./kn": 315,
	"./kn.js": 315,
	"./ko": 316,
	"./ko.js": 316,
	"./ky": 317,
	"./ky.js": 317,
	"./lb": 318,
	"./lb.js": 318,
	"./lo": 319,
	"./lo.js": 319,
	"./lt": 320,
	"./lt.js": 320,
	"./lv": 321,
	"./lv.js": 321,
	"./me": 322,
	"./me.js": 322,
	"./mi": 323,
	"./mi.js": 323,
	"./mk": 324,
	"./mk.js": 324,
	"./ml": 325,
	"./ml.js": 325,
	"./mr": 326,
	"./mr.js": 326,
	"./ms": 328,
	"./ms-my": 327,
	"./ms-my.js": 327,
	"./ms.js": 328,
	"./my": 329,
	"./my.js": 329,
	"./nb": 330,
	"./nb.js": 330,
	"./ne": 331,
	"./ne.js": 331,
	"./nl": 333,
	"./nl-be": 332,
	"./nl-be.js": 332,
	"./nl.js": 333,
	"./nn": 334,
	"./nn.js": 334,
	"./pa-in": 335,
	"./pa-in.js": 335,
	"./pl": 336,
	"./pl.js": 336,
	"./pt": 338,
	"./pt-br": 337,
	"./pt-br.js": 337,
	"./pt.js": 338,
	"./ro": 339,
	"./ro.js": 339,
	"./ru": 340,
	"./ru.js": 340,
	"./sd": 341,
	"./sd.js": 341,
	"./se": 342,
	"./se.js": 342,
	"./si": 343,
	"./si.js": 343,
	"./sk": 344,
	"./sk.js": 344,
	"./sl": 345,
	"./sl.js": 345,
	"./sq": 346,
	"./sq.js": 346,
	"./sr": 348,
	"./sr-cyrl": 347,
	"./sr-cyrl.js": 347,
	"./sr.js": 348,
	"./ss": 349,
	"./ss.js": 349,
	"./sv": 350,
	"./sv.js": 350,
	"./sw": 351,
	"./sw.js": 351,
	"./ta": 352,
	"./ta.js": 352,
	"./te": 353,
	"./te.js": 353,
	"./tet": 354,
	"./tet.js": 354,
	"./th": 355,
	"./th.js": 355,
	"./tl-ph": 356,
	"./tl-ph.js": 356,
	"./tlh": 357,
	"./tlh.js": 357,
	"./tr": 358,
	"./tr.js": 358,
	"./tzl": 359,
	"./tzl.js": 359,
	"./tzm": 361,
	"./tzm-latn": 360,
	"./tzm-latn.js": 360,
	"./tzm.js": 361,
	"./uk": 362,
	"./uk.js": 362,
	"./ur": 363,
	"./ur.js": 363,
	"./uz": 365,
	"./uz-latn": 364,
	"./uz-latn.js": 364,
	"./uz.js": 365,
	"./vi": 366,
	"./vi.js": 366,
	"./x-pseudo": 367,
	"./x-pseudo.js": 367,
	"./yo": 368,
	"./yo.js": 368,
	"./zh-cn": 369,
	"./zh-cn.js": 369,
	"./zh-hk": 370,
	"./zh-hk.js": 370,
	"./zh-tw": 371,
	"./zh-tw.js": 371
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
webpackContext.id = 511;


/***/ }),

/***/ 525:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 526:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2 class=\"page-header\">Dashboard</h2>\n    <app-reading></app-reading>\n    <app-log></app-log>\n</div>"

/***/ }),

/***/ 527:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron text-center\">\n    <h1>Bible Accountability App</h1>\n    <p class=\"lead\">Welcome to the shiny new Bible Accountability app!</p>\n    <div> \n      <a class=\"btn btn-primary\" [routerLink]=\"['/login']\">Login</a>\n      <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a>\n    </div>\n  </div>\n\n  <h1>Purpose Statement</h1>\n  <div class=\"well\">\n    <p>This web-app is intended to help accountability partners keep up with each others reading log.<br>\n    This website is currently under active development. Please contact the author at <b>gabriellelc95@gmail.com</b> with feature requests.</p>\n  </div>\n</div>"

/***/ }),

/***/ 528:
/***/ (function(module, exports) {

module.exports = "<h3>\n  Reading History\n</h3>\n\n<div class=\"list-group\">\n  <span class=\"list-group-item\" *ngFor=\"let item of log\">\n    <button class=\"btn btn-link\"(click)=\"editEntry(item)\">Date: {{item.date.prettydate}} Text: {{item.book}} {{item.chapter}} </button>\n    <button class=\"btn btn-sm pull-right\" (click)=\"removeEntry(item)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\n  </span>\n</div>\n"

/***/ }),

/***/ 529:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n"

/***/ }),

/***/ 530:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\"> <!--navbar-inverse bg-inverse\">-->\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" (click)=\"isCollapsed = !isCollapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Bible Accountability</a>\n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse\" [collapse]=\"isCollapsed\">\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/']\">Home</a></li>\n      </ul>\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/profile']\">Profile</a></li>\n        \n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/register']\">Register</a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n      </ul>\n    </div> \n  </div>\n</nav>\n\n<!--<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n\n    <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" (click)=\"isCollapsed = !isCollapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n        </button>\n        <!--<a class=\"navbar-brand\" href=\"#\">\n            <img src=\"/logo.png\" />\n        </a>-\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\" [collapse]=\"isCollapsed\">\n        <ul class=\"nav navbar-nav\">\n            <li router-active>\n                <a [routerLink]=\" ['Index'] \">Summary<span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li router-active>\n                <a [routerLink]=\" ['Portfolio'] \">Portfolio<span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li router-active>\n                <a [routerLink]=\" ['About'] \">About<span class=\"sr-only\">(current)</span></a>\n            </li>\n        </ul>\n        <form class=\"navbar-form navbar-left\" role=\"search\">\n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n        </form>\n        <ul class=\"nav navbar-nav navbar-right\">\n            <li dropdown keyboardNav=\"true\">\n                <a href class=\"dropdown-toggle\" role=\"button\" aria-expanded=\"false\" dropdownToggle>\n                    <span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span>\n                    Andrew Duncan \n                    <span class=\"caret\"></span>\n                </a>\n                <ul class=\"dropdown-menu\" role=\"menu\">\n                    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Account Settings</a></li>\n                    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\n                    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n                    <li class=\"divider dropdown-divider\"></li>\n                    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Logout</a></li>\n                </ul>\n            </li>\n\n        </ul>\n    </div>\n</div>-->\n"

/***/ }),

/***/ 531:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n</div>"

/***/ }),

/***/ 532:
/***/ (function(module, exports) {

module.exports = "<div class=\"well\">\n  <label style='padding-right: 10px'>Enter Your Reading!</label>\n  <ng2-datepicker [options]=\"options\" [(ngModel)]=\"date\"></ng2-datepicker>\n  <div class=\"btn-group\" dropdown>\n    <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">\n      {{selTest}} <span class=\"caret\"></span>\n    </button>\n    <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n      <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"selectTest('Old Testament')\">Old Testament</a></li>\n      <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"selectTest('New Testament')\">New Testament</a></li>\n    </ul>\n  </div>\n  <div class=\"btn-group\" dropdown [isDisabled]=\"selTest == 'Select Testament'\">\n    <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">\n      {{selBook}} <span class=\"caret\"></span>\n    </button>\n    <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n      <li role=\"menuitem\" *ngIf=\"selTest == 'Old Testament'\"><a class=\"dropdown-item\" *ngFor=\"let book of oldTestament\" (click)=\"selectBook(book.name)\">{{book.name}}</a></li>\n      <li role=\"menuitem\" *ngIf=\"selTest == 'New Testament'\"><a class=\"dropdown-item\" *ngFor=\"let book of newTestament\" (click)=\"selectBook(book.name)\">{{book.name}}</a></li>\n    </ul>\n  </div>\n  <div class=\"btn-group\" dropdown [isDisabled]=\"selBook == 'Select Book'\">\n    <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">\n      {{selChapter}} <span class=\"caret\"></span>\n    </button>\n    <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n      <li role=\"menuitem\"><a class=\"dropdown-item\" *ngFor=\"let chapter of numChapters\" (click)=\"selectChapter(chapter)\">{{chapter}}</a></li>\n    </ul>\n  </div>\n\n  <button class=\"btn btn-primary\" [disabled]=\"selChapter == 'Select Chapter' || date == undefined\" (click)=\"saveEntry()\">Log Reading</button>\n</div>\n\n<!--<li class=\"divider dropdown-divider\"></li>-->"

/***/ }),

/***/ 533:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ 574:
/***/ (function(module, exports) {

/*
objSort v 1.1
copyright 2006 Thomas Frank

This program is free software under the terms of the 
GNU General Public License version 2 as published by the Free 
Software Foundation. It is distributed without any warranty.
*/

tfObjSort={
	init:function(){
		Array.prototype.objSort=function(){
			tfObjSort.setThings(this);
			var a=arguments;
			var x=tfObjSort;
			x.a=[];x.d=[];
			for(var i=0;i<a.length;i++){
				if(typeof a[i]=="string"){x.a.push(a[i]);x.d.push(1)};
				if(a[i]===-1){x.d[x.d.length-1]=-1}
			}
			return this.sort(tfObjSort.sorter);
		};
		Array.prototype.strSort=function(){
			tfObjSort.setThings(this);
			return this.sort(tfObjSort.charSorter)
		}
	},
	sorter:function(x,y){
		var a=tfObjSort.a
		var d=tfObjSort.d
		var r=0
		for(var i=0;i<a.length;i++){
			if(typeof x+typeof y!="objectobject"){return typeof x=="object"?-1:1};
			var m=x[a[i]]; var n=y[a[i]];
			var t=typeof m+typeof n;
			if(t=="booleanboolean"){m*=-1;n*=-1}
			else if(t.split("string").join("").split("number").join("")!=""){continue};
			r=m-n;
			if(isNaN(r)){r=tfObjSort.charSorter(m,n)};
			if(r!=0){return r*d[i]}
		}
		return r
	},
	charSorter:function(x,y){
		if(tfObjSort.ignoreCase){x=x.toLowerCase();y=y.toLowerCase()};
		var s=tfObjSort.chars;
		if(!s){return x>y?1:x<y?-1:0};
		x=x.split("");y=y.split("");l=x.length>y.length?y.length:x.length;
		var p=0;
		for(var i=0;i<l;i++){
			p=s.indexOf(x[i])-s.indexOf(y[i]);
			if(p!=0){break};
		};
		if(p==0){p=x.length-y.length};
		return p
	},
	setThings:function(x){
		this.ignoreCase=x.sortIgnoreCase;
		var s=x.sortCharOrder;
		if(!s){this.chars=false;return true};
		if(!s.sort){s=s.split(",")};
		var a="";
		for(var i=1;i<1024;i++){a+=String.fromCharCode(i)};
		for(var i=0;i<s.length;i++){
			z=s[i].split("");
			var m=z[0]; var n=z[1]; var o="";
			if(z[2]=="_"){o=n+m} else {o=m+n};
			a=a.split(m).join("").split(n).join(o);
		};
		this.chars=a
	}
};
tfObjSort.init();

/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(415);


/***/ })

},[577]);
//# sourceMappingURL=main.bundle.js.map