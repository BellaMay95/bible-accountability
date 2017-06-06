webpackJsonp([1,4],{

/***/ 103:
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

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(445);
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
        //return this.http.post('http://localhost:8080/users/register', user, {headers: headers}).map(res => res.json());
        return this.http.post('users/register', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:8080/users/authenticate', user, {headers: headers}).map(res => res.json());
        return this.http.post('users/authenticate', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        //return this.http.get('http://localhost:8080/users/profile', {headers: headers}).map(res => res.json());
        return this.http.get('users/profile', { headers: headers }).map(function (res) { return res.json(); });
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

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FriendService = (function () {
    function FriendService(http) {
        this.http = http;
    }
    FriendService.prototype.getUserList = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        //return this.http.get('http://localhost:8080/users/userlist', {headers: headers}).map(res => res.json());
        return this.http.get('users/userlist', { headers: headers }).map(function (res) { return res.json(); });
    };
    FriendService.prototype.submitFriendRequest = function (friend) {
        var user = JSON.parse(localStorage.getItem('user'));
        var requestObj = {
            sendUser: user,
            friendUser: friend,
            timestamp: new Date()
        };
        //alert(JSON.stringify(requestObj));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:8080/friend/sendRequest', requestObj, {headers: headers}).map(res => res.json());
        return this.http.post('friend/sendRequest', requestObj, { headers: headers }).map(function (res) { return res.json(); });
    };
    FriendService.prototype.getSubReq = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        headers.append('User_Id', user.id);
        //return this.http.get('http://localhost:8080/friend/getsubpending', {headers: headers}).map(res => res.json());
        return this.http.get('friend/getsubpending', { headers: headers }).map(function (res) { return res.json(); });
    };
    FriendService.prototype.getRecvReq = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        headers.append('User_Id', user.id);
        //return this.http.get('http://localhost:8080/friend/getrecvpending', {headers: headers}).map(res => res.json());
        return this.http.get('friend/getrecvpending', { headers: headers }).map(function (res) { return res.json(); });
    };
    FriendService.prototype.rejectRequest = function (request) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:8080/friend/rejrequest', request, {headers: headers}).map(res => res.json());
        return this.http.post('friend/rejrequest', request, { headers: headers }).map(function (res) { return res.json(); });
    };
    FriendService.prototype.acceptRequest = function (request) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:8080/friend/accrequest', request, {headers: headers}).map(res => res.json());
        return this.http.post('friend/accrequest', request, { headers: headers }).map(function (res) { return res.json(); });
    };
    FriendService.prototype.getFriends = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        headers.append('User_Id', user.id);
        //return this.http.get('http://localhost:8080/friend/getfriends', {headers: headers}).map(res => res.json());
        return this.http.get('friend/getfriends', { headers: headers }).map(function (res) { return res.json(); });
    };
    FriendService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    FriendService.prototype.isFriend = function () {
    };
    return FriendService;
}());
FriendService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], FriendService);

var _a;
//# sourceMappingURL=friend.service.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(440);




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
        template: __webpack_require__(535),
        styles: [__webpack_require__(499)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_datepicker__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_contact_contact_component__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profiles_login_login_component__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profiles_register_register_component__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_profiles_dashboard_dashboard_component__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_profiles_profile_profile_component__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_readings_reading_reading_component__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_readings_log_log_component__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_friends_friendlist_friendlist_component__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_friends_add_friend_add_friend_component__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_friends_pendingfriend_pendingfriend_component__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_validate_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_readinglist_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_friend_service__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















//import { FriendProfileComponent } from './components/friends/friendprofile/friendprofile.component';





var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_10__components_contact_contact_component__["a" /* ContactComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_12__components_profiles_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__components_profiles_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_14__components_profiles_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_15__components_profiles_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'friend', component: __WEBPACK_IMPORTED_MODULE_18__components_friends_friendlist_friendlist_component__["a" /* FriendListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]] },
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
            __WEBPACK_IMPORTED_MODULE_11__components_profiles_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_profiles_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_profiles_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_profiles_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_readings_reading_reading_component__["a" /* ReadingComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_readings_log_log_component__["a" /* LogComponent */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["a" /* CollapseDirective */],
            __WEBPACK_IMPORTED_MODULE_18__components_friends_friendlist_friendlist_component__["a" /* FriendListComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_friends_add_friend_add_friend_component__["a" /* AddFriendComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_friends_pendingfriend_pendingfriend_component__["a" /* PendingFriendComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_contact_contact_component__["a" /* ContactComponent */] //,
            //FriendProfileComponent
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_6_ng2_datepicker__["a" /* DatePickerModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["b" /* TypeaheadModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["c" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["d" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["e" /* TabsModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_21__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_22__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_24__services_readinglist_service__["a" /* ReadingListService */], __WEBPACK_IMPORTED_MODULE_25__services_friend_service__["a" /* FriendService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(536),
        styles: [__webpack_require__(500)]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_friend_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFriendComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddFriendComponent = (function () {
    function AddFriendComponent(friendService, router, flashMessage) {
        this.friendService = friendService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.isModalShown = false;
    }
    AddFriendComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.friendService.getUserList().subscribe(function (user) {
            _this.userlist = user.UserList;
            var myuser = JSON.parse(localStorage.getItem('user'));
            var myname = myuser.username;
            for (var i = 0; i < _this.userlist.length; i++) {
                if (_this.userlist[i].username == myname)
                    _this.userlist.splice(i, 1);
            }
        }),
            function (err) {
                console.log(err);
                return false;
            };
        this.userdataSource = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"]
            .create(function (observer) {
            // Runs on every search
            observer.next(_this.asyncSelectedUser);
        })
            .mergeMap(function (token) { return _this.getUsersAsObservable(token); });
        this.emaildataSource = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"]
            .create(function (observer) {
            // Runs on every search
            observer.next(_this.asyncSelectedEmail);
        })
            .mergeMap(function (token) { return _this.getEmailsAsObservable(token); });
    };
    AddFriendComponent.prototype.getUsersAsObservable = function (token) {
        var query = new RegExp(token, 'ig');
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.userlist.filter(function (state) {
            return query.test(state.username);
        }));
    };
    AddFriendComponent.prototype.getEmailsAsObservable = function (token) {
        var query = new RegExp(token, 'ig');
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.userlist.filter(function (state) {
            return query.test(state.email);
        }));
    };
    AddFriendComponent.prototype.changeTypeaheadLoading = function (e) {
        this.typeaheadLoading = e;
    };
    AddFriendComponent.prototype.changeTypeaheadNoResultsUser = function (e) {
        this.typeaheadNoResultsUser = e;
    };
    AddFriendComponent.prototype.changeTypeaheadNoResultsEmail = function (e) {
        this.typeaheadNoResultsEmail = e;
    };
    AddFriendComponent.prototype.typeaheadOnSelect = function (e) {
        //e.item is the user object. e.value is the selected value (which I don't think I need)
        this.userSelect = e.item;
        //alert(JSON.stringify(this.userSelect));
        this.showModal();
    };
    AddFriendComponent.prototype.showModal = function () {
        this.isModalShown = true;
    };
    AddFriendComponent.prototype.hideModal = function () {
        this.autoShownModal.hide();
    };
    AddFriendComponent.prototype.onHidden = function () {
        this.isModalShown = false;
    };
    AddFriendComponent.prototype.addFriend = function () {
        var _this = this;
        //alert(JSON.stringify(this.userSelect));
        this.userSelect.id = this.userSelect._id;
        this.userSelect._id = undefined;
        var friendObj = this.userSelect;
        //alert(JSON.stringify(friendObj));
        this.friendService.submitFriendRequest(friendObj).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.message, { cssClass: 'alert-success', timeout: 10000 });
                _this.router.navigate(['/home']);
            }
            else {
                _this.flashMessage.show(data.message, { cssClass: 'alert-danger', timeout: 10000 });
            }
        });
    };
    AddFriendComponent.prototype.viewProfile = function () {
        var friendName = this.userSelect.username;
        //this.router.navigate(['/friend/' + friendName]);
    };
    return AddFriendComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('autoShownModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["f" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["f" /* ModalDirective */]) === "function" && _a || Object)
], AddFriendComponent.prototype, "autoShownModal", void 0);
AddFriendComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-friend',
        template: __webpack_require__(537),
        styles: [__webpack_require__(501)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_friend_service__["a" /* FriendService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_friend_service__["a" /* FriendService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], AddFriendComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=add-friend.component.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_friend_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FriendListComponent = (function () {
    function FriendListComponent(friendService, router, flashMessage) {
        this.friendService = friendService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.friendList = [];
        this.friendArray = [];
    }
    FriendListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.friendService.getFriends().subscribe(function (friends) {
            _this.friendList = friends.list;
            var user = JSON.parse(localStorage.getItem('user'));
            for (var i = 0; i < _this.friendList.length; i++) {
                if (_this.friendList[i].user1.id == user.id) {
                    _this.friendArray[i] = _this.friendList[i].user2;
                }
                else {
                    _this.friendArray[i] = _this.friendList[i].user1;
                }
            }
        }),
            function (err) {
                console.log(err);
                return false;
            };
    };
    return FriendListComponent;
}());
FriendListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-friendlist',
        template: __webpack_require__(538),
        styles: [__webpack_require__(502)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_friend_service__["a" /* FriendService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_friend_service__["a" /* FriendService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], FriendListComponent);

var _a, _b, _c;
//# sourceMappingURL=friendlist.component.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_friend_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingFriendComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PendingFriendComponent = (function () {
    function PendingFriendComponent(friendService, router, flashMessage) {
        this.friendService = friendService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.subRequests = [];
        this.recvRequests = [];
    }
    PendingFriendComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.friendService.getSubReq().subscribe(function (sent) {
            _this.subRequests = sent.subRequests;
            //alert(JSON.stringify(this.subRequests));
        }),
            function (err) {
                console.log(err);
                return false;
            };
        this.friendService.getRecvReq().subscribe(function (recv) {
            _this.recvRequests = recv.recvRequests;
            //alert(JSON.stringify(this.recvRequests));
        }),
            function (err) {
                console.log(err);
                return false;
            };
    };
    PendingFriendComponent.prototype.rejectRequest = function (id) {
        var _this = this;
        //alert("Removing friend request with id " + id);
        var choice = confirm("Are you sure you want to delete this friend request?");
        if (choice == true) {
            this.friendService.rejectRequest(id).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show(data.message, { cssClass: 'alert-success', timeout: 10000 });
                    _this.router.navigate(['/home']);
                }
                else {
                    _this.flashMessage.show(data.message, { cssClass: 'alert-danger', timeout: 10000 });
                }
            });
        }
    };
    PendingFriendComponent.prototype.acceptRequest = function (request) {
        var _this = this;
        //alert(JSON.stringify(request));
        request.user1 = request.sendUser;
        request.user2 = request.friendUser;
        request.reqtimestamp = request.timestamp;
        //request.sendUser = undefined;
        //request.friendUser = undefined;
        request.acctimestamp = new Date();
        console.log(request);
        var choice = confirm("Are you sure you wish to accept this friend request?");
        if (choice == true) {
            this.friendService.acceptRequest(request).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show(data.message, { cssClass: 'alert-success', timeout: 10000 });
                    _this.subRequests = [];
                    _this.recvRequests = [];
                    _this.router.navigate(['/home']);
                }
                else {
                    _this.flashMessage.show(data.message, { cssClass: 'alert-danger', timeout: 10000 });
                }
            });
        }
    };
    return PendingFriendComponent;
}());
PendingFriendComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pendingfriend',
        template: __webpack_require__(539),
        styles: [__webpack_require__(503)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_friend_service__["a" /* FriendService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_friend_service__["a" /* FriendService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], PendingFriendComponent);

var _a, _b, _c;
//# sourceMappingURL=pendingfriend.component.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(11);
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
        template: __webpack_require__(540),
        styles: [__webpack_require__(504)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(16);
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
        template: __webpack_require__(541),
        styles: [__webpack_require__(505)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 433:
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
        template: __webpack_require__(542),
        styles: [__webpack_require__(506)]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(16);
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
        template: __webpack_require__(543),
        styles: [__webpack_require__(507)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(19);
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
        template: __webpack_require__(544),
        styles: [__webpack_require__(508)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(19);
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
        template: __webpack_require__(545),
        styles: [__webpack_require__(509)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_readinglist_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_objSort__ = __webpack_require__(588);
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
        template: __webpack_require__(546),
        styles: [__webpack_require__(510)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_readinglist_service__["a" /* ReadingListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_readinglist_service__["a" /* ReadingListService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LogComponent);

var _a, _b, _c;
//# sourceMappingURL=log.component.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_datepicker__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_readinglist_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(19);
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
        template: __webpack_require__(547),
        styles: [__webpack_require__(511)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_readinglist_service__["a" /* ReadingListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_readinglist_service__["a" /* ReadingListService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ReadingComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=reading.component.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_friend_service__ = __webpack_require__(30);
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
    function AuthGuard(authService, friendService, router) {
        this.authService = authService;
        this.friendService = friendService;
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
    AuthGuard.prototype.canShow = function () {
        if (this.friendService.isFriend()) {
            return true;
        }
        else {
            this.router.navigate(['/friend']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_friend_service__["a" /* FriendService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_friend_service__["a" /* FriendService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AuthGuard);

var _a, _b, _c;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 440:
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

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(49);
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
        //return this.http.get('http://localhost:8080/reading/oldbooks', {headers: headers}).map(res => res.json());
        return this.http.get('reading/oldbooks', { headers: headers }).map(function (res) { return res.json(); });
    };
    ReadingListService.prototype.getNewTestament = function () {
        //return this.newTestament;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        //return this.http.get('http://localhost:8080/reading/newbooks', {headers: headers}).map(res => res.json());
        return this.http.get('reading/newbooks', { headers: headers }).map(function (res) { return res.json(); });
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
        //return this.http.post('http://localhost:8080/reading/save', reading, {headers: headers}).map(res => res.json());
        return this.http.post('reading/save', reading, { headers: headers }).map(function (res) { return res.json(); });
    };
    ReadingListService.prototype.removeReading = function (item) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:8080/reading/remove', item, {headers: headers}).map(res => res.json());
        return this.http.post('reading/remove', item, { headers: headers }).map(function (res) { return res.json(); });
    };
    ReadingListService.prototype.getReadingLog = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        headers.append('User_Id', user.id);
        //return this.http.get('http://localhost:8080/reading/load', {headers: headers}).map(res => res.json());
        return this.http.get('reading/load', { headers: headers }).map(function (res) { return res.json(); });
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

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 117,
	"./af.js": 117,
	"./ar": 124,
	"./ar-dz": 118,
	"./ar-dz.js": 118,
	"./ar-kw": 119,
	"./ar-kw.js": 119,
	"./ar-ly": 120,
	"./ar-ly.js": 120,
	"./ar-ma": 121,
	"./ar-ma.js": 121,
	"./ar-sa": 122,
	"./ar-sa.js": 122,
	"./ar-tn": 123,
	"./ar-tn.js": 123,
	"./ar.js": 124,
	"./az": 125,
	"./az.js": 125,
	"./be": 126,
	"./be.js": 126,
	"./bg": 127,
	"./bg.js": 127,
	"./bn": 128,
	"./bn.js": 128,
	"./bo": 129,
	"./bo.js": 129,
	"./br": 130,
	"./br.js": 130,
	"./bs": 131,
	"./bs.js": 131,
	"./ca": 132,
	"./ca.js": 132,
	"./cs": 133,
	"./cs.js": 133,
	"./cv": 134,
	"./cv.js": 134,
	"./cy": 135,
	"./cy.js": 135,
	"./da": 136,
	"./da.js": 136,
	"./de": 139,
	"./de-at": 137,
	"./de-at.js": 137,
	"./de-ch": 138,
	"./de-ch.js": 138,
	"./de.js": 139,
	"./dv": 140,
	"./dv.js": 140,
	"./el": 141,
	"./el.js": 141,
	"./en-au": 142,
	"./en-au.js": 142,
	"./en-ca": 143,
	"./en-ca.js": 143,
	"./en-gb": 144,
	"./en-gb.js": 144,
	"./en-ie": 145,
	"./en-ie.js": 145,
	"./en-nz": 146,
	"./en-nz.js": 146,
	"./eo": 147,
	"./eo.js": 147,
	"./es": 149,
	"./es-do": 148,
	"./es-do.js": 148,
	"./es.js": 149,
	"./et": 150,
	"./et.js": 150,
	"./eu": 151,
	"./eu.js": 151,
	"./fa": 152,
	"./fa.js": 152,
	"./fi": 153,
	"./fi.js": 153,
	"./fo": 154,
	"./fo.js": 154,
	"./fr": 157,
	"./fr-ca": 155,
	"./fr-ca.js": 155,
	"./fr-ch": 156,
	"./fr-ch.js": 156,
	"./fr.js": 157,
	"./fy": 158,
	"./fy.js": 158,
	"./gd": 159,
	"./gd.js": 159,
	"./gl": 160,
	"./gl.js": 160,
	"./gom-latn": 161,
	"./gom-latn.js": 161,
	"./he": 162,
	"./he.js": 162,
	"./hi": 163,
	"./hi.js": 163,
	"./hr": 164,
	"./hr.js": 164,
	"./hu": 165,
	"./hu.js": 165,
	"./hy-am": 166,
	"./hy-am.js": 166,
	"./id": 167,
	"./id.js": 167,
	"./is": 168,
	"./is.js": 168,
	"./it": 169,
	"./it.js": 169,
	"./ja": 170,
	"./ja.js": 170,
	"./jv": 171,
	"./jv.js": 171,
	"./ka": 172,
	"./ka.js": 172,
	"./kk": 173,
	"./kk.js": 173,
	"./km": 174,
	"./km.js": 174,
	"./kn": 175,
	"./kn.js": 175,
	"./ko": 176,
	"./ko.js": 176,
	"./ky": 177,
	"./ky.js": 177,
	"./lb": 178,
	"./lb.js": 178,
	"./lo": 179,
	"./lo.js": 179,
	"./lt": 180,
	"./lt.js": 180,
	"./lv": 181,
	"./lv.js": 181,
	"./me": 182,
	"./me.js": 182,
	"./mi": 183,
	"./mi.js": 183,
	"./mk": 184,
	"./mk.js": 184,
	"./ml": 185,
	"./ml.js": 185,
	"./mr": 186,
	"./mr.js": 186,
	"./ms": 188,
	"./ms-my": 187,
	"./ms-my.js": 187,
	"./ms.js": 188,
	"./my": 189,
	"./my.js": 189,
	"./nb": 190,
	"./nb.js": 190,
	"./ne": 191,
	"./ne.js": 191,
	"./nl": 193,
	"./nl-be": 192,
	"./nl-be.js": 192,
	"./nl.js": 193,
	"./nn": 194,
	"./nn.js": 194,
	"./pa-in": 195,
	"./pa-in.js": 195,
	"./pl": 196,
	"./pl.js": 196,
	"./pt": 198,
	"./pt-br": 197,
	"./pt-br.js": 197,
	"./pt.js": 198,
	"./ro": 199,
	"./ro.js": 199,
	"./ru": 200,
	"./ru.js": 200,
	"./sd": 201,
	"./sd.js": 201,
	"./se": 202,
	"./se.js": 202,
	"./si": 203,
	"./si.js": 203,
	"./sk": 204,
	"./sk.js": 204,
	"./sl": 205,
	"./sl.js": 205,
	"./sq": 206,
	"./sq.js": 206,
	"./sr": 208,
	"./sr-cyrl": 207,
	"./sr-cyrl.js": 207,
	"./sr.js": 208,
	"./ss": 209,
	"./ss.js": 209,
	"./sv": 210,
	"./sv.js": 210,
	"./sw": 211,
	"./sw.js": 211,
	"./ta": 212,
	"./ta.js": 212,
	"./te": 213,
	"./te.js": 213,
	"./tet": 214,
	"./tet.js": 214,
	"./th": 215,
	"./th.js": 215,
	"./tl-ph": 216,
	"./tl-ph.js": 216,
	"./tlh": 217,
	"./tlh.js": 217,
	"./tr": 218,
	"./tr.js": 218,
	"./tzl": 219,
	"./tzl.js": 219,
	"./tzm": 221,
	"./tzm-latn": 220,
	"./tzm-latn.js": 220,
	"./tzm.js": 221,
	"./uk": 222,
	"./uk.js": 222,
	"./ur": 223,
	"./ur.js": 223,
	"./uz": 225,
	"./uz-latn": 224,
	"./uz-latn.js": 224,
	"./uz.js": 225,
	"./vi": 226,
	"./vi.js": 226,
	"./x-pseudo": 227,
	"./x-pseudo.js": 227,
	"./yo": 228,
	"./yo.js": 228,
	"./zh-cn": 229,
	"./zh-cn.js": 229,
	"./zh-hk": 230,
	"./zh-hk.js": 230,
	"./zh-tw": 231,
	"./zh-tw.js": 231
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
webpackContext.id = 512;


/***/ }),

/***/ 521:
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
webpackContext.id = 521;


/***/ }),

/***/ 535:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 536:
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ 537:
/***/ (function(module, exports) {

module.exports = "<div class=\"well\">\n<label>Search by Username: </label>\n  <input [(ngModel)]=\"asyncSelectedUser\"\n         [typeahead]=\"userdataSource\"\n         (typeaheadLoading)=\"changeTypeaheadLoading($event)\"\n         (typeaheadNoResultsUser)=\"changeTypeaheadNoResultsUser($event)\"\n         (typeaheadOnSelect)=\"typeaheadOnSelect($event)\"\n         typeaheadOptionsLimit=\"20\"\n         typeaheadOptionField=\"username\"\n         placeholder=\"Enter Username...\"\n         class=\"form-control\">\n  <div *ngIf=\"typeaheadLoading===true\">\n    <i class=\"glyphicon glyphicon-refresh ng-hide\"></i>\n  </div>\n  <div *ngIf=\"typeaheadNoResults===true\">\n    <i class=\"glyphicon glyphicon-remove\"></i> No Results Found\n  </div>\n\n  <hr>\n\n<label>Search by Email: </label>\n  <input [(ngModel)]=\"asyncSelectedEmail\"\n         [typeahead]=\"emaildataSource\"\n         (typeaheadLoading)=\"changeTypeaheadLoading($event)\"\n         (typeaheadNoResultsEmail)=\"changeTypeaheadNoResultsEmail($event)\"\n         (typeaheadOnSelect)=\"typeaheadOnSelect($event)\"\n         typeaheadOptionsLimit=\"20\"\n         typeaheadOptionField=\"email\"\n         placeholder=\"Enter Email...\"\n         class=\"form-control\">\n  <div *ngIf=\"typeaheadLoading===true\">\n    <i class=\"glyphicon glyphicon-refresh ng-hide\"></i>\n  </div>\n  <div *ngIf=\"typeaheadNoResults===true\">\n    <i class=\"glyphicon glyphicon-remove\"></i> No Results Found\n  </div>\n</div>\n\n<!--<button type=\"button\" class=\"btn btn-primary\" (click)=\"showModal()\">Render auto-shown modal</button>-->\n<div *ngIf=\"isModalShown\" [config]=\"{ show: true }\" (onHidden)=\"onHidden()\" bsModal #autoShownModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">User Details</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>Name: {{userSelect.name }}</p>\n        <p>Username: {{userSelect.username}} </p>\n        <p>Email: {{userSelect.email}}</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default pull-right\" (click)=\"addFriend()\">Add Friend</button>\n        <button type=\"button\" class=\"btn btn-default pull-right\" (click)=\"viewProfile()\">View Profile</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 538:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Connect with Friends!</h2>\n\n<div>\n  <tabset>\n    <tab heading=\"Add Friends\"><app-add-friend></app-add-friend></tab>\n    <tab heading=\"View Pending Requests\"><app-pendingfriend></app-pendingfriend></tab>\n  </tabset>\n</div>\n\n<hr>\n\n<h4>Friends</h4>\n<div class=\"list-group\">\n  <span class=\"list-group-item\" *ngIf=\"friendArray.length == 0\">You have no friends. Send a friend request or two!</span>\n  <span class=\"list-group-item\" *ngFor=\"let friend of friendArray\">{{friend.name}} -- {{friend.username}}</span>\n</div>\n"

/***/ }),

/***/ 539:
/***/ (function(module, exports) {

module.exports = "<div class=\"well\">\n  <h4>Submitted Requests</h4>\n    \n    <div class=\"list-group\">\n      <span class=\"list-group-item\" *ngIf=\"subRequests.length == 0\">You have no unanswered friend requests!</span>\n      <span class=\"list-group-item\" *ngFor=\"let sent of subRequests\">Name: {{ sent.friendUser.name }} -- Username: {{ sent.friendUser.username }} -- Date: {{ sent.timestamp }}</span>\n    </div>\n  <h4>Received Requests</h4>\n    <div class=\"list-group\">\n      <span class=\"list-group-item\" *ngIf=\"recvRequests.length == 0\">You have no pending friend requests!</span>\n      <span class=\"list-group-item\" *ngFor=\"let recv of recvRequests\">Name: {{ recv.sendUser.name }} -- Username: {{ recv.sendUser.username }} -- Date: {{ recv.timestamp }}\n        <button (click)=\"rejectRequest(recv)\" class=\"btn btn-xs pull-right\"><span class=\"glyphicon glyphicon-remove\"></span></button>\n        <button (click)=\"acceptRequest(recv)\" class=\"btn btn-xs pull-right\" style=\"margin-right: 5px\"><span class=\"glyphicon glyphicon-ok\"></span></button>\n      </span>\n    </div>\n</div>"

/***/ }),

/***/ 540:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n\t<h1>Bible Accountability App</h1>\n\t<p class=\"lead\">Welcome to the shiny new Bible Accountability app!</p>\n\t<div> \n\t\t<a class=\"btn btn-primary\" [routerLink]=\"['/login']\">Login</a>\n\t\t<a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a>\n\t</div>\n</div>\n\n<h1>Purpose Statement</h1>\n<div class=\"well\">\n\t<p>This web-app is intended to help accountability partners keep up with each others reading log.<br>\n\tThis website is currently under active development. Please contact the author at <b>gabriellelc95@gmail.com</b> with feature requests.</p>\n</div>\n\n<h1>Upcoming Features</h1>\n<div class=\"well\">\n\t<ul>\n\t\t<li>Create Contact Page for Bug Reports / Feature Requests</li>\n\t\t<li>Write notes about a day's reading (or just a particular passage)</li>\n\t\t<li>Ability to have separate lists of reading/notes and only share specific content with a friend</li>\n\t\t<li>Read the Bible directly from the site</li>\n\t\t<li>Add a custom Bible reading plan to follow</li>\n\t\t<li>Link reading lists to a plan and share the plan with a specific friend</li>\n\t\t</ul>\n\t\t<p>Are there any other features you would like to have? Or is there a feature on the list that you would like more than another feature? Go to the contact page and let me know!</p>\n</div>"

/***/ }),

/***/ 541:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\"> <!--navbar-inverse bg-inverse\">-->\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" (click)=\"isCollapsed = !isCollapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Bible Accountability</a>\n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse\" [collapse]=\"isCollapsed\">\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/']\">Home</a></li>\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/contact']\">Contact Us</a></li>\n      </ul>\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/profile']\">Profile</a></li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/friend']\">Friends</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/register']\">Register</a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n      </ul>\n    </div> \n  </div>\n</nav>\n\n<!--<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n\n    <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" (click)=\"isCollapsed = !isCollapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n        </button>\n        <!--<a class=\"navbar-brand\" href=\"#\">\n            <img src=\"/logo.png\" />\n        </a>-\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\" [collapse]=\"isCollapsed\">\n        <ul class=\"nav navbar-nav\">\n            <li router-active>\n                <a [routerLink]=\" ['Index'] \">Summary<span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li router-active>\n                <a [routerLink]=\" ['Portfolio'] \">Portfolio<span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li router-active>\n                <a [routerLink]=\" ['About'] \">About<span class=\"sr-only\">(current)</span></a>\n            </li>\n        </ul>\n        <form class=\"navbar-form navbar-left\" role=\"search\">\n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n        </form>\n        <ul class=\"nav navbar-nav navbar-right\">\n            <li dropdown keyboardNav=\"true\">\n                <a href class=\"dropdown-toggle\" role=\"button\" aria-expanded=\"false\" dropdownToggle>\n                    <span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span>\n                    Andrew Duncan \n                    <span class=\"caret\"></span>\n                </a>\n                <ul class=\"dropdown-menu\" role=\"menu\">\n                    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Account Settings</a></li>\n                    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\n                    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n                    <li class=\"divider dropdown-divider\"></li>\n                    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Logout</a></li>\n                </ul>\n            </li>\n\n        </ul>\n    </div>\n</div>-->\n"

/***/ }),

/***/ 542:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Dashboard</h2>\n<app-reading></app-reading>\n<app-log></app-log>"

/***/ }),

/***/ 543:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n"

/***/ }),

/***/ 544:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n</div>"

/***/ }),

/***/ 545:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ 546:
/***/ (function(module, exports) {

module.exports = "<h3>\n  Reading History\n</h3>\n\n<div class=\"list-group\">\n  <span class=\"list-group-item\" *ngFor=\"let item of log\">\n    <button class=\"btn btn-link\"(click)=\"editEntry(item)\">Date: {{item.date.prettydate}} Text: {{item.book}} {{item.chapter}} </button>\n    <button class=\"btn btn-sm pull-right\" (click)=\"removeEntry(item)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\n  </span>\n</div>\n"

/***/ }),

/***/ 547:
/***/ (function(module, exports) {

module.exports = "<div class=\"well\">\n  <label style='padding-right: 10px'>Enter Your Reading!</label>\n  <ng2-datepicker [options]=\"options\" [(ngModel)]=\"date\"></ng2-datepicker>\n  <div class=\"btn-group\" dropdown>\n    <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">\n      {{selTest}} <span class=\"caret\"></span>\n    </button>\n    <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n      <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"selectTest('Old Testament')\">Old Testament</a></li>\n      <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"selectTest('New Testament')\">New Testament</a></li>\n    </ul>\n  </div>\n  <div class=\"btn-group\" dropdown [isDisabled]=\"selTest == 'Select Testament'\">\n    <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">\n      {{selBook}} <span class=\"caret\"></span>\n    </button>\n    <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n      <li role=\"menuitem\" *ngIf=\"selTest == 'Old Testament'\"><a class=\"dropdown-item\" *ngFor=\"let book of oldTestament\" (click)=\"selectBook(book.name)\">{{book.name}}</a></li>\n      <li role=\"menuitem\" *ngIf=\"selTest == 'New Testament'\"><a class=\"dropdown-item\" *ngFor=\"let book of newTestament\" (click)=\"selectBook(book.name)\">{{book.name}}</a></li>\n    </ul>\n  </div>\n  <div class=\"btn-group\" dropdown [isDisabled]=\"selBook == 'Select Book'\">\n    <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">\n      {{selChapter}} <span class=\"caret\"></span>\n    </button>\n    <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n      <li role=\"menuitem\"><a class=\"dropdown-item\" *ngFor=\"let chapter of numChapters\" (click)=\"selectChapter(chapter)\">{{chapter}}</a></li>\n    </ul>\n  </div>\n\n  <button class=\"btn btn-primary\" [disabled]=\"selChapter == 'Select Chapter' || date == undefined\" (click)=\"saveEntry()\">Log Reading</button>\n</div>\n\n<!--<li class=\"divider dropdown-divider\"></li>-->"

/***/ }),

/***/ 588:
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

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(418);


/***/ })

},[591]);
//# sourceMappingURL=main.bundle.js.map