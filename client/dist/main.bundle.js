webpackJsonp([1,4],{

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderService = (function () {
    function OrderService(http) {
        this.http = http;
        this.host = 'http://localhost:3000/';
        this.route = 'dashboard/orders/';
        this.userRoute = 'dashboard/orders/user/';
        console.log('Order service initialized...');
    }
    OrderService.prototype.get = function () {
        return this.http.get(this.host + this.route)
            .map(function (res) { return res.json(); });
    };
    OrderService.prototype.getById = function (id) {
        return this.http.get(this.host + this.route + id)
            .map(function (res) { return res.json(); });
    };
    OrderService.prototype.getUserOrders = function (id) {
        return this.http.get(this.host + this.route + id)
            .map(function (res) { return res.json(); });
    };
    OrderService.prototype.add = function (newData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.host + this.route, JSON.stringify(newData), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    OrderService.prototype.delete = function (newData) {
        return this.http.delete(this.host + this.route + newData)
            .map(function (res) { return res.json(); });
    };
    OrderService.prototype.update = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.host + this.route + data._id, JSON.stringify(data), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    OrderService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], OrderService);
    return OrderService;
    var _a;
}());
//# sourceMappingURL=order.service.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServicesService = (function () {
    function ServicesService(http) {
        this.http = http;
        this.host = 'http://localhost:3000/';
        this.route = 'dashboard/services/';
        console.log('Services service initialized...');
    }
    ServicesService.prototype.get = function () {
        return this.http.get(this.host + this.route)
            .map(function (res) { return res.json(); });
    };
    ServicesService.prototype.add = function (newData) {
        // console.log(newData);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.host + this.route, JSON.stringify(newData), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ServicesService.prototype.delete = function (newData) {
        return this.http.delete(this.host + this.route + newData)
            .map(function (res) { return res.json(); });
    };
    ServicesService.prototype.update = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.host + this.route + data._id, JSON.stringify(data), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ServicesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], ServicesService);
    return ServicesService;
    var _a;
}());
//# sourceMappingURL=services.service.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CateringService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CateringService = (function () {
    function CateringService(http) {
        this.http = http;
        this.host = 'http://localhost:3000/';
        this.route = 'dashboard/catering/';
        console.log('Catering service initialized...');
    }
    CateringService.prototype.get = function () {
        return this.http.get(this.host + this.route)
            .map(function (res) { return res.json(); });
    };
    CateringService.prototype.add = function (newData) {
        // console.log(newData);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.host + this.route, JSON.stringify(newData), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CateringService.prototype.delete = function (newData) {
        return this.http.delete(this.host + this.route + newData)
            .map(function (res) { return res.json(); });
    };
    CateringService.prototype.update = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.host + this.route + data._id, JSON.stringify(data), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CateringService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], CateringService);
    return CateringService;
    var _a;
}());
//# sourceMappingURL=catering.service.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventTypeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventTypeService = (function () {
    function EventTypeService(http) {
        this.http = http;
        this.host = 'http://localhost:3000/';
        this.route = 'dashboard/event_type/';
        console.log('Event Type service initialized...');
    }
    EventTypeService.prototype.get = function () {
        return this.http.get(this.host + this.route)
            .map(function (res) {
            return res.json();
        });
    };
    EventTypeService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], EventTypeService);
    return EventTypeService;
    var _a;
}());
//# sourceMappingURL=event_type.service.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VenueService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VenueService = (function () {
    function VenueService(http) {
        this.http = http;
        this.host = 'http://localhost:3000/';
        this.route = 'dashboard/venues/';
        console.log('Venue service initialized...');
    }
    VenueService.prototype.get = function () {
        return this.http.get(this.host + this.route)
            .map(function (res) { return res.json(); });
    };
    VenueService.prototype.add = function (newData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.host + this.route, JSON.stringify(newData), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    VenueService.prototype.delete = function (newData) {
        return this.http.delete(this.host + this.route + newData)
            .map(function (res) { return res.json(); });
    };
    VenueService.prototype.update = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.host + this.route + data._id, JSON.stringify(data), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    VenueService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], VenueService);
    return VenueService;
    var _a;
}());
//# sourceMappingURL=venue.service.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// var config = require('./../data');
var UserService = (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
        this.logged = false;
        this.loggedUser = null;
        this.host = 'http://localhost:3000/';
        this.route = 'dashboard/users/';
        console.log('User service initialized...');
    }
    UserService.prototype.get = function (id) {
        return this.http.get(this.host + this.route + id)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.update = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.host + this.route + data._id, JSON.stringify(data), { headers: headers })
            .map(function (res) {
            // console.log(data);
            // localStorage['currentUser'] = JSON.stringify(data);
            __WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__["Cookie"].set('currentUser', JSON.stringify(data));
            // this.logout();
            return res.json();
        });
    };
    UserService.prototype.login = function (user) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.host + 'dashboard/users/login/', JSON.stringify(user), { headers: headers })
            .map(function (data) {
            _this.logged = true;
            _this.loggedUser = data;
            // console.log (data);
            // localStorage.setItem('currentUser', JSON.stringify(data));
            __WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__["Cookie"].set('currentUser', JSON.stringify(data));
            return data.json();
        });
    };
    UserService.prototype.logout = function () {
        this.logged = false;
        this.loggedUser = null;
        // localStorage.removeItem('currentUser');
        __WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__["Cookie"].delete('currentUser');
        this.router.navigate(['/login']);
    };
    UserService.prototype.signup = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.host + 'dashboard/users/signup/', JSON.stringify(user), { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.isLoggedIn = function () { return this.logged; };
    UserService.prototype.getLoggedUser = function () {
        // let u = localStorage.getItem('currentUser');
        // let p = JSON.parse(JSON.parse(u)._body);
        if (__WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__["Cookie"].get("currentUser")) {
            var q = __WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__["Cookie"].get("currentUser");
            var r = (JSON.parse(q));
            // console.log(p);
            // console.log(r);
            // this.loggedUser = r;
            return r;
        }
        return false;
    };
    UserService.prototype.updateUser = function () {
        //
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], UserService);
    return UserService;
    var _a, _b;
}());
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedbackService = (function () {
    function FeedbackService(http) {
        this.http = http;
        this.host = 'http://localhost:3000/';
        this.route = 'dashboard/feedback/';
        console.log('Feedback service initialized...');
    }
    FeedbackService.prototype.get = function () {
        return this.http.get(this.host + this.route)
            .map(function (res) { return res.json(); });
    };
    FeedbackService.prototype.add = function (newData) {
        // console.log(newData);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.host + this.route, JSON.stringify(newData), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    FeedbackService.prototype.delete = function (newData) {
        return this.http.delete(this.host + this.route + newData)
            .map(function (res) { return res.json(); });
    };
    FeedbackService.prototype.update = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.host + this.route + data._id, JSON.stringify(data), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    FeedbackService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], FeedbackService);
    return FeedbackService;
    var _a;
}());
//# sourceMappingURL=feedback.service.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotosService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhotosService = (function () {
    function PhotosService(http) {
        this.http = http;
        this.host = 'http://localhost:3000/';
        this.route = 'dashboard/photos/';
        console.log('Photos service initialized...');
    }
    PhotosService.prototype.get = function () {
        return this.http.get(this.host + this.route)
            .map(function (res) { return res.json(); });
    };
    PhotosService.prototype.add = function () {
        // console.log(newData);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.host + this.route, {}, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PhotosService.prototype.delete = function () {
        return this.http.delete(this.host + this.route)
            .map(function (res) { return res.json(); });
    };
    PhotosService.prototype.update = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.host + this.route + data._id, JSON.stringify(data), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PhotosService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], PhotosService);
    return PhotosService;
    var _a;
}());
//# sourceMappingURL=photos.service.js.map

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 343;


/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(486);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(544)
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authentication_authGuard__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_services_user_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_services_order_service__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_services_catering_service__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_services_event_type_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_services_services_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_services_venue_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_services_photos_service__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_services_feedback_service__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_home_component__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_nav_nav_component__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_main_main_component__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_about_about_component__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__home_contact_contact_component__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__home_works_works_component__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__login_login_component__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__signup_signup_component__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__testcomp_testcomp_component__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__dashboard_dashboard_component__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__dashboard_components_navbar_navbar_component__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__dashboard_components_sidebar_sidebar_component__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__dashboard_components_main_main_component__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__dashboard_components_dummy_main_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__dashboard_components_user_user_component__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__dashboard_components_calander_calander_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__dashboard_components_order_order_component__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__dashboard_components_catering_catering_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__dashboard_components_services_services_component__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__dashboard_components_venues_venues_component__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__dashboard_components_photos_photos_component__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__dashboard_components_feedback_feedback_component__ = __webpack_require__(467);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





































// import { Cookie } from 'ng2-cookies/ng2-cookies';
var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_15__home_home_component__["a" /* HomeComponent */],
        // redirectTo: "/dashboard", pathMatch: 'full'
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_17__home_main_main_component__["a" /* MainComponent */] },
            { path: 'about', component: __WEBPACK_IMPORTED_MODULE_18__home_about_about_component__["a" /* AboutComponent */] },
            { path: 'works', component: __WEBPACK_IMPORTED_MODULE_20__home_works_works_component__["a" /* WorksComponent */] },
            { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_19__home_contact_contact_component__["a" /* ContactComponent */] }
        ]
    },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_21__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_22__signup_signup_component__["a" /* SignupComponent */] },
    {
        path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_24__dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__authentication_authGuard__["a" /* AuthGuard */]],
        children: [
            {
                path: "",
                canActivateChild: [__WEBPACK_IMPORTED_MODULE_5__authentication_authGuard__["a" /* AuthGuard */]],
                children: [
                    { path: "", component: __WEBPACK_IMPORTED_MODULE_27__dashboard_components_main_main_component__["a" /* MainDashComponent */] },
                    { path: "user", component: __WEBPACK_IMPORTED_MODULE_29__dashboard_components_user_user_component__["a" /* UserComponent */] },
                    { path: "calander", component: __WEBPACK_IMPORTED_MODULE_30__dashboard_components_calander_calander_component__["a" /* CalanderDashComponent */] },
                    { path: "order", component: __WEBPACK_IMPORTED_MODULE_31__dashboard_components_order_order_component__["a" /* OrderComponent */] },
                    { path: "catering", component: __WEBPACK_IMPORTED_MODULE_32__dashboard_components_catering_catering_component__["a" /* CateringComponent */] },
                    { path: "services", component: __WEBPACK_IMPORTED_MODULE_33__dashboard_components_services_services_component__["a" /* ServicesComponent */] },
                    { path: "venues", component: __WEBPACK_IMPORTED_MODULE_34__dashboard_components_venues_venues_component__["a" /* VenueComponent */] },
                    { path: "photos", component: __WEBPACK_IMPORTED_MODULE_35__dashboard_components_photos_photos_component__["a" /* PhotosComponent */] },
                    { path: "feedback", component: __WEBPACK_IMPORTED_MODULE_36__dashboard_components_feedback_feedback_component__["a" /* FeedbackComponent */] },
                    { path: "dummy", component: __WEBPACK_IMPORTED_MODULE_28__dashboard_components_dummy_main_component__["a" /* DummyComponent */] }
                ]
            }
        ]
    },
    { path: '**', redirectTo: "/", pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
                // SiteComponent,
                __WEBPACK_IMPORTED_MODULE_15__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__home_nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_17__home_main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_18__home_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_20__home_works_works_component__["a" /* WorksComponent */],
                __WEBPACK_IMPORTED_MODULE_19__home_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_21__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_22__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_24__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_29__dashboard_components_user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_25__dashboard_components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_26__dashboard_components_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_27__dashboard_components_main_main_component__["a" /* MainDashComponent */],
                __WEBPACK_IMPORTED_MODULE_28__dashboard_components_dummy_main_component__["a" /* DummyComponent */],
                __WEBPACK_IMPORTED_MODULE_30__dashboard_components_calander_calander_component__["a" /* CalanderDashComponent */],
                __WEBPACK_IMPORTED_MODULE_31__dashboard_components_order_order_component__["a" /* OrderComponent */],
                __WEBPACK_IMPORTED_MODULE_32__dashboard_components_catering_catering_component__["a" /* CateringComponent */],
                __WEBPACK_IMPORTED_MODULE_33__dashboard_components_services_services_component__["a" /* ServicesComponent */],
                __WEBPACK_IMPORTED_MODULE_34__dashboard_components_venues_venues_component__["a" /* VenueComponent */],
                __WEBPACK_IMPORTED_MODULE_35__dashboard_components_photos_photos_component__["a" /* PhotosComponent */],
                __WEBPACK_IMPORTED_MODULE_36__dashboard_components_feedback_feedback_component__["a" /* FeedbackComponent */],
                __WEBPACK_IMPORTED_MODULE_23__testcomp_testcomp_component__["a" /* TestcompComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__authentication_authGuard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_6__app_services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_7__app_services_order_service__["a" /* OrderService */],
                __WEBPACK_IMPORTED_MODULE_8__app_services_catering_service__["a" /* CateringService */],
                __WEBPACK_IMPORTED_MODULE_9__app_services_event_type_service__["a" /* EventTypeService */],
                __WEBPACK_IMPORTED_MODULE_11__app_services_venue_service__["a" /* VenueService */],
                __WEBPACK_IMPORTED_MODULE_10__app_services_services_service__["a" /* ServicesService */],
                __WEBPACK_IMPORTED_MODULE_12__app_services_photos_service__["a" /* PhotosService */],
                __WEBPACK_IMPORTED_MODULE_13__app_services_feedback_service__["a" /* FeedbackService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__ = __webpack_require__(26);
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
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authService.getLoggedUser()) {
            // logged in so return true
            // console.log('got in auth');
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=authGuard.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalanderDashComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalanderDashComponent = (function () {
    function CalanderDashComponent() {
    }
    CalanderDashComponent.prototype.ngOnInit = function () {
        // $.getScript('/assets/calanderjs.js',function(){
        // $.getScript('http://arshaw.com/js/fullcalendar-1.6.4/fullcalendar/fullcalendar.min.js',function(){
        // console.log('http://arshaw.com/js/fullcalendar-1.6.4/fullcalendar/fullcalendar.min.js');
        // var date = new Date();
        // var d = date.getDate();
        // var m = date.getMonth();
        // var y = date.getFullYear();
        // $('#calendar').fullCalendar({
        //   header: {
        //     left: 'prev,next today',
        //     center: 'title',
        //     right: 'month,agendaWeek,agendaDay'
        //   },
        //   editable: true,
        //   events: [
        //     {
        //       title: 'All Day Event',
        //       start: new Date(y, m, 1)
        //     },
        //     {
        //       title: 'Long Event',
        //       start: new Date(y, m, d-5),
        //       end: new Date(y, m, d-2)
        //     },
        //     {
        //       id: 999,
        //       title: 'Repeating Event',
        //       start: new Date(y, m, d-3, 16, 0),
        //       allDay: false
        //     },
        //     {
        //       id: 999,
        //       title: 'Repeating Event',
        //       start: new Date(y, m, d+4, 16, 0),
        //       allDay: false
        //     },
        //     {
        //       title: 'Meeting',
        //       start: new Date(y, m, d, 10, 30),
        //       allDay: false
        //     },
        //     {
        //       title: 'Lunch',
        //       start: new Date(y, m, d, 12, 0),
        //       end: new Date(y, m, d, 14, 0),
        //       allDay: false
        //     },
        //     {
        //       title: 'Birthday Party',
        //       start: new Date(y, m, d+1, 19, 0),
        //       end: new Date(y, m, d+1, 22, 30),
        //       allDay: false
        //     },
        //     {
        //       title: 'Click for Google',
        //       start: new Date(y, m, 28),
        //       end: new Date(y, m, 29),
        //       url: 'http://google.com/'
        //     }
        //   ]
        // });
        // })
    };
    CalanderDashComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'calander-dashboard',
            template: __webpack_require__(545),
            styles: [__webpack_require__(540)]
        }), 
        __metadata('design:paramtypes', [])
    ], CalanderDashComponent);
    return CalanderDashComponent;
}());
//# sourceMappingURL=calander.component.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_services_catering_service__ = __webpack_require__(198);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CateringComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CateringComponent = (function () {
    function CateringComponent(factory) {
        this.factory = factory;
        this.isEditingMode = false;
        this.formItem = { _id: undefined, name: '', description: '' };
    }
    CateringComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.factory.get().subscribe(function (data) { return _this.dataList = data; });
    };
    CateringComponent.prototype.addThis = function () {
        var _this = this;
        if (this.formItem._id === undefined) {
            this.factory.add(this.formItem).subscribe(function (data) {
                _this.dataList.push(data);
                _this.clearThis();
            });
        }
        else {
            this.factory.update(this.formItem).subscribe(function (data) {
                var id = _this.formItem._id;
                for (var i = 0; i < _this.dataList.length; i++) {
                    if (_this.dataList[i]._id == id) {
                        _this.dataList[i] = _this.formItem;
                        _this.clearThis();
                        return;
                    }
                }
                ;
            });
        }
    };
    CateringComponent.prototype.deleteThis = function (id) {
        var _this = this;
        this.factory.delete(id).subscribe(function (data) {
            for (var i = 0; i < _this.dataList.length; i++) {
                if (_this.dataList[i]._id == id) {
                    _this.dataList.splice(i, 1);
                    return;
                }
            }
            ;
        });
    };
    CateringComponent.prototype.updateThis = function (data) {
        this.formItem._id = data._id;
        this.formItem.name = data.name;
        this.formItem.description = data.description;
    };
    CateringComponent.prototype.clearThis = function () {
        this.formItem = { _id: undefined, name: '', description: '' };
    };
    CateringComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'catering-dashboard',
            template: __webpack_require__(546)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_services_catering_service__["a" /* CateringService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_services_catering_service__["a" /* CateringService */]) === 'function' && _a) || Object])
    ], CateringComponent);
    return CateringComponent;
    var _a;
}());
//# sourceMappingURL=catering.component.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DummyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DummyComponent = (function () {
    function DummyComponent() {
    }
    DummyComponent.prototype.ngOnInit = function () {
    };
    DummyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'dummy-dashboard',
            template: __webpack_require__(547)
        }), 
        __metadata('design:paramtypes', [])
    ], DummyComponent);
    return DummyComponent;
}());
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_services_feedback_service__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_services_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_user_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeedbackComponent = (function () {
    function FeedbackComponent(factory, services, user) {
        var _this = this;
        this.factory = factory;
        this.services = services;
        this.user = user;
        this.isEditingMode = false;
        this.formItem = { _id: undefined, user: '', feedback: '', service: 'service 0' };
        this.services.get().subscribe(function (data) { return _this.serviceList = data; });
    }
    FeedbackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.factory.get().subscribe(function (data) {
            _this.dataList = data;
        });
        this.currentUser = (this.user.getLoggedUser());
        this.user.get(this.currentUser._id).subscribe(function (data) { _this.currentUser = data; });
    };
    FeedbackComponent.prototype.addThis = function () {
        var _this = this;
        if (this.formItem._id === undefined) {
            this.formItem.user = this.currentUser.name;
            this.factory.add(this.formItem).subscribe(function (data) {
                _this.dataList.push(data);
                _this.clearThis();
            });
        }
        else {
            this.factory.update(this.formItem).subscribe(function (data) {
                var id = _this.formItem._id;
                for (var i = 0; i < _this.dataList.length; i++) {
                    if (_this.dataList[i]._id == id) {
                        _this.dataList[i] = _this.formItem;
                        _this.clearThis();
                        return;
                    }
                }
                ;
            });
        }
    };
    FeedbackComponent.prototype.deleteThis = function (id) {
        var _this = this;
        this.factory.delete(id).subscribe(function (data) {
            for (var i = 0; i < _this.dataList.length; i++) {
                if (_this.dataList[i]._id == id) {
                    _this.dataList.splice(i, 1);
                    return;
                }
            }
            ;
        });
    };
    FeedbackComponent.prototype.updateThis = function (data) {
        this.formItem._id = data._id;
        this.formItem.user = data.user;
        this.formItem.feedback = data.feedback;
        this.formItem.service = data.service;
    };
    FeedbackComponent.prototype.clearThis = function () {
        this.formItem = { _id: undefined, user: '', feedback: '', service: 'service 0' };
    };
    FeedbackComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'feedback-dashboard',
            template: __webpack_require__(548)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_services_feedback_service__["a" /* FeedbackService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_services_feedback_service__["a" /* FeedbackService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_services_services_service__["a" /* ServicesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_services_services_service__["a" /* ServicesService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__app_services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__app_services_user_service__["a" /* UserService */]) === 'function' && _c) || Object])
    ], FeedbackComponent);
    return FeedbackComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=feedback.component.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_services_order_service__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainDashComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainDashComponent = (function () {
    function MainDashComponent(orderService, user, router) {
        var _this = this;
        this.orderService = orderService;
        this.user = user;
        this.router = router;
        orderService.get().subscribe(function (data) { _this.orders = data; });
        // orderService.getUserOrders(this.user.getLoggedUser()._id).subscribe(data => { this.orders = data });
    }
    MainDashComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = (this.user.getLoggedUser());
        this.user.get(this.currentUser._id).subscribe(function (data) { _this.currentUser = data; });
    };
    MainDashComponent.prototype.updateThis = function (id) {
        // this.orderService.update(o).subscribe(data => console.log(data));
        // console.log(id);
        __WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__["Cookie"].set('orderData', id, 1 / 24 / 60 / 60);
        this.router.navigate(['/dashboard/order']);
    };
    MainDashComponent.prototype.deleteThis = function (id) {
        var _this = this;
        this.orderService.delete(id).subscribe(function (data) {
            for (var i = 0; i < _this.orders.length; i++) {
                if (_this.orders[i]._id == id) {
                    _this.orders.splice(i, 1);
                    return;
                }
            }
            ;
        });
    };
    MainDashComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'main-dashboard',
            template: __webpack_require__(549)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_services_order_service__["a" /* OrderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_services_order_service__["a" /* OrderService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__["a" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], MainDashComponent);
    return MainDashComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__ = __webpack_require__(26);
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
    function NavbarComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cuser = this.userService.getLoggedUser();
        this.userService.get(this.cuser._id).subscribe(function (data) { _this.cuser = data; });
    };
    NavbarComponent.prototype.logout = function () {
        this.userService.logout();
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'navbar-dashboard',
            template: __webpack_require__(550)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__["a" /* UserService */]) === 'function' && _b) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b;
}());
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_services_order_service__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_catering_service__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_event_type_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_services_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_venue_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_services_user_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_cookies_ng2_cookies__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_cookies_ng2_cookies__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var OrderComponent = (function () {
    function OrderComponent(orderService, cateringService, eventTypeService, servicesService, venueService, userService, router) {
        var _this = this;
        this.orderService = orderService;
        this.cateringService = cateringService;
        this.eventTypeService = eventTypeService;
        this.servicesService = servicesService;
        this.venueService = venueService;
        this.userService = userService;
        this.router = router;
        this.newOrder = {
            _id: undefined,
            // event_date: "2017-04-22",
            // event_date: this.prettyDate,
            event_date: '',
            event_type: "Marriage",
            venue: "q",
            catering: "catering 1",
            service: "service 0",
            user: this.userService.getLoggedUser()
        };
        cateringService.get().subscribe(function (data) { _this.caterings = data; });
        eventTypeService.get().subscribe(function (data) { _this.eventTypes = data; });
        servicesService.get().subscribe(function (data) { _this.services = data; });
        venueService.get().subscribe(function (data) { _this.venues = data; });
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_8_ng2_cookies_ng2_cookies__["Cookie"].get('orderData')) {
            this.orderService.getById(__WEBPACK_IMPORTED_MODULE_8_ng2_cookies_ng2_cookies__["Cookie"].get('orderData')).subscribe(function (data) {
                _this.coo = "*";
                // console.log(data[0]);
                _this.newOrder = data[0];
                // Cookie.delete('orderData');
            });
        }
    };
    OrderComponent.prototype.onSubmit = function (e) {
        // console.log(e.value);
        // console.log(this.prettyDate);
        // this.newOrder.event_date = Date();
    };
    OrderComponent.prototype.addThis = function () {
        var _this = this;
        if (this.newOrder._id === undefined) {
            this.orderService.add(this.newOrder).subscribe(function (data) {
                // console.log(data);
                _this.router.navigate(['/dashboard']);
                // this.clearThis();
            });
        }
        else {
            this.orderService.update(this.newOrder).subscribe(function (data) {
                // console.log(data);
                _this.router.navigate(['/dashboard']);
                // var id = this.newOrder._id;
                // for (var i = 0; i < this.dataList.length; i++) {
                // 	if (this.dataList[i]._id == id) {
                // 		this.dataList[i] = this.newOrder;
                // 		this.clearThis();
                // 		return;
                // 	}
                // };
            });
        }
    };
    OrderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'order-dashboard',
            template: __webpack_require__(551)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_services_order_service__["a" /* OrderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_services_order_service__["a" /* OrderService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_services_catering_service__["a" /* CateringService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_services_catering_service__["a" /* CateringService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__app_services_event_type_service__["a" /* EventTypeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__app_services_event_type_service__["a" /* EventTypeService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__app_services_services_service__["a" /* ServicesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__app_services_services_service__["a" /* ServicesService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__app_services_venue_service__["a" /* VenueService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__app_services_venue_service__["a" /* VenueService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__app_services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__app_services_user_service__["a" /* UserService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */]) === 'function' && _g) || Object])
    ], OrderComponent);
    return OrderComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=order.component.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_services_photos_service__ = __webpack_require__(313);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhotosComponent = (function () {
    function PhotosComponent(photosService) {
        var _this = this;
        this.photosService = photosService;
        this.photoStyle = ["", "timeline-inverted"];
        this.photosService.get().subscribe(function (data) {
            var photoList = data;
            for (var i in photoList) {
                photoList[i].style = _this.photoStyle[Math.floor(Math.random() * _this.photoStyle.length)];
            }
            _this.photoList = photoList;
        });
    }
    PhotosComponent.prototype.ngOnInit = function () {
    };
    PhotosComponent.prototype.addOne = function () {
        var _this = this;
        this.photosService.add().subscribe(function (data) { return _this.photoList.push(data); });
    };
    PhotosComponent.prototype.delOne = function () {
        var _this = this;
        this.photosService.delete().subscribe(function (data) {
            _this.photosService.get().subscribe(function (data) { return _this.photoList = data; });
        });
    };
    PhotosComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'photos-dashboard',
            template: __webpack_require__(552)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_services_photos_service__["a" /* PhotosService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_services_photos_service__["a" /* PhotosService */]) === 'function' && _a) || Object])
    ], PhotosComponent);
    return PhotosComponent;
    var _a;
}());
//# sourceMappingURL=photos.component.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_services_services_service__ = __webpack_require__(135);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServicesComponent = (function () {
    function ServicesComponent(factory) {
        this.factory = factory;
        this.isEditingMode = false;
        this.formItem = { _id: undefined, name: '', description: '' };
    }
    ServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.factory.get().subscribe(function (data) { return _this.dataList = data; });
    };
    ServicesComponent.prototype.addThis = function () {
        var _this = this;
        if (this.formItem._id === undefined) {
            this.factory.add(this.formItem).subscribe(function (data) {
                _this.dataList.push(data);
                _this.clearThis();
            });
        }
        else {
            this.factory.update(this.formItem).subscribe(function (data) {
                var id = _this.formItem._id;
                for (var i = 0; i < _this.dataList.length; i++) {
                    if (_this.dataList[i]._id == id) {
                        _this.dataList[i] = _this.formItem;
                        _this.clearThis();
                        return;
                    }
                }
                ;
            });
        }
    };
    ServicesComponent.prototype.deleteThis = function (id) {
        var _this = this;
        this.factory.delete(id).subscribe(function (data) {
            for (var i = 0; i < _this.dataList.length; i++) {
                if (_this.dataList[i]._id == id) {
                    _this.dataList.splice(i, 1);
                    return;
                }
            }
            ;
        });
    };
    ServicesComponent.prototype.updateThis = function (data) {
        this.formItem._id = data._id;
        this.formItem.name = data.name;
        this.formItem.description = data.description;
    };
    ServicesComponent.prototype.clearThis = function () {
        this.formItem = { _id: undefined, name: '', description: '' };
    };
    ServicesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'services-dashboard',
            template: __webpack_require__(553)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_services_services_service__["a" /* ServicesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_services_services_service__["a" /* ServicesService */]) === 'function' && _a) || Object])
    ], ServicesComponent);
    return ServicesComponent;
    var _a;
}());
//# sourceMappingURL=services.component.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_services_user_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = (function () {
    function SidebarComponent(user) {
        this.user = user;
        this.isAdmin = false;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var u = this.user.getLoggedUser().role;
        console.log(u);
        if (u == 'admin') {
            // console.log(u == 'admin');
            this.isAdmin = true;
        }
        else {
            this.isAdmin = false;
        }
        console.log(this.isAdmin);
    };
    SidebarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'sidebar-dashboard',
            template: __webpack_require__(554)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_services_user_service__["a" /* UserService */]) === 'function' && _a) || Object])
    ], SidebarComponent);
    return SidebarComponent;
    var _a;
}());
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_services_user_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = (function () {
    function UserComponent(factory) {
        this.factory = factory;
        this.isEditingMode = false;
        this.formItem = { _id: undefined, name: '', email: '', password: '', address: '', phone: '' };
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cuser = this.factory.getLoggedUser();
        this.factory.get(this.cuser._id).subscribe(function (data) { _this.cuser = data; });
    };
    UserComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.formItem);
        this.factory.update(this.formItem).subscribe(function (data) {
            _this.cuser = _this.formItem;
            _this.clearThis();
        });
    };
    UserComponent.prototype.updateThis = function (data) {
        this.formItem._id = this.cuser._id;
        this.formItem.name = this.cuser.name;
        this.formItem.email = this.cuser.email;
        this.formItem.password = this.cuser.password;
        this.formItem.address = this.cuser.address;
        this.formItem.phone = this.cuser.phone;
    };
    UserComponent.prototype.clearThis = function () {
        this.formItem = { _id: undefined, name: '', email: '', password: '', address: '', phone: '' };
    };
    UserComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'user-dashboard',
            template: __webpack_require__(555)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_services_user_service__["a" /* UserService */]) === 'function' && _a) || Object])
    ], UserComponent);
    return UserComponent;
    var _a;
}());
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_services_venue_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_event_type_service__ = __webpack_require__(199);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VenueComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VenueComponent = (function () {
    function VenueComponent(factory, ETS) {
        this.factory = factory;
        this.ETS = ETS;
        this.isEditingMode = false;
        this.formItem = { _id: undefined, name: '', location: '', event_type: '', description: '' };
    }
    VenueComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.factory.get().subscribe(function (data) { return _this.dataList = data; });
        this.ETS.get().subscribe(function (data) { _this.EventTypes = data; });
    };
    VenueComponent.prototype.addThis = function () {
        var _this = this;
        if (this.formItem._id === undefined) {
            this.factory.add(this.formItem).subscribe(function (data) {
                _this.dataList.push(data);
                _this.clearThis();
            });
        }
        else {
            this.factory.update(this.formItem).subscribe(function (data) {
                var id = _this.formItem._id;
                for (var i = 0; i < _this.dataList.length; i++) {
                    if (_this.dataList[i]._id == id) {
                        _this.dataList[i] = _this.formItem;
                        _this.clearThis();
                        return;
                    }
                }
                ;
            });
        }
    };
    VenueComponent.prototype.deleteThis = function (id) {
        var _this = this;
        this.factory.delete(id).subscribe(function (data) {
            for (var i = 0; i < _this.dataList.length; i++) {
                if (_this.dataList[i]._id == id) {
                    _this.dataList.splice(i, 1);
                    return;
                }
            }
        });
    };
    VenueComponent.prototype.updateThis = function (data) {
        this.formItem._id = data._id;
        this.formItem.name = data.name;
        this.formItem.description = data.description;
        this.formItem.location = data.location;
        this.formItem.event_type = data.event_type;
    };
    VenueComponent.prototype.clearThis = function () {
        this.formItem = { _id: undefined, name: '', location: '', event_type: '', description: '' };
    };
    VenueComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'venues-dashboard',
            template: __webpack_require__(556)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_services_venue_service__["a" /* VenueService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_services_venue_service__["a" /* VenueService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_services_event_type_service__["a" /* EventTypeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_services_event_type_service__["a" /* EventTypeService */]) === 'function' && _b) || Object])
    ], VenueComponent);
    return VenueComponent;
    var _a, _b;
}());
//# sourceMappingURL=venues.component.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
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
    function DashboardComponent(router) {
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__(557)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a;
}());
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation_route_animation__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__(558),
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__animation_route_animation__["a" /* routerTransition */])()],
            host: { '[@routerTransition]': 'slideToRight' }
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation_route_animation__ = __webpack_require__(87);
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
    ContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__(559),
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__animation_route_animation__["a" /* routerTransition */])()],
            host: { '[@routerTransition]': 'slideToRight' }
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation_route_animation__ = __webpack_require__(87);
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
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(560),
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__animation_route_animation__["a" /* routerTransition */])()],
            host: { '[@routerTransition]': 'slideToRight' }
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation_route_animation__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__(561),
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__animation_route_animation__["a" /* routerTransition */])()],
            host: { '[@routerTransition]': '' }
        }), 
        __metadata('design:paramtypes', [])
    ], MainComponent);
    return MainComponent;
}());
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__(562)
        }), 
        __metadata('design:paramtypes', [])
    ], NavComponent);
    return NavComponent;
}());
//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation_route_animation__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_order_service__ = __webpack_require__(134);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorksComponent = (function () {
    function WorksComponent(eventService) {
        this.eventService = eventService;
    }
    WorksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventService.get().subscribe(function (data) {
            _this.events = data;
            // console.log(this.events[0]) 
        });
    };
    WorksComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-works',
            template: __webpack_require__(563),
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__animation_route_animation__["a" /* routerTransition */])()],
            host: { '[@routerTransition]': 'slideToRight' }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_services_order_service__["a" /* OrderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_services_order_service__["a" /* OrderService */]) === 'function' && _a) || Object])
    ], WorksComponent);
    return WorksComponent;
    var _a;
}());
//# sourceMappingURL=works.component.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies__);
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
    // user;
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.localUser = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.userService.getLoggedUser()) {
            this.router.navigate(['dashboard']);
        }
    };
    LoginComponent.prototype.login = function (event) {
        var _this = this;
        event.preventDefault();
        // console.log(this.localUser);
        this.userService.login(this.localUser)
            .subscribe(function (user) {
            // console.log(user);
            __WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies__["Cookie"].set('currentUser', JSON.stringify(user));
            // this.user = user;
            _this.router.navigate(['dashboard']);
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'login',
            template: __webpack_require__(564)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__["a" /* UserService */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = (function () {
    function SignupComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.obj = {};
    }
    SignupComponent.prototype.ngOnInit = function () {
        if (this.userService.isLoggedIn() === true) {
            this.router.navigate(['dashboard']);
        }
    };
    SignupComponent.prototype.signup = function (event) {
        var _this = this;
        event.preventDefault();
        this.userService.signup(this.obj)
            .subscribe(function (user) {
            _this.successMsg = "Successfully Signed In";
            _this.obj = {};
            _this.router.navigate(['dashboard']);
        });
    };
    SignupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'signup',
            template: __webpack_require__(565)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__["a" /* UserService */]) === 'function' && _b) || Object])
    ], SignupComponent);
    return SignupComponent;
    var _a, _b;
}());
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestcompComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestcompComponent = (function () {
    function TestcompComponent() {
    }
    TestcompComponent.prototype.ngOnInit = function () {
    };
    TestcompComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-testcomp',
            template: __webpack_require__(566),
            styles: [__webpack_require__(541)]
        }), 
        __metadata('design:paramtypes', [])
    ], TestcompComponent);
    return TestcompComponent;
}());
//# sourceMappingURL=testcomp.component.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(141)();
// imports


// module
exports.push([module.i, "\r\n                .fc {\r\n    direction: ltr;\r\n\ttext-align: left;\r\n\t}\r\n\t\r\n.fc table {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n\t}\r\n\t\r\nhtml .fc,\r\n.fc table {\r\n\tfont-size: 1em;\r\n\t}\r\n\t\r\n.fc td,\r\n.fc th {\r\n\tpadding: 0;\r\n\tvertical-align: top;\r\n\t}\r\n\r\n\r\n\r\n/* Header\r\n------------------------------------------------------------------------*/\r\n\r\n.fc-header td {\r\n\twhite-space: nowrap;\r\n\t}\r\n\r\n.fc-header-left {\r\n\twidth: 25%;\r\n\ttext-align: left;\r\n\t}\r\n\t\r\n.fc-header-center {\r\n\ttext-align: center;\r\n\t}\r\n\t\r\n.fc-header-right {\r\n\twidth: 25%;\r\n\ttext-align: right;\r\n\t}\r\n\t\r\n.fc-header-title {\r\n\tdisplay: inline-block;\r\n\tvertical-align: top;\r\n\t}\r\n\t\r\n.fc-header-title h2 {\r\n\tmargin-top: 0;\r\n\twhite-space: nowrap;\r\n\t}\r\n\t\r\n.fc .fc-header-space {\r\n\tpadding-left: 10px;\r\n\t}\r\n\t\r\n.fc-header .fc-button {\r\n\tmargin-bottom: 1em;\r\n\tvertical-align: top;\r\n\t}\r\n\t\r\n/* buttons edges butting together */\r\n\r\n.fc-header .fc-button {\r\n\tmargin-right: -1px;\r\n\t}\r\n\t\r\n.fc-header .fc-corner-right,  /* non-theme */\r\n.fc-header .ui-corner-right { /* theme */\r\n\tmargin-right: 0; /* back to normal */\r\n\t}\r\n\t\r\n/* button layering (for border precedence) */\r\n\t\r\n.fc-header .fc-state-hover,\r\n.fc-header .ui-state-hover {\r\n\tz-index: 2;\r\n\t}\r\n\t\r\n.fc-header .fc-state-down {\r\n\tz-index: 3;\r\n\t}\r\n\r\n.fc-header .fc-state-active,\r\n.fc-header .ui-state-active {\r\n\tz-index: 4;\r\n\t}\r\n\t\r\n\t\r\n\t\r\n/* Content\r\n------------------------------------------------------------------------*/\r\n\t\r\n.fc-content {\r\n\tclear: both;\r\n\tzoom: 1; /* for IE7, gives accurate coordinates for [un]freezeContentHeight */\r\n\t}\r\n\t\r\n.fc-view {\r\n\twidth: 100%;\r\n\toverflow: hidden;\r\n\t}\r\n\t\r\n\t\r\n\r\n/* Cell Styles\r\n------------------------------------------------------------------------*/\r\n\r\n.fc-widget-header,    /* <th>, usually */\r\n.fc-widget-content {  /* <td>, usually */\r\n\tborder: 1px solid #ddd;\r\n\t}\r\n\t\r\n.fc-state-highlight { /* <td> today cell */ /* TODO: add .fc-today to <th> */\r\n\tbackground: #fcfcfc;\r\n\t}\r\n\t\r\n.fc-cell-overlay { /* semi-transparent rectangle while dragging */\r\n\tbackground: #bcccbc;\r\n\topacity: .3;\r\n\tfilter: alpha(opacity=30); /* for IE */\r\n\t}\r\n\t\r\n\r\n\r\n/* Buttons\r\n------------------------------------------------------------------------*/\r\n\r\n.fc-button {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tpadding: 0 .6em;\r\n\toverflow: hidden;\r\n\theight: 1.9em;\r\n\tline-height: 1.9em;\r\n\twhite-space: nowrap;\r\n\tcursor: pointer;\r\n}\r\n\r\n\r\n.fc-text-arrow {\r\n\tmargin: 0 .1em;\r\n\tfont-size: 2em;\r\n\tfont-family: \"Courier New\", Courier, monospace;\r\n\tvertical-align: baseline; /* for IE7 */\r\n\t}\r\n\r\n\r\n\t\r\n/*\r\n  button states\r\n  borrowed from twitter bootstrap (http://twitter.github.com/bootstrap/)\r\n*/\r\n\r\n.fc-state-default {\r\n\tbackground-color: #f5f5f5;\r\n\t}\r\n\r\n.fc-state-hover,\r\n.fc-state-down,\r\n.fc-state-active,\r\n.fc-state-disabled {\r\n\tcolor: #333333;\r\n\tbackground-color: #e6e6e6;\r\n\t}\r\n\r\n.fc-state-hover {\r\n\tcolor: #333333;\r\n\ttext-decoration: none;\r\n\tbackground-position: 0 -15px;\r\n\ttransition: background-position 0.1s linear;\r\n\t}\r\n\r\n.fc-state-down,\r\n.fc-state-active {\r\n\tbackground-color: #cccccc;\r\n\tbackground-image: none;\r\n\toutline: 0;\r\n\tbox-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05);\r\n\t}\r\n\r\n.fc-state-disabled {\r\n\tcursor: default;\r\n\tbackground-image: none;\r\n\topacity: 0.55;\r\n\tfilter: alpha(opacity=65);\r\n\tbox-shadow: none;\r\n\t}\r\n\r\n\t\r\n\r\n/* Global Event Styles\r\n------------------------------------------------------------------------*/\r\n\r\n.fc-event-container > * {\r\n\tz-index: 8;\r\n\t}\r\n\r\n.fc-event-container > .ui-draggable-dragging,\r\n.fc-event-container > .ui-resizable-resizing {\r\n\tz-index: 9;\r\n\t}\r\n\t \r\n.fc-event {\r\n\tborder: 1px solid #3a87ad; /* default BORDER color */\r\n\tbackground-color: #3a87ad; /* default BACKGROUND color */\r\n\tcolor: #fff;               /* default TEXT color */\r\n\tfont-size: .85em;\r\n\tcursor: default;\r\n\t}\r\n\r\na.fc-event {\r\n\ttext-decoration: none;\r\n\t}\r\n\t\r\na.fc-event,\r\n.fc-event-draggable {\r\n\tcursor: pointer;\r\n\t}\r\n\t\r\n.fc-rtl .fc-event {\r\n\ttext-align: right;\r\n\t}\r\n\r\n.fc-event-inner {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\toverflow: hidden;\r\n\t}\r\n\t\r\n.fc-event-time,\r\n.fc-event-title {\r\n\tpadding: 0 1px;\r\n\t}\r\n\t\r\n.fc .ui-resizable-handle {\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\tz-index: 99999;\r\n\toverflow: hidden; /* hacky spaces (IE6/7) */\r\n\tfont-size: 300%;  /* */\r\n\tline-height: 50%; /* */\r\n\t}\r\n\t\r\n\t\r\n\t\r\n/* Horizontal Events\r\n------------------------------------------------------------------------*/\r\n\r\n.fc-event-hori {\r\n\tborder-width: 1px 0;\r\n\tmargin-bottom: 1px;\r\n\t}\r\n\r\n.fc-ltr .fc-event-hori.fc-event-start,\r\n.fc-rtl .fc-event-hori.fc-event-end {\r\n\tborder-left-width: 1px;\r\n\t}\r\n\r\n.fc-ltr .fc-event-hori.fc-event-end,\r\n.fc-rtl .fc-event-hori.fc-event-start {\r\n\tborder-right-width: 1px;\r\n\t}\r\n\t\r\n/* resizable */\r\n\t\r\n.fc-event-hori .ui-resizable-e {\r\n\ttop: 0           !important; /* importants override pre jquery ui 1.7 styles */\r\n\tright: -3px      !important;\r\n\twidth: 7px       !important;\r\n\theight: 100%     !important;\r\n\tcursor: e-resize;\r\n\t}\r\n\t\r\n.fc-event-hori .ui-resizable-w {\r\n\ttop: 0           !important;\r\n\tleft: -3px       !important;\r\n\twidth: 7px       !important;\r\n\theight: 100%     !important;\r\n\tcursor: w-resize;\r\n\t}\r\n\t\r\n.fc-event-hori .ui-resizable-handle {\r\n\t_padding-bottom: 14px; /* IE6 had 0 height */\r\n\t}\r\n\t\r\n\r\ntable.fc-border-separate {\r\n\tborder-collapse: separate;\r\n\t}\r\n\t\r\n.fc-border-separate th,\r\n.fc-border-separate td {\r\n\tborder-width: 1px 0 0 1px;\r\n\t}\r\n\t\r\n.fc-border-separate th.fc-last,\r\n.fc-border-separate td.fc-last {\r\n\tborder-right-width: 1px;\r\n\t}\r\n\t\r\n.fc-border-separate tr.fc-last th,\r\n.fc-border-separate tr.fc-last td {\r\n\tborder-bottom-width: 1px;\r\n\t}\r\n\t\r\n.fc-border-separate tbody tr.fc-first td,\r\n.fc-border-separate tbody tr.fc-first th {\r\n\tborder-top-width: 0;\r\n\t}\r\n\t\r\n\t\r\n\r\n/* Month View, Basic Week View, Basic Day View\r\n------------------------------------------------------------------------*/\r\n\r\n.fc-grid th {\r\n\ttext-align: center;\r\n\t}\r\n\r\n.fc .fc-week-number {\r\n\twidth: 22px;\r\n\ttext-align: center;\r\n\t}\r\n\r\n.fc .fc-week-number div {\r\n\tpadding: 0 2px;\r\n\t}\r\n\t\r\n.fc-grid .fc-day-number {\r\n\tfloat: right;\r\n\tpadding: 0 2px;\r\n\t}\r\n\t\r\n.fc-grid .fc-other-month .fc-day-number {\r\n\topacity: 0.3;\r\n\tfilter: alpha(opacity=30); /* for IE */\r\n\t/* opacity with small font can sometimes look too faded\r\n\t   might want to set the 'color' property instead\r\n\t   making day-numbers bold also fixes the problem */\r\n\t}\r\n\t\r\n.fc-grid .fc-day-content {\r\n\tclear: both;\r\n\tpadding: 2px 2px 1px; /* distance between events and day edges */\r\n\t}\r\n\t\r\n/* event styles */\r\n\t\r\n.fc-grid .fc-event-time {\r\n\tfont-weight: bold;\r\n\t}\r\n\t\r\n/* right-to-left */\r\n\t\r\n.fc-rtl .fc-grid .fc-day-number {\r\n\tfloat: left;\r\n\t}\r\n\t\r\n.fc-rtl .fc-grid .fc-event-time {\r\n\tfloat: right;\r\n\t}\r\n\t\r\n\t\r\n\r\n/* Agenda Week View, Agenda Day View\r\n------------------------------------------------------------------------*/\r\n\r\n.fc-agenda table {\r\n\tborder-collapse: separate;\r\n\t}\r\n\t\r\n.fc-agenda-days th {\r\n\ttext-align: center;\r\n\t}\r\n\t\r\n.fc-agenda .fc-agenda-axis {\r\n\twidth: 50px;\r\n\tpadding: 0 4px;\r\n\tvertical-align: middle;\r\n\ttext-align: right;\r\n\twhite-space: nowrap;\r\n\tfont-weight: normal;\r\n\t}\r\n\r\n.fc-agenda .fc-week-number {\r\n\tfont-weight: bold;\r\n\t}\r\n\t\r\n.fc-agenda .fc-day-content {\r\n\tpadding: 2px 2px 1px;\r\n\t}\r\n\t\r\n/* make axis border take precedence */\r\n\t\r\n.fc-agenda-days .fc-agenda-axis {\r\n\tborder-right-width: 1px;\r\n\t}\r\n\t\r\n.fc-agenda-days .fc-col0 {\r\n\tborder-left-width: 0;\r\n\t}\r\n\t\r\n/* all-day area */\r\n\t\r\n.fc-agenda-allday th {\r\n\tborder-width: 0 1px;\r\n\t}\r\n\t\r\n.fc-agenda-allday .fc-day-content {\r\n\tmin-height: 34px; /* TODO: doesnt work well in quirksmode */\r\n\t_height: 34px;\r\n\t}\r\n\t\r\n/* divider (between all-day and slots) */\r\n\t\r\n.fc-agenda-divider-inner {\r\n\theight: 2px;\r\n\toverflow: hidden;\r\n\t}\r\n\t\r\n.fc-widget-header .fc-agenda-divider-inner {\r\n\tbackground: #eee;\r\n\t}\r\n\t\r\n/* slot rows */\r\n\t\r\n.fc-agenda-slots th {\r\n\tborder-width: 1px 1px 0;\r\n\t}\r\n\t\r\n.fc-agenda-slots td {\r\n\tborder-width: 1px 0 0;\r\n\tbackground: none;\r\n\t}\r\n\t\r\n.fc-agenda-slots td div {\r\n\theight: 20px;\r\n\t}\r\n\t\r\n.fc-agenda-slots tr.fc-slot0 th,\r\n.fc-agenda-slots tr.fc-slot0 td {\r\n\tborder-top-width: 0;\r\n\t}\r\n\r\n.fc-agenda-slots tr.fc-minor th,\r\n.fc-agenda-slots tr.fc-minor td {\r\n\tborder-top-style: dotted;\r\n\t}\r\n\t\r\n.fc-agenda-slots tr.fc-minor th.ui-widget-header {\r\n\t*border-top-style: solid; /* doesn't work with background in IE6/7 */\r\n\t}\r\n\t\r\n\r\n\r\n/* Vertical Events\r\n------------------------------------------------------------------------*/\r\n\r\n.fc-event-vert {\r\n\tborder-width: 0 1px;\r\n\t}\r\n\r\n.fc-event-vert.fc-event-start {\r\n\tborder-top-width: 1px;\r\n\t}\r\n\r\n.fc-event-vert.fc-event-end {\r\n\tborder-bottom-width: 1px;\r\n\t}\r\n\t\r\n.fc-event-vert .fc-event-time {\r\n\twhite-space: nowrap;\r\n\tfont-size: 10px;\r\n\t}\r\n\r\n.fc-event-vert .fc-event-inner {\r\n\tposition: relative;\r\n\tz-index: 2;\r\n\t}\r\n\t\r\n.fc-event-vert .fc-event-bg { /* makes the event lighter w/ a semi-transparent overlay  */\r\n\tposition: absolute;\r\n\tz-index: 1;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground: #fff;\r\n\topacity: .25;\r\n\tfilter: alpha(opacity=25);\r\n\t}\r\n\t\r\n.fc .ui-draggable-dragging .fc-event-bg, /* TODO: something nicer like .fc-opacity */\r\n.fc-select-helper .fc-event-bg {\r\n\tdisplay: none\\9; /* for IE6/7/8. nested opacity filters while dragging don't work */\r\n\t}\r\n\t\r\n/* resizable */\r\n\t\r\n.fc-event-vert .ui-resizable-s {\r\n\tbottom: 0        !important; /* importants override pre jquery ui 1.7 styles */\r\n\twidth: 100%      !important;\r\n\theight: 8px      !important;\r\n\toverflow: hidden !important;\r\n\tline-height: 8px !important;\r\n\tfont-size: 11px  !important;\r\n\tfont-family: monospace;\r\n\ttext-align: center;\r\n\tcursor: s-resize;\r\n\t}\r\n\t\r\n\t\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(141)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 544:
/***/ (function(module, exports) {

module.exports = "<!--<h1>\n  {{title}}\n</h1>-->\n<!--\n<a routerLink='/h' routerLInkActive='active'>home</a>\n<a routerLink='/h2' routerLInkActive='active'>home 2</a>\n<a routerLink='/h3' routerLInkActive='active'>home 3</a>\n<a routerLink='/dashboard' routerLInkActive='active'>dashboard</a>-->\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ 545:
/***/ (function(module, exports) {

module.exports = "        <div id=\"page-wrapper\">\r\n\r\n            <div class=\"row\">\r\n                \r\n                <!--<div class=\"container\">\r\n                <ul class=\"nav nav-justified\">\r\n                    <li><a class=\"text-center\" href=\"#\"><i class=\"fa fa-tag fa-5x\"></i> <br>Tags</a></li>\r\n                    <li><a class=\"text-center\" href=\"#\"><i class=\"fa fa-bookmark fa-5x\"></i> <br>Tasks</a></li>\r\n                    <li><a class=\"text-center\" href=\"#\"><i class=\"fa fa-camera fa-5x\"></i> <br>Photos</a></li>\r\n                    <li><a class=\"text-center\" href=\"#\"><i class=\"fa fa-map-marker fa-5x\"></i> <br>Tour</a></li>\r\n                    <li><a class=\"text-center\" href=\"#\"><i class=\"fa fa-music fa-5x\"></i> <br>Tunes</a></li>\r\n                    <li><a class=\"text-center\" href=\"#\"><i class=\"fa fa-book fa-5x\"></i> <br>Books</a></li>\r\n                    <li><a class=\"text-center\" href=\"#\"><i class=\"fa fa-film fa-5x\"></i> <br>Videos</a></li>\r\n                </ul>\r\n                </div>-->\r\ncalendar component\r\n                <div class=\"container\">\r\n                    <hr>\r\n                    <div id=\"calendar\"></div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        <!-- /#page-wrapper -->\r\n"

/***/ }),

/***/ 546:
/***/ (function(module, exports) {

module.exports = "<div id=\"page-wrapper\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<h1 class=\"page-header\">Catering</h1>\r\n\t\t</div>\r\n\t\t<!-- /.col-lg-12 -->\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"panel-body\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-lg-8\">\r\n\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t<table class=\"table table-bordered table-hover table-striped\">\r\n\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th>#</th>\r\n\t\t\t\t\t\t\t\t\t<th>Catering</th>\r\n\t\t\t\t\t\t\t\t\t<th>description</th>\r\n\t\t\t\t\t\t\t\t\t<th></th>\r\n\t\t\t\t\t\t\t\t\t<th></th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t\t\t<td><input type=\"text\" name=\"package\" [(ngModel)]=\"formItem.package\" required /></td>\r\n\t\t\t\t\t\t\t\t\t<td><input type=\"text\" name=\"description\" [(ngModel)]=\"formItem.description\" required /></td>\r\n\t\t\t\t\t\t\t\t\t<td><button class=\"btn btn-success\" type=\"submit\" (click)=\"addThis()\">Save</button></td>\r\n\t\t\t\t\t\t\t\t\t<td><button class=\"btn btn-danger\" type='reset' (click)=\"clearThis()\">Reset</button></td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let catering of dataList; let i = index\">\r\n\t\t\t\t\t\t\t\t\t<td>{{ i+1 }}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{catering.package}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{catering.description}}</td>\r\n\t\t\t\t\t\t\t\t\t<td><button class=\"btn btn-primary active\" ng-hide=\"true\" ng-disabled=\"isEditingMode\" (click)=\"updateThis(catering)\">Edit</button></td>\r\n\t\t\t\t\t\t\t\t\t<td><button class=\"btn btn-danger active\" ng-disabled=\"isEditingMode\" (click)=\"deleteThis(catering._id)\">Delete</button></td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- /.table-responsive -->\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /.col-lg-4 (nested) -->\r\n\t\t\t\t<div class=\"col-lg-8\">\r\n\t\t\t\t\t<div id=\"morris-bar-chart\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /.col-lg-8 (nested) -->\r\n\t\t\t</div>\r\n\t\t\t<!-- /.row -->\r\n\t\t</div>\r\n\t\t<!-- /.panel-body -->\r\n\t</div>\r\n</div>\r\n<!-- /#page-wrapper -->"

/***/ }),

/***/ 547:
/***/ (function(module, exports) {

module.exports = "        <div id=\"page-wrapper\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                    <h1 class=\"page-header\">Dashboard</h1>\r\n                </div>\r\n                <!-- /.col-lg-12 -->\r\n            </div>\r\n            <!-- /.row -->\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-3 col-md-6\">\r\n                    <div class=\"panel panel-primary\">\r\n                        <div class=\"panel-heading\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xs-3\">\r\n                                    <i class=\"fa fa-comments fa-5x\"></i>\r\n                                </div>\r\n                                <div class=\"col-xs-9 text-right\">\r\n                                    <div class=\"huge\">26</div>\r\n                                    <div>New Comments!</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <a href=\"#\">\r\n                            <div class=\"panel-footer\">\r\n                                <span class=\"pull-left\">View Details</span>\r\n                                <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\r\n                                <div class=\"clearfix\"></div>\r\n                            </div>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-3 col-md-6\">\r\n                    <div class=\"panel panel-green\">\r\n                        <div class=\"panel-heading\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xs-3\">\r\n                                    <i class=\"fa fa-tasks fa-5x\"></i>\r\n                                </div>\r\n                                <div class=\"col-xs-9 text-right\">\r\n                                    <div class=\"huge\">12</div>\r\n                                    <div>New Tasks!</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <a href=\"#\">\r\n                            <div class=\"panel-footer\">\r\n                                <span class=\"pull-left\">View Details</span>\r\n                                <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\r\n                                <div class=\"clearfix\"></div>\r\n                            </div>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-3 col-md-6\">\r\n                    <div class=\"panel panel-yellow\">\r\n                        <div class=\"panel-heading\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xs-3\">\r\n                                    <i class=\"fa fa-shopping-cart fa-5x\"></i>\r\n                                </div>\r\n                                <div class=\"col-xs-9 text-right\">\r\n                                    <div class=\"huge\">124</div>\r\n                                    <div>New Orders!</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <a href=\"#\">\r\n                            <div class=\"panel-footer\">\r\n                                <span class=\"pull-left\">View Details</span>\r\n                                <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\r\n                                <div class=\"clearfix\"></div>\r\n                            </div>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-3 col-md-6\">\r\n                    <div class=\"panel panel-red\">\r\n                        <div class=\"panel-heading\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xs-3\">\r\n                                    <i class=\"fa fa-support fa-5x\"></i>\r\n                                </div>\r\n                                <div class=\"col-xs-9 text-right\">\r\n                                    <div class=\"huge\">13</div>\r\n                                    <div>Support Tickets!</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <a href=\"#\">\r\n                            <div class=\"panel-footer\">\r\n                                <span class=\"pull-left\">View Details</span>\r\n                                <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\r\n                                <div class=\"clearfix\"></div>\r\n                            </div>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- /.row -->\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-8\">\r\n                    <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                            <i class=\"fa fa-bar-chart-o fa-fw\"></i> Area Chart Example\r\n                            <div class=\"pull-right\">\r\n                                <div class=\"btn-group\">\r\n                                    <button type=\"button\" class=\"btn btn-default btn-xs dropdown-toggle\" data-toggle=\"dropdown\">\r\n                                        Actions\r\n                                        <span class=\"caret\"></span>\r\n                                    </button>\r\n                                    <ul class=\"dropdown-menu pull-right\" role=\"menu\">\r\n                                        <li><a href=\"#\">Action</a>\r\n                                        </li>\r\n                                        <li><a href=\"#\">Another action</a>\r\n                                        </li>\r\n                                        <li><a href=\"#\">Something else here</a>\r\n                                        </li>\r\n                                        <li class=\"divider\"></li>\r\n                                        <li><a href=\"#\">Separated link</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- /.panel-heading -->\r\n                        <div class=\"panel-body\">\r\n                            <div id=\"morris-area-chart\"></div>\r\n                        </div>\r\n                        <!-- /.panel-body -->\r\n                    </div>\r\n                    <!-- /.panel -->\r\n                    <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                            <i class=\"fa fa-bar-chart-o fa-fw\"></i> Bar Chart Example\r\n                            <div class=\"pull-right\">\r\n                                <div class=\"btn-group\">\r\n                                    <button type=\"button\" class=\"btn btn-default btn-xs dropdown-toggle\" data-toggle=\"dropdown\">\r\n                                        Actions\r\n                                        <span class=\"caret\"></span>\r\n                                    </button>\r\n                                    <ul class=\"dropdown-menu pull-right\" role=\"menu\">\r\n                                        <li><a href=\"#\">Action</a>\r\n                                        </li>\r\n                                        <li><a href=\"#\">Another action</a>\r\n                                        </li>\r\n                                        <li><a href=\"#\">Something else here</a>\r\n                                        </li>\r\n                                        <li class=\"divider\"></li>\r\n                                        <li><a href=\"#\">Separated link</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- /.panel-heading -->\r\n                        <div class=\"panel-body\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-4\">\r\n                                    <div class=\"table-responsive\">\r\n                                        <table class=\"table table-bordered table-hover table-striped\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th>#</th>\r\n                                                    <th>Date</th>\r\n                                                    <th>Time</th>\r\n                                                    <th>Amount</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr>\r\n                                                    <td>3326</td>\r\n                                                    <td>10/21/2013</td>\r\n                                                    <td>3:29 PM</td>\r\n                                                    <td>$321.33</td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <td>3325</td>\r\n                                                    <td>10/21/2013</td>\r\n                                                    <td>3:20 PM</td>\r\n                                                    <td>$234.34</td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <td>3324</td>\r\n                                                    <td>10/21/2013</td>\r\n                                                    <td>3:03 PM</td>\r\n                                                    <td>$724.17</td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <td>3323</td>\r\n                                                    <td>10/21/2013</td>\r\n                                                    <td>3:00 PM</td>\r\n                                                    <td>$23.71</td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <td>3322</td>\r\n                                                    <td>10/21/2013</td>\r\n                                                    <td>2:49 PM</td>\r\n                                                    <td>$8345.23</td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <td>3321</td>\r\n                                                    <td>10/21/2013</td>\r\n                                                    <td>2:23 PM</td>\r\n                                                    <td>$245.12</td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <td>3320</td>\r\n                                                    <td>10/21/2013</td>\r\n                                                    <td>2:15 PM</td>\r\n                                                    <td>$5663.54</td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <td>3319</td>\r\n                                                    <td>10/21/2013</td>\r\n                                                    <td>2:13 PM</td>\r\n                                                    <td>$943.45</td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n                                    <!-- /.table-responsive -->\r\n                                </div>\r\n                                <!-- /.col-lg-4 (nested) -->\r\n                                <div class=\"col-lg-8\">\r\n                                    <div id=\"morris-bar-chart\"></div>\r\n                                </div>\r\n                                <!-- /.col-lg-8 (nested) -->\r\n                            </div>\r\n                            <!-- /.row -->\r\n                        </div>\r\n                        <!-- /.panel-body -->\r\n                    </div>\r\n                    <!-- /.panel -->\r\n                    <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> Responsive Timeline\r\n                        </div>\r\n                        <!-- /.panel-heading -->\r\n                        <div class=\"panel-body\">\r\n                            <ul class=\"timeline\">\r\n                                <li>\r\n                                    <div class=\"timeline-badge\"><i class=\"fa fa-check\"></i>\r\n                                    </div>\r\n                                    <div class=\"timeline-panel\">\r\n                                        <div class=\"timeline-heading\">\r\n                                            <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                                            <p><small class=\"text-muted\"><i class=\"fa fa-clock-o\"></i> 11 hours ago via Twitter</small>\r\n                                            </p>\r\n                                        </div>\r\n                                        <div class=\"timeline-body\">\r\n                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero laboriosam dolor perspiciatis omnis exercitationem. Beatae, officia pariatur? Est cum veniam excepturi. Maiores praesentium, porro voluptas suscipit facere rem dicta, debitis.</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n                                <li class=\"timeline-inverted\">\r\n                                    <div class=\"timeline-badge warning\"><i class=\"fa fa-credit-card\"></i>\r\n                                    </div>\r\n                                    <div class=\"timeline-panel\">\r\n                                        <div class=\"timeline-heading\">\r\n                                            <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                                        </div>\r\n                                        <div class=\"timeline-body\">\r\n                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem quibusdam, tenetur commodi provident cumque magni voluptatem libero, quis rerum. Fugiat esse debitis optio, tempore. Animi officiis alias, officia repellendus.</p>\r\n                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores odit qui est tempora eos, nostrum provident explicabo dignissimos debitis vel! Adipisci eius voluptates, ad aut recusandae minus eaque facere.</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n                                <li>\r\n                                    <div class=\"timeline-badge danger\"><i class=\"fa fa-bomb\"></i>\r\n                                    </div>\r\n                                    <div class=\"timeline-panel\">\r\n                                        <div class=\"timeline-heading\">\r\n                                            <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                                        </div>\r\n                                        <div class=\"timeline-body\">\r\n                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam facilis enim eaque, tenetur nam id qui vel velit similique nihil iure molestias aliquam, voluptatem totam quaerat, magni commodi quisquam.</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n                                <li class=\"timeline-inverted\">\r\n                                    <div class=\"timeline-panel\">\r\n                                        <div class=\"timeline-heading\">\r\n                                            <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                                        </div>\r\n                                        <div class=\"timeline-body\">\r\n                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates est quaerat asperiores sapiente, eligendi, nihil. Itaque quos, alias sapiente rerum quas odit! Aperiam officiis quidem delectus libero, omnis ut debitis!</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n                                <li>\r\n                                    <div class=\"timeline-badge info\"><i class=\"fa fa-save\"></i>\r\n                                    </div>\r\n                                    <div class=\"timeline-panel\">\r\n                                        <div class=\"timeline-heading\">\r\n                                            <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                                        </div>\r\n                                        <div class=\"timeline-body\">\r\n                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minus modi quam ipsum alias at est molestiae excepturi delectus nesciunt, quibusdam debitis amet, beatae consequuntur impedit nulla qui! Laborum, atque.</p>\r\n                                            <hr>\r\n                                            <div class=\"btn-group\">\r\n                                                <button type=\"button\" class=\"btn btn-primary btn-sm dropdown-toggle\" data-toggle=\"dropdown\">\r\n                                                    <i class=\"fa fa-gear\"></i> <span class=\"caret\"></span>\r\n                                                </button>\r\n                                                <ul class=\"dropdown-menu\" role=\"menu\">\r\n                                                    <li><a href=\"#\">Action</a>\r\n                                                    </li>\r\n                                                    <li><a href=\"#\">Another action</a>\r\n                                                    </li>\r\n                                                    <li><a href=\"#\">Something else here</a>\r\n                                                    </li>\r\n                                                    <li class=\"divider\"></li>\r\n                                                    <li><a href=\"#\">Separated link</a>\r\n                                                    </li>\r\n                                                </ul>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n                                <li>\r\n                                    <div class=\"timeline-panel\">\r\n                                        <div class=\"timeline-heading\">\r\n                                            <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                                        </div>\r\n                                        <div class=\"timeline-body\">\r\n                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fuga odio quibusdam. Iure expedita, incidunt unde quis nam! Quod, quisquam. Officia quam qui adipisci quas consequuntur nostrum sequi. Consequuntur, commodi.</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n                                <li class=\"timeline-inverted\">\r\n                                    <div class=\"timeline-badge success\"><i class=\"fa fa-graduation-cap\"></i>\r\n                                    </div>\r\n                                    <div class=\"timeline-panel\">\r\n                                        <div class=\"timeline-heading\">\r\n                                            <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                                        </div>\r\n                                        <div class=\"timeline-body\">\r\n                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt obcaecati, quaerat tempore officia voluptas debitis consectetur culpa amet, accusamus dolorum fugiat, animi dicta aperiam, enim incidunt quisquam maxime neque eaque.</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                        <!-- /.panel-body -->\r\n                    </div>\r\n                    <!-- /.panel -->\r\n                </div>\r\n                <!-- /.col-lg-8 -->\r\n                <div class=\"col-lg-4\">\r\n                    <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                            <i class=\"fa fa-bell fa-fw\"></i> Notifications Panel\r\n                        </div>\r\n                        <!-- /.panel-heading -->\r\n                        <div class=\"panel-body\">\r\n                            <div class=\"list-group\">\r\n                                <a href=\"#\" class=\"list-group-item\">\r\n                                    <i class=\"fa fa-comment fa-fw\"></i> New Comment\r\n                                    <span class=\"pull-right text-muted small\"><em>4 minutes ago</em>\r\n                                    </span>\r\n                                </a>\r\n                                <a href=\"#\" class=\"list-group-item\">\r\n                                    <i class=\"fa fa-twitter fa-fw\"></i> 3 New Followers\r\n                                    <span class=\"pull-right text-muted small\"><em>12 minutes ago</em>\r\n                                    </span>\r\n                                </a>\r\n                                <a href=\"#\" class=\"list-group-item\">\r\n                                    <i class=\"fa fa-envelope fa-fw\"></i> Message Sent\r\n                                    <span class=\"pull-right text-muted small\"><em>27 minutes ago</em>\r\n                                    </span>\r\n                                </a>\r\n                                <a href=\"#\" class=\"list-group-item\">\r\n                                    <i class=\"fa fa-tasks fa-fw\"></i> New Task\r\n                                    <span class=\"pull-right text-muted small\"><em>43 minutes ago</em>\r\n                                    </span>\r\n                                </a>\r\n                                <a href=\"#\" class=\"list-group-item\">\r\n                                    <i class=\"fa fa-upload fa-fw\"></i> Server Rebooted\r\n                                    <span class=\"pull-right text-muted small\"><em>11:32 AM</em>\r\n                                    </span>\r\n                                </a>\r\n                                <a href=\"#\" class=\"list-group-item\">\r\n                                    <i class=\"fa fa-bolt fa-fw\"></i> Server Crashed!\r\n                                    <span class=\"pull-right text-muted small\"><em>11:13 AM</em>\r\n                                    </span>\r\n                                </a>\r\n                                <a href=\"#\" class=\"list-group-item\">\r\n                                    <i class=\"fa fa-warning fa-fw\"></i> Server Not Responding\r\n                                    <span class=\"pull-right text-muted small\"><em>10:57 AM</em>\r\n                                    </span>\r\n                                </a>\r\n                                <a href=\"#\" class=\"list-group-item\">\r\n                                    <i class=\"fa fa-shopping-cart fa-fw\"></i> New Order Placed\r\n                                    <span class=\"pull-right text-muted small\"><em>9:49 AM</em>\r\n                                    </span>\r\n                                </a>\r\n                                <a href=\"#\" class=\"list-group-item\">\r\n                                    <i class=\"fa fa-money fa-fw\"></i> Payment Received\r\n                                    <span class=\"pull-right text-muted small\"><em>Yesterday</em>\r\n                                    </span>\r\n                                </a>\r\n                            </div>\r\n                            <!-- /.list-group -->\r\n                            <a href=\"#\" class=\"btn btn-default btn-block\">View All Alerts</a>\r\n                        </div>\r\n                        <!-- /.panel-body -->\r\n                    </div>\r\n                    <!-- /.panel -->\r\n                    <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                            <i class=\"fa fa-bar-chart-o fa-fw\"></i> Donut Chart Example\r\n                        </div>\r\n                        <div class=\"panel-body\">\r\n                            <div id=\"morris-donut-chart\"></div>\r\n                            <a href=\"#\" class=\"btn btn-default btn-block\">View Details</a>\r\n                        </div>\r\n                        <!-- /.panel-body -->\r\n                    </div>\r\n                    <!-- /.panel -->\r\n                    <div class=\"chat-panel panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                            <i class=\"fa fa-comments fa-fw\"></i> Chat\r\n                            <div class=\"btn-group pull-right\">\r\n                                <button type=\"button\" class=\"btn btn-default btn-xs dropdown-toggle\" data-toggle=\"dropdown\">\r\n                                    <i class=\"fa fa-chevron-down\"></i>\r\n                                </button>\r\n                                <ul class=\"dropdown-menu slidedown\">\r\n                                    <li>\r\n                                        <a href=\"#\">\r\n                                            <i class=\"fa fa-refresh fa-fw\"></i> Refresh\r\n                                        </a>\r\n                                    </li>\r\n                                    <li>\r\n                                        <a href=\"#\">\r\n                                            <i class=\"fa fa-check-circle fa-fw\"></i> Available\r\n                                        </a>\r\n                                    </li>\r\n                                    <li>\r\n                                        <a href=\"#\">\r\n                                            <i class=\"fa fa-times fa-fw\"></i> Busy\r\n                                        </a>\r\n                                    </li>\r\n                                    <li>\r\n                                        <a href=\"#\">\r\n                                            <i class=\"fa fa-clock-o fa-fw\"></i> Away\r\n                                        </a>\r\n                                    </li>\r\n                                    <li class=\"divider\"></li>\r\n                                    <li>\r\n                                        <a href=\"#\">\r\n                                            <i class=\"fa fa-sign-out fa-fw\"></i> Sign Out\r\n                                        </a>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                        <!-- /.panel-heading -->\r\n                        <div class=\"panel-body\">\r\n                            <ul class=\"chat\">\r\n                                <li class=\"left clearfix\">\r\n                                    <span class=\"chat-img pull-left\">\r\n                                        <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\" />\r\n                                    </span>\r\n                                    <div class=\"chat-body clearfix\">\r\n                                        <div class=\"header\">\r\n                                            <strong class=\"primary-font\">Jack Sparrow</strong>\r\n                                            <small class=\"pull-right text-muted\">\r\n                                                <i class=\"fa fa-clock-o fa-fw\"></i> 12 mins ago\r\n                                            </small>\r\n                                        </div>\r\n                                        <p>\r\n                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                                        </p>\r\n                                    </div>\r\n                                </li>\r\n                                <li class=\"right clearfix\">\r\n                                    <span class=\"chat-img pull-right\">\r\n                                        <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\" />\r\n                                    </span>\r\n                                    <div class=\"chat-body clearfix\">\r\n                                        <div class=\"header\">\r\n                                            <small class=\" text-muted\">\r\n                                                <i class=\"fa fa-clock-o fa-fw\"></i> 13 mins ago</small>\r\n                                            <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\r\n                                        </div>\r\n                                        <p>\r\n                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                                        </p>\r\n                                    </div>\r\n                                </li>\r\n                                <li class=\"left clearfix\">\r\n                                    <span class=\"chat-img pull-left\">\r\n                                        <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\" />\r\n                                    </span>\r\n                                    <div class=\"chat-body clearfix\">\r\n                                        <div class=\"header\">\r\n                                            <strong class=\"primary-font\">Jack Sparrow</strong>\r\n                                            <small class=\"pull-right text-muted\">\r\n                                                <i class=\"fa fa-clock-o fa-fw\"></i> 14 mins ago</small>\r\n                                        </div>\r\n                                        <p>\r\n                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                                        </p>\r\n                                    </div>\r\n                                </li>\r\n                                <li class=\"right clearfix\">\r\n                                    <span class=\"chat-img pull-right\">\r\n                                        <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\" />\r\n                                    </span>\r\n                                    <div class=\"chat-body clearfix\">\r\n                                        <div class=\"header\">\r\n                                            <small class=\" text-muted\">\r\n                                                <i class=\"fa fa-clock-o fa-fw\"></i> 15 mins ago</small>\r\n                                            <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\r\n                                        </div>\r\n                                        <p>\r\n                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                                        </p>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                        <!-- /.panel-body -->\r\n                        <div class=\"panel-footer\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"btn-input\" type=\"text\" class=\"form-control input-sm\" placeholder=\"Type your message here...\" />\r\n                                <span class=\"input-group-btn\">\r\n                                    <button class=\"btn btn-warning btn-sm\" id=\"btn-chat\">\r\n                                        Send\r\n                                    </button>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <!-- /.panel-footer -->\r\n                    </div>\r\n                    <!-- /.panel .chat-panel -->\r\n                </div>\r\n                <!-- /.col-lg-4 -->\r\n            </div>\r\n            <!-- /.row -->\r\n        </div>\r\n        <!-- /#page-wrapper -->\r\n"

/***/ }),

/***/ 548:
/***/ (function(module, exports) {

module.exports = "<div id=\"page-wrapper\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<h1 class=\"page-header\">Feedback</h1>\r\n\t\t</div>\r\n\t\t<!-- /.col-lg-12 -->\r\n\t</div>\r\n\t<!-- /.row -->\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-8 col-md-8\">\r\n\t\t\t<!-- /.panel -->\r\n\t\t\t<div class=\"chat-panel panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<i class=\"fa fa-comments fa-fw\"></i>\r\n\t\t\t\t\t<div class=\"btn-group pull-right\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default btn-xs dropdown-toggle\" data-toggle=\"dropdown\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-chevron-down\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<ul class=\"dropdown-menu slidedown\">\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-refresh fa-fw\"></i> Refresh\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-check-circle fa-fw\"></i> Available\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-times fa-fw\"></i> Busy\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-clock-o fa-fw\"></i> Away\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"divider\"></li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-sign-out fa-fw\"></i> Sign Out\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /.panel-heading -->\r\n\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t<ul class=\"chat\">\r\n\t\t\t\t\t\t<li class=\"left clearfix\" *ngFor=\"let feedback of dataList\">\r\n\t\t\t\t\t\t\t<span class=\"chat-img pull-left\">\r\n\t\t\t\t\t\t\t\t<img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\" />\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<div class=\"chat-body clearfix\">\r\n\t\t\t\t\t\t\t\t<div class=\"header\">\r\n\t\t\t\t\t\t\t\t\t<strong class=\"primary-font\">{{ feedback.user }}</strong>\r\n\t\t\t\t\t\t\t\t\t<small class=\"primary-font\">({{ feedback.service }})</small>\r\n\t\t\t\t\t\t\t\t\t<small class=\"pull-right text-muted\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-clock-o fa-fw\"></i> {{ feedback.date }}\r\n\t\t\t\t\t\t\t\t\t</small>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t{{ feedback.feedback }}\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<!--<li class=\"right clearfix\">\r\n                                    <span class=\"chat-img pull-right\">\r\n                                        <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\" />\r\n                                    </span>\r\n                                    <div class=\"chat-body clearfix\">\r\n                                        <div class=\"header\">\r\n                                            <small class=\" text-muted\">\r\n                                                <i class=\"fa fa-clock-o fa-fw\"></i> 13 mins ago</small>\r\n                                            <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\r\n                                        </div>\r\n                                        <p>\r\n                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                                        </p>\r\n                                    </div>\r\n                                </li>\r\n                                <li class=\"left clearfix\">\r\n                                    <span class=\"chat-img pull-left\">\r\n                                        <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\" />\r\n                                    </span>\r\n                                    <div class=\"chat-body clearfix\">\r\n                                        <div class=\"header\">\r\n                                            <strong class=\"primary-font\">Jack Sparrow</strong>\r\n                                            <small class=\"pull-right text-muted\">\r\n                                                <i class=\"fa fa-clock-o fa-fw\"></i> 14 mins ago</small>\r\n                                        </div>\r\n                                        <p>\r\n                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                                        </p>\r\n                                    </div>\r\n                                </li>\r\n                                <li class=\"right clearfix\">\r\n                                    <span class=\"chat-img pull-right\">\r\n                                        <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\" />\r\n                                    </span>\r\n                                    <div class=\"chat-body clearfix\">\r\n                                        <div class=\"header\">\r\n                                            <small class=\" text-muted\">\r\n                                                <i class=\"fa fa-clock-o fa-fw\"></i> 15 mins ago</small>\r\n                                            <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\r\n                                        </div>\r\n                                        <p>\r\n                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                                        </p>\r\n                                    </div>\r\n                                </li>-->\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /.panel-body -->\r\n\t\t\t\t<div class=\"panel-footer\">\r\n\t\t\t\t\t<form role=\"form\" (submit)=\"addThis()\">\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<input id=\"btn-input\" type=\"text\" class=\"form-control\" placeholder=\"Type your message here...\" name=\"feedback\" [(ngModel)]=\"formItem.feedback\"\r\n\t\t\t\t\t\t\t maxlength=\"99\" required />\r\n\t\t\t\t\t\t\t<span class=\"input-group-btn\">\r\n\t\t\t\t\t\t\t\t<div class=\"input-group-btn\">\r\n\t\t\t\t\t\t\t\t\t<select type=\"button\" class=\"btn btn-secondary dropdown-toggle\"\r\n\t\t\t\t\t\t\t\t\t\t\tname=\"service\" [(ngModel)]=\"formItem.service\" required>\r\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let service of serviceList\" value=\"{{service.name}}\" selected >\r\n\t\t\t\t\t\t\t\t\t\t\t{{service.name}}\r\n\t\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n                                    <button class=\"btn btn-warning \" type=\"submit\" id=\"btn-chat\">\r\n                                        Send\r\n                                    </button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /.panel-footer -->\r\n\t\t\t</div>\r\n\t\t\t<!-- /.panel .chat-panel -->\r\n\t\t</div>\r\n\t\t<!-- /.col-lg-4 -->\r\n\t</div>\r\n\t<!-- /.row -->\r\n</div>\r\n<!-- /#page-wrapper -->"

/***/ }),

/***/ 549:
/***/ (function(module, exports) {

module.exports = "<div id=\"page-wrapper\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<h1 class=\"page-header\">Hello, {{ currentUser.name }}</h1>\r\n\t\t</div>\r\n\t\t<!-- /.col-lg-12 -->\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n\t\t\t\t<!--content here-->\r\n            </div>\r\n        </div>\r\n\t\t<div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                            <i class=\"fa fa-bar-chart-o fa-fw\"></i> Upcoming Booked Events\r\n                            <!--<div class=\"pull-right\">\r\n                                <div class=\"btn-group\">\r\n                                    <button type=\"button\" class=\"btn btn-default btn-xs dropdown-toggle\" data-toggle=\"dropdown\">\r\n                                        Actions\r\n                                        <span class=\"caret\"></span>\r\n                                    </button>\r\n                                    <ul class=\"dropdown-menu pull-right\" role=\"menu\">\r\n                                        <li><a href=\"#\">Action</a>\r\n                                        </li>\r\n                                        <li><a href=\"#\">Another action</a>\r\n                                        </li>\r\n                                        <li><a href=\"#\">Something else here</a>\r\n                                        </li>\r\n                                        <li class=\"divider\"></li>\r\n                                        <li><a href=\"#\">Separated link</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>-->\r\n                        </div>\r\n                        <!-- /.panel-heading -->\r\n                        <div class=\"panel-body\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-8\">\r\n                                    <div class=\"table-responsive\">\r\n                                        <table class=\"table table-bordered table-hover table-striped\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                <tr>\r\n                                                    <th>#</th>\r\n                                                    <th>Date</th>\r\n                                                    <th>Client</th>\r\n                                                    <th>Venue</th>\r\n                                                    <th>Catering</th>\r\n                                                    <th>Service</th>\r\n                                                    <th>Ocasion Type</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr *ngFor=\"let order of orders; let i = index\">\r\n                                                    <td>{{ i+1 }}</td>\r\n                                                    <td>{{order.event_date}}</td>\r\n                                                    <td>{{order.fkey[0].name}}</td>\r\n                                                    <td>{{order.venue}}</td>\r\n                                                    <td>{{order.catering}}</td>\r\n                                                    <td>{{order.service}}</td>\r\n                                                    <td>{{order.event_type}}</td>\r\n                                                    <td><button class=\"btn btn-primary active\" ng-hide=\"true\" ng-disabled=\"isEditingMode\" (click)=\"updateThis(order._id)\">Edit</button></td>\r\n                                                    <td><button class=\"btn btn-danger active\" ng-disabled=\"isEditingMode\" (click)=\"deleteThis(order._id)\">Delete</button></td>\r\n                                                </tr>\r\n                                            </tbody>\r\n\r\n                                        </table>\r\n                                    </div>\r\n                                    <!-- /.table-responsive -->\r\n                                </div>\r\n                                <!-- /.col-lg-4 (nested) -->\r\n                                <div class=\"col-lg-8\">\r\n                                    <div id=\"morris-bar-chart\"></div>\r\n                                </div>\r\n                                <!-- /.col-lg-8 (nested) -->\r\n                            </div>\r\n                            <!-- /.row -->\r\n                        </div>\r\n                        <!-- /.panel-body -->\r\n                    </div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ 550:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\" style=\"margin-bottom: 0\">\r\n    <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand\" routerLink=\"/\" routerLinkActive=\"\">FESTIVA</a>\r\n    </div>\r\n    <!-- /.navbar-header -->\r\n\r\n    <ul class=\"nav navbar-top-links navbar-right\">\r\n        <li class=\"dropdown\">\r\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n                <i class=\"fa fa-envelope fa-fw\"></i> <i class=\"fa fa-caret-down\"></i>\r\n            </a>\r\n            <ul class=\"dropdown-menu dropdown-messages\">\r\n                <li>\r\n                    <a href=\"#\">\r\n                        <div>\r\n                            <strong>John Smith</strong>\r\n                            <span class=\"pull-right text-muted\">\r\n                                <em>Yesterday</em>\r\n                            </span>\r\n                        </div>\r\n                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>\r\n                    </a>\r\n                </li>\r\n                <li class=\"divider\"></li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        <div>\r\n                            <strong>John Smith</strong>\r\n                            <span class=\"pull-right text-muted\">\r\n                                <em>Yesterday</em>\r\n                            </span>\r\n                        </div>\r\n                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>\r\n                    </a>\r\n                </li>\r\n                <li class=\"divider\"></li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        <div>\r\n                            <strong>John Smith</strong>\r\n                            <span class=\"pull-right text-muted\">\r\n                                <em>Yesterday</em>\r\n                            </span>\r\n                        </div>\r\n                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>\r\n                    </a>\r\n                </li>\r\n                <li class=\"divider\"></li>\r\n                <li>\r\n                    <a class=\"text-center\" href=\"#\">\r\n                        <strong>Read All Messages</strong>\r\n                        <i class=\"fa fa-angle-right\"></i>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n            <!-- /.dropdown-messages -->\r\n        </li>\r\n        <!-- /.dropdown -->\r\n        <li class=\"dropdown\">\r\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n                <i class=\"fa fa-tasks fa-fw\"></i> <i class=\"fa fa-caret-down\"></i>\r\n            </a>\r\n            <ul class=\"dropdown-menu dropdown-tasks\">\r\n                <li>\r\n                    <a href=\"#\">\r\n                        <div>\r\n                            <p>\r\n                                <strong>Task 1</strong>\r\n                                <span class=\"pull-right text-muted\">40% Complete</span>\r\n                            </p>\r\n                            <div class=\"progress progress-striped active\">\r\n                                <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 40%\">\r\n                                    <span class=\"sr-only\">40% Complete (success)</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </li>\r\n                <li class=\"divider\"></li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        <div>\r\n                            <p>\r\n                                <strong>Task 2</strong>\r\n                                <span class=\"pull-right text-muted\">20% Complete</span>\r\n                            </p>\r\n                            <div class=\"progress progress-striped active\">\r\n                                <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 20%\">\r\n                                    <span class=\"sr-only\">20% Complete</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </li>\r\n                <li class=\"divider\"></li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        <div>\r\n                            <p>\r\n                                <strong>Task 3</strong>\r\n                                <span class=\"pull-right text-muted\">60% Complete</span>\r\n                            </p>\r\n                            <div class=\"progress progress-striped active\">\r\n                                <div class=\"progress-bar progress-bar-warning\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%\">\r\n                                    <span class=\"sr-only\">60% Complete (warning)</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </li>\r\n                <li class=\"divider\"></li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        <div>\r\n                            <p>\r\n                                <strong>Task 4</strong>\r\n                                <span class=\"pull-right text-muted\">80% Complete</span>\r\n                            </p>\r\n                            <div class=\"progress progress-striped active\">\r\n                                <div class=\"progress-bar progress-bar-danger\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%\">\r\n                                    <span class=\"sr-only\">80% Complete (danger)</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </li>\r\n                <li class=\"divider\"></li>\r\n                <li>\r\n                    <a class=\"text-center\" href=\"#\">\r\n                        <strong>See All Tasks</strong>\r\n                        <i class=\"fa fa-angle-right\"></i>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n            <!-- /.dropdown-tasks -->\r\n        </li>\r\n        <!-- /.dropdown -->\r\n        <li class=\"dropdown\">\r\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n                <i class=\"fa fa-bell fa-fw\"></i> <i class=\"fa fa-caret-down\"></i>\r\n            </a>\r\n            <ul class=\"dropdown-menu dropdown-alerts\">\r\n                <li>\r\n                    <a href=\"#\">\r\n                        <div>\r\n                            <i class=\"fa fa-comment fa-fw\"></i> New Comment\r\n                            <span class=\"pull-right text-muted small\">4 minutes ago</span>\r\n                        </div>\r\n                    </a>\r\n                </li>\r\n                <li class=\"divider\"></li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        <div>\r\n                            <i class=\"fa fa-twitter fa-fw\"></i> 3 New Followers\r\n                            <span class=\"pull-right text-muted small\">12 minutes ago</span>\r\n                        </div>\r\n                    </a>\r\n                </li>\r\n                <li class=\"divider\"></li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        <div>\r\n                            <i class=\"fa fa-envelope fa-fw\"></i> Message Sent\r\n                            <span class=\"pull-right text-muted small\">4 minutes ago</span>\r\n                        </div>\r\n                    </a>\r\n                </li>\r\n                <li class=\"divider\"></li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        <div>\r\n                            <i class=\"fa fa-tasks fa-fw\"></i> New Task\r\n                            <span class=\"pull-right text-muted small\">4 minutes ago</span>\r\n                        </div>\r\n                    </a>\r\n                </li>\r\n                <li class=\"divider\"></li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        <div>\r\n                            <i class=\"fa fa-upload fa-fw\"></i> Server Rebooted\r\n                            <span class=\"pull-right text-muted small\">4 minutes ago</span>\r\n                        </div>\r\n                    </a>\r\n                </li>\r\n                <li class=\"divider\"></li>\r\n                <li>\r\n                    <a class=\"text-center\" href=\"#\">\r\n                        <strong>See All Alerts</strong>\r\n                        <i class=\"fa fa-angle-right\"></i>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n            <!-- /.dropdown-alerts -->\r\n        </li>\r\n        <!-- /.dropdown -->\r\n        <li class=\"dropdown\">\r\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n                <i class=\"fa fa-user fa-fw\"></i> {{ cuser.name }} <i class=\"fa fa-caret-down\"></i>\r\n            </a>\r\n            <ul class=\"dropdown-menu dropdown-user\">\r\n                <li>\r\n                    <a routerLink=\"/dashboard/user\" routerLinkActive=\"\">\r\n                        <i class=\"fa fa-user fa-fw\"></i>\r\n                        Profile\r\n                    </a>\r\n                </li>\r\n                <li><a href=\"#\"><i class=\"fa fa-gear fa-fw\"></i> Settings</a>\r\n                </li>\r\n                <li class=\"divider\"></li>\r\n                <li><a href=\"#\" (click)=\"logout()\"><i class=\"fa fa-sign-out fa-fw\"></i> Logout</a></li>\r\n                <!--<button class=\"waves-effect waves-light btn\" (click)=\"logout()\">Logout</button>-->\r\n            </ul>\r\n            <!-- /.dropdown-user -->\r\n        </li>\r\n        <!-- /.dropdown -->\r\n    </ul>\r\n    <!-- /.navbar-top-links -->\r\n\r\n    <sidebar-dashboard></sidebar-dashboard>\r\n\r\n</nav>\r\n"

/***/ }),

/***/ 551:
/***/ (function(module, exports) {

module.exports = "<div id=\"page-wrapper\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<h1 class=\"page-header\">Place Your Order Here</h1>\r\n\t\t</div>\r\n\t\t<!-- /.col-lg-12 -->\r\n\t</div>\r\n\t<!-- /.row -->\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\tOrder Details {{ coo }}\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t<form role=\"form\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n\t\t\t\t\t\t\t\t<input type=\"hidden\" name=\"_id\" [(ngModel)]=\"newOrder.id\" />\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<label>Event Date</label>\r\n\t\t\t\t\t\t\t\t\t<input type=\"date\" name=\"event_date\" [(ngModel)]=\"newOrder.event_date\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<label>Event Type</label>\r\n\t\t\t\t\t\t\t\t\t<label class=\"radio-inline\" *ngFor=\"let type of eventTypes\">\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"event_type\" [(ngModel)]=\"newOrder.event_type\" id=\"bm\" value=\"{{type.type}}\" checked>{{type.type}}\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<label>Venue</label>\r\n\t\t\t\t\t\t\t\t\t<label class=\"radio-inline\" *ngFor=\"let venue of venues\">\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"venue\" [(ngModel)]=\"newOrder.venue\" id=\"venue1\" value=\"{{venue.name}}\" checked>{{venue.name}}\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<label>Catering</label>\r\n\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"catering\" [(ngModel)]=\"newOrder.catering\">\r\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let catering of caterings\" value=\"{{catering.package}}\">{{catering.package}}</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<label>Service</label>\r\n\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"service\" [(ngModel)]=\"newOrder.service\">\r\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let service of services\" value=\"{{service.name}}\">{{service.name}}</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default\" (click)=\"addThis()\">Save</button>\r\n\t\t\t\t\t\t\t\t<!--<button type=\"reset\" class=\"btn btn-default\">Reset</button>\r\n\t\t\t\t\t\t\t\t<button routerLink=\"/dashboard/\" routerLinkActive=\"\"\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-default\">Cancel</button>-->\r\n\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!--</div>-->\r\n\t\t\t\t\t\t<!-- /.col-lg-6 (nested) -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- /.row (nested) -->\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /.panel-body -->\r\n\t\t\t</div>\r\n\t\t\t<!-- /.panel -->\r\n\t\t</div>\r\n\t\t<!-- /.col-lg-12 -->\r\n\t</div>\r\n\t<!-- /.row -->\r\n</div>\r\n<!-- /#page-wrapper -->\r\n"

/***/ }),

/***/ 552:
/***/ (function(module, exports) {

module.exports = "<div id=\"page-wrapper\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<h1 class=\"page-header\">Event Photos</h1>\r\n\t\t</div>\r\n\t\t<!-- /.col-lg-12 -->\r\n\t</div>\r\n\t<!-- /.row -->\r\n\t<div class=\"row\">\r\n\t\t<button (click)=\"addOne()\">Add</button>\r\n\t\t<button (click)=\"delOne()\">Delete</button>\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<i class=\"fa fa-clock-o fa-fw\"></i> Responsive Timeline\r\n\t\t\t</div>\r\n\t\t\t<!-- /.panel-heading -->\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<ul class=\"timeline\">\r\n\t\t\t\t\t<li *ngFor=\"let photo of photoList\" class=\"{{ photo.style }}\">\r\n\t\t\t\t\t\t<!--<div class=\"timeline-badge\"><i class=\"fa fa-check\"></i></div>-->\r\n\t\t\t\t\t\t<div class=\"timeline-panel\">\r\n\t\t\t\t\t\t\t<div class=\"timeline-heading\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"timeline-title\">{{ photo.name }}</h4>\r\n\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t<small class=\"text-muted\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-clock-o\"></i>\r\n\t\t\t\t\t\t\t\t\t\t{{ photo.caption }}\r\n\t\t\t\t\t\t\t\t\t</small>\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"timeline-body\">\r\n\t\t\t\t\t\t\t\t<img width=\"100%\" src=\"{{ photo.src }}\" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<!--<li class=\"timeline-inverted\">\r\n\t\t\t\t\t\t<div class=\"timeline-badge warning\"><i class=\"fa fa-credit-card\"></i></div>\r\n\t\t\t\t\t\t<div class=\"timeline-panel\">\r\n\t\t\t\t\t\t\t<div class=\"timeline-heading\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"timeline-body\">\r\n\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem quibusdam, tenetur commodi provident cumque\r\n\t\t\t\t\t\t\t\t\tmagni voluptatem libero, quis rerum. Fugiat esse debitis optio, tempore. Animi officiis alias, officia repellendus.</p>\r\n\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores odit qui est tempora eos, nostrum provident\r\n\t\t\t\t\t\t\t\t\texplicabo dignissimos debitis vel! Adipisci eius voluptates, ad aut recusandae minus eaque facere.</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<div class=\"timeline-badge danger\"><i class=\"fa fa-bomb\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"timeline-panel\">\r\n\t\t\t\t\t\t\t<div class=\"timeline-heading\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"timeline-body\">\r\n\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam facilis enim eaque, tenetur nam id\r\n\t\t\t\t\t\t\t\t\tqui vel velit similique nihil iure molestias aliquam, voluptatem totam quaerat, magni commodi quisquam.</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"timeline-inverted\">\r\n\t\t\t\t\t\t<div class=\"timeline-panel\">\r\n\t\t\t\t\t\t\t<div class=\"timeline-heading\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"timeline-body\">\r\n\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates est quaerat asperiores sapiente, eligendi, nihil.\r\n\t\t\t\t\t\t\t\t\tItaque quos, alias sapiente rerum quas odit! Aperiam officiis quidem delectus libero, omnis ut debitis!</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<div class=\"timeline-badge info\"><i class=\"fa fa-save\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"timeline-panel\">\r\n\t\t\t\t\t\t\t<div class=\"timeline-heading\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"timeline-body\">\r\n\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minus modi quam ipsum alias at est molestiae excepturi\r\n\t\t\t\t\t\t\t\t\tdelectus nesciunt, quibusdam debitis amet, beatae consequuntur impedit nulla qui! Laborum, atque.</p>\r\n\t\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-sm dropdown-toggle\" data-toggle=\"dropdown\">\r\n                                                    <i class=\"fa fa-gear\"></i> <span class=\"caret\"></span>\r\n                                                </button>\r\n\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Action</a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Another action</a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Something else here</a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"divider\"></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Separated link</a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<div class=\"timeline-panel\">\r\n\t\t\t\t\t\t\t<div class=\"timeline-heading\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"timeline-body\">\r\n\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fuga odio quibusdam. Iure expedita, incidunt unde\r\n\t\t\t\t\t\t\t\t\tquis nam! Quod, quisquam. Officia quam qui adipisci quas consequuntur nostrum sequi. Consequuntur, commodi.</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"timeline-inverted\">\r\n\t\t\t\t\t\t<div class=\"timeline-badge success\"><i class=\"fa fa-graduation-cap\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"timeline-panel\">\r\n\t\t\t\t\t\t\t<div class=\"timeline-heading\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"timeline-body\">\r\n\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt obcaecati, quaerat tempore officia voluptas debitis\r\n\t\t\t\t\t\t\t\t\tconsectetur culpa amet, accusamus dolorum fugiat, animi dicta aperiam, enim incidunt quisquam maxime neque eaque.</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>-->\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<!-- /.panel-body -->\r\n\t\t</div>\r\n\t</div>\r\n\t<!-- /.row -->\r\n</div>\r\n<!-- /#page-wrapper -->"

/***/ }),

/***/ 553:
/***/ (function(module, exports) {

module.exports = "<div id=\"page-wrapper\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<h1 class=\"page-header\">Services</h1>\r\n\t\t</div>\r\n\t\t<!-- /.col-lg-12 -->\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"panel-body\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-lg-8\">\r\n\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t<table class=\"table table-bordered table-hover table-striped\">\r\n\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th>#</th>\r\n\t\t\t\t\t\t\t\t\t<th>Service</th>\r\n\t\t\t\t\t\t\t\t\t<th>description</th>\r\n\t\t\t\t\t\t\t\t\t<th></th>\r\n\t\t\t\t\t\t\t\t\t<th></th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t\t\t<td><input type=\"text\" name=\"name\" [(ngModel)]=\"formItem.name\" required /></td>\r\n\t\t\t\t\t\t\t\t\t<td><input type=\"text\" name=\"description\" [(ngModel)]=\"formItem.description\" required /></td>\r\n\t\t\t\t\t\t\t\t\t<td><button class=\"btn btn-success\" type=\"submit\" (click)=\"addThis()\">Save</button></td>\r\n\t\t\t\t\t\t\t\t\t<td><button class=\"btn btn-danger\" type='reset' (click)=\"clearThis()\">Reset</button></td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let service of dataList; let i = index\">\r\n\t\t\t\t\t\t\t\t\t<td>{{ i+1 }}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{service.name}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{service.description}}</td>\r\n\t\t\t\t\t\t\t\t\t<td><button class=\"btn btn-primary active\" ng-hide=\"true\" ng-disabled=\"isEditingMode\" (click)=\"updateThis(service)\">Edit</button></td>\r\n\t\t\t\t\t\t\t\t\t<td><button class=\"btn btn-danger active\" ng-disabled=\"isEditingMode\" (click)=\"deleteThis(service._id)\">Delete</button></td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- /.table-responsive -->\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /.col-lg-4 (nested) -->\r\n\t\t\t\t<div class=\"col-lg-8\">\r\n\t\t\t\t\t<div id=\"morris-bar-chart\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /.col-lg-8 (nested) -->\r\n\t\t\t</div>\r\n\t\t\t<!-- /.row -->\r\n\t\t</div>\r\n\t\t<!-- /.panel-body -->\r\n\t</div>\r\n</div>\r\n<!-- /#page-wrapper -->"

/***/ }),

/***/ 554:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"navbar-default sidebar\" role=\"navigation\">\r\n    <div class=\"sidebar-nav navbar-collapse\">\r\n        <ul class=\"nav\" id=\"side-menu\">\r\n            <li class=\"sidebar-search\">\r\n                <div class=\"input-group custom-search-form\">\r\n                    <!--<input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\r\n                    <span class=\"input-group-btn\">\r\n                        <button class=\"btn btn-default\" type=\"button\">\r\n                            <i class=\"fa fa-search\"></i>\r\n                        </button>\r\n                    </span>-->\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <a routerLink=\"/dashboard/\" routerLinkActive=\"\">\r\n                    <i class=\"fa fa-dashboard fa-fw\"></i>Dashboard\r\n                </a>\r\n            </li>\r\n            <!--<li>\r\n                <a routerLink=\"/dashboard/calander\" routerLinkActive=\"active\">\r\n                    <i class=\"fa fa-table fa-fw\"></i>Calander\r\n                </a>\r\n            </li>-->\r\n            <li>\r\n                <a routerLink=\"/dashboard/order\" routerLinkActive=\"\">\r\n                    <i class=\"fa fa-edit fa-fw\"></i>Order\r\n                </a>\r\n            </li>\r\n            <li *ngIf=\"isAdmin\">\r\n                <a routerLink=\"/dashboard/catering\" routerLinkActive=\"\">\r\n                    <i class=\"fa fa-edit fa-fw\"></i>Catering\r\n                </a>\r\n            </li>\r\n            <li *ngIf=\"isAdmin\">\r\n                <a routerLink=\"/dashboard/services\" routerLinkActive=\"\">\r\n                    <i class=\"fa fa-edit fa-fw\"></i>Services\r\n                </a>\r\n            </li>\r\n            <li *ngIf=\"isAdmin\">\r\n                <a routerLink=\"/dashboard/venues\" routerLinkActive=\"\">\r\n                    <i class=\"fa fa-edit fa-fw\"></i>Venues\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a routerLink=\"/dashboard/photos\" routerLinkActive=\"\">\r\n                    <i class=\"fa fa-edit fa-fw\"></i>Photos\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a routerLink=\"/dashboard/feedback\" routerLinkActive=\"\">\r\n                    <i class=\"fa fa-edit fa-fw\"></i>Feedback\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <!-- /.sidebar-collapse -->\r\n</div>\r\n<!-- /.navbar-static-side -->"

/***/ }),

/***/ 555:
/***/ (function(module, exports) {

module.exports = "<div id=\"page-wrapper\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-8\">\r\n\t\t\t<h1 class=\"page-header\">Hello, {{ cuser.name }}</h1>\r\n\t\t</div>\r\n\t\t<!-- /.col-lg-12 -->\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<!--user page-->\r\n\t\t<div class=\"col-lg-8\">\r\n\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t<table class=\"table table-bordered table-hover table-striped\">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th>Name</th>\r\n\t\t\t\t\t\t\t<td>{{ cuser.name }}</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th>email</th>\r\n\t\t\t\t\t\t\t<td>{{cuser.email}}</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th>Password</th>\r\n\t\t\t\t\t\t\t<td>{{cuser.password}}</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th>Address</th>\r\n\t\t\t\t\t\t\t<td>{{cuser.address}}</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th>Phone</th>\r\n\t\t\t\t\t\t\t<td>{{cuser.phone}}</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<!--</thead>\r\n\t\t\t\t\t<tbody>-->\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-primary active\" ng-hide=\"true\" ng-disabled=\"isEditingMode\" (click)=\"updateThis()\">\r\n\t\t\t\t\t\t\t\tEdit\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<!--<button class=\"btn btn-danger active\" ng-disabled=\"isEditingMode\" (click)=\"deleteThis(order._id)\">Delete</button>-->\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t\t<!-- /.table-responsive -->\r\n\t\t</div>\r\n\t</div>\r\n\r\n  <style>\r\n    .ng-valid[required],\r\n    .ng-valid.required {\r\n      border-left: 5px solid #42A948;\r\n      /* green */\r\n    }\r\n\r\n    .ng-invalid:not(form) {\r\n      border-left: 5px solid #a94442;\r\n      /* red */\r\n    }\r\n  </style>\r\n  <div class=\"col-lg-8\">\r\n    <form role=\"form\" (submit)=\"onSubmit()\">\r\n      <table>\r\n        <tr>\r\n          <th>Name</th>\r\n          <td>\r\n            <input type=\"text\" name=\"name\" [(ngModel)]=\"formItem.name\" required />\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th>Email</th>\r\n          <td>\r\n            <input type=\"email\" name=\"email\" [(ngModel)]=\"formItem.email\" required />\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th>Password</th>\r\n          <td>\r\n            <input type=\"password\" name=\"password\" [(ngModel)]=\"formItem.password\" required />\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th>Address</th>\r\n          <td>\r\n            <input type=\"text\" name=\"address\" [(ngModel)]=\"formItem.address\" required />\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th>Phone</th>\r\n          <td>\r\n            <input type=\"tel\" name=\"description\" [(ngModel)]=\"formItem.phone\" required />\r\n          </td>\r\n        </tr>\r\n        <!--<button class=\"btn btn-success\" ng-disabled=\"self.className\" type=\"submit\" (click)=\"addThis()\">Save</button>-->\r\n        <button class=\"btn btn-success\" type=\"submit\" >Save</button>\r\n        <button class=\"btn btn-danger\" type='reset' (click)=\"clearThis()\">Reset</button>\r\n      </table>\r\n    </form>\r\n  </div>\r\n</div>\r\n<!-- /#page-wrapper -->\r\n"

/***/ }),

/***/ 556:
/***/ (function(module, exports) {

module.exports = "<div id=\"page-wrapper\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<h1 class=\"page-header\">Venues</h1>\r\n\t\t</div>\r\n\t\t<!-- /.col-lg-12 -->\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"panel-body\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t<table class=\"table table-bordered table-hover table-striped\">\r\n\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th>#</th>\r\n\t\t\t\t\t\t\t\t\t<th>Name</th>\r\n\t\t\t\t\t\t\t\t\t<th>Description</th>\r\n\t\t\t\t\t\t\t\t\t<th>Location</th>\r\n\t\t\t\t\t\t\t\t\t<th>Event Type</th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t\t\t<td><input type=\"text\" name=\"name\" [(ngModel)]=\"formItem.name\" required /></td>\r\n\t\t\t\t\t\t\t\t\t<td><input type=\"text\" name=\"description\" [(ngModel)]=\"formItem.description\" required /></td>\r\n\t\t\t\t\t\t\t\t\t<td><input type=\"text\" name=\"location\" [(ngModel)]=\"formItem.location\" required /></td>\r\n\t\t\t\t\t\t\t\t\t<!--<td><input type=\"text\" name=\"event_type\" [(ngModel)]=\"formItem.event_type\" required /></td>-->\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"event_type\" [(ngModel)]=\"formItem.event_type\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let et of EventTypes\" value=\"{{et.type}}\">{{ et.type }}</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td><button class=\"btn btn-success\" type=\"submit\" (click)=\"addThis()\">Save</button></td>\r\n\t\t\t\t\t\t\t\t\t<td><button class=\"btn btn-danger\" type='reset' (click)=\"clearThis()\">Reset</button></td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let venue of dataList; let i = index\">\r\n\t\t\t\t\t\t\t\t\t<td>{{ i+1 }}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{venue.name}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{venue.description}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{venue.location}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{venue.event_type}}</td>\r\n\t\t\t\t\t\t\t\t\t<td><button class=\"btn btn-primary active\" ng-hide=\"true\" ng-disabled=\"isEditingMode\" (click)=\"updateThis(venue)\">Edit</button></td>\r\n\t\t\t\t\t\t\t\t\t<td><button class=\"btn btn-danger active\" ng-disabled=\"isEditingMode\" (click)=\"deleteThis(venue._id)\">Delete</button></td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr></tr>\r\n\t\t\t\t\t\t\t\t<tr></tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- /.table-responsive -->\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /.col-lg-4 (nested) -->\r\n\t\t\t\t<div class=\"col-lg-8\">\r\n\t\t\t\t\t<div id=\"morris-bar-chart\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /.col-lg-8 (nested) -->\r\n\t\t\t</div>\r\n\t\t\t<!-- /.row -->\r\n\t\t</div>\r\n\t\t<!-- /.panel-body -->\r\n\t</div>\r\n</div>\r\n<!-- /#page-wrapper -->\r\n"

/***/ }),

/***/ 557:
/***/ (function(module, exports) {

module.exports = "\n    <!-- Bootstrap Core CSS -->\n    <link href=\"/assets/admin/vendor/bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\">\n\n    <!-- MetisMenu CSS -->\n    <!--<link href=\"https://cdnjs.cloudflare.com/ajax/libs/metisMenu/2.7.0/metisMenu.js\" rel=\"stylesheet\">-->\n    <!--<link href=\"/assets/admin/vendor/metisMenu/metisMenu.min.css\" rel=\"stylesheet\">-->\n\n    <!-- Custom CSS -->\n    <link href=\"/assets/admin/dist/css/sb-admin-2.css\" rel=\"stylesheet\">\n\n    <!-- Morris Charts CSS -->\n    <!--<link href=\"https://cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.min.js\" rel=\"stylesheet\">-->\n    <!--<link href=\"/assets/admin/vendor/morrisjs/morris.css\" rel=\"stylesheet\">-->\n\n    <!-- Custom Fonts -->\n    <!--<link href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\" type=\"text/css\">-->\n    <link href=\"/assets/admin/vendor/font-awesome/css/font-awesome.min.css\" rel=\"stylesheet\" type=\"text/css\">\n\n    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->\n    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->\n    <!--[if lt IE 9]>\n        <script src=\"https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\"></script>\n        <script src=\"https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js\"></script>\n    <![endif]-->\n\n\n    <div id=\"wrapper\">\n\n        <!-- Navigation -->\n        <navbar-dashboard></navbar-dashboard>\n<!--<button class=\"waves-effect waves-light btn\" (click)=\"logout()\">Logout</button>-->\n        <router-outlet></router-outlet>\n\n    </div>\n    <!-- /#wrapper -->\n    <!-- jQuery -->\n    <!--<script src=\"../vendor/jquery/jquery.min.js\"></script>-->\n\n    <!-- Bootstrap Core JavaScript -->\n    <!--<script src=\"../vendor/bootstrap/js/bootstrap.min.js\"></script>-->\n\n    <!-- Metis Menu Plugin JavaScript -->\n    <!--<script src=\"https://cdnjs.cloudflare.com/ajax/libs/metisMenu/2.7.0/metisMenu.js\"></script>-->\n\n    <!-- Morris Charts JavaScript -->\n    <!--<script src=\"https://cdnjs.cloudflare.com/ajax/libs/raphael/2.2.7/raphael.min.js\"></script>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.min.js\"></script>-->\n    <!--<script src=\"../data/morris-data.js\"></script>-->\n\n    <!-- Metis Menu Plugin JavaScript -->\n    <!--<script src=\"/assets/admin/vendor/metisMenu/metisMenu.min.js\"></script>-->\n\n    <!-- Morris Charts JavaScript -->\n    <!--<script src=\"/assets/admin/vendor/raphael/raphael.min.js\"></script>\n    <script src=\"/assets/admin/vendor/morrisjs/morris.min.js\"></script>\n    <script src=\"/assets/admin/data/morris-data.js\"></script>-->\n\n    <!-- Custom Theme JavaScript -->\n    <script src=\"/assets/admin/dist/js/sb-admin-2.js\"></script>\n"

/***/ }),

/***/ 558:
/***/ (function(module, exports) {

module.exports = "<!-- Second (About) section -->\r\n<section class=\"section\" id=\"head\">\r\n\t<div class=\"container\">\r\n\t\r\n\t\t<h2 class=\"text-center title\">About us</h2>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-sm-4 col-sm-offset-2\">    \r\n\t\t\t\t<h5><strong>Where's my lorem ipsum?<br></strong></h5>\r\n\t\t\t\t<p>Well, here it is: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, ullam, ducimus, eaque, ex autem est dolore illo similique quasi unde sint rerum magnam quod amet iste dolorem ad laudantium molestias enim quibusdam inventore totam fugit eum iusto ratione alias deleniti suscipit modi quis nostrum veniam fugiat debitis officiis impedit ipsum natus ipsa. Doloremque, id, at, corporis, libero laborum architecto mollitia molestiae maxime aut deserunt sed perspiciatis quibusdam praesentium consectetur in sint impedit voluptates! Deleniti, sequi voluptate recusandae facere nostrum?</p>    \r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t<h5><strong>More, more lipsum!<br></strong></h5>    \r\n\t\t\t\t<p>Tempore, eos, voluptatem minus commodi error aut eaque neque consequuntur optio nesciunt quod quibusdam. Ipsum, voluptatibus, totam, modi perspiciatis repudiandae odio ad possimus molestias culpa optio eaque itaque dicta quod cupiditate reiciendis illo illum aspernatur ducimus praesentium quae porro alias repellat quasi cum fugiat accusamus molestiae exercitationem amet fugit sint eligendi omnis adipisci corrupti. Aspernatur.</p>    \r\n\t\t\t\t<h5><strong>Author links<br></strong></h5>    \r\n\t\t\t\t<p><a href=\"\">Behance</a> / <a href=\"\">Twitter</a> / <a href=\"\">LinkedIn</a> / <a href=\"\">Facebook</a></p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</section>"

/***/ }),

/***/ 559:
/***/ (function(module, exports) {

module.exports = "<!-- Fourth (Contact) section -->\r\n<section class=\"section\" id=\"head\">\r\n\t<div class=\"container\">\r\n\t\r\n\t\t<h2 class=\"text-center title\">Get in touch</h2>\r\n\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-sm-8 col-sm-offset-2 text-center\">\r\n\t\t\t\t<p class=\"lead\">Have a question about this Project, or want to suggest a new feature?</p>\r\n\t\t\t\t<p>Feel free to email me, or drop me a line on E-Mail!</p>\r\n\t\t\t\t<p><b>bc130401488@vu.edu.pk</b><br><br></p>\r\n\t\t\t\t<ul class=\"list-inline list-social\">\r\n\t\t\t\t\t<li><a href=\"\" class=\"btn btn-link\"><i class=\"fa fa-twitter fa-fw\"></i> Twitter</a></li>\r\n\t\t\t\t\t<li><a href=\"\" class=\"btn btn-link\"><i class=\"fa fa-github fa-fw\"></i> Github</a></li>\r\n\t\t\t\t\t<li><a href=\"\" class=\"btn btn-link\"><i class=\"fa fa-linkedin fa-fw\"></i> LinkedIn</a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t</div>\r\n</section>"

/***/ }),

/***/ 560:
/***/ (function(module, exports) {

module.exports = "\n<!-- use \"theme-invert\" class on bright backgrounds, also try \"text-shadows\" class -->\n<div class=\"theme-invert\">\n\n<app-nav></app-nav>\n\n<router-outlet>\n</router-outlet>\n\n<!--<app-main></app-main>\n\n<app-about></app-about>\n\n<app-works></app-works>-->\n\n\n\n\n</div>"

/***/ }),

/***/ 561:
/***/ (function(module, exports) {

module.exports = "<!-- Main (Home) section -->\r\n<section class=\"section\" id=\"head\">\r\n\t<div class=\"container\">\r\n\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-10 col-lg-10 col-md-offset-1 col-lg-offset-1 text-center\">\t\r\n\r\n\t\t\t\t<!-- Site Title, your name, HELLO msg, etc. -->\r\n\t\t\t\t<h1 class=\"title\">FESTIVA</h1>\r\n\t\t\t\t<h2 class=\"subtitle\">Online Event Management System</h2>\r\n\r\n\t\t\t\t<!-- Short introductory (optional) -->\r\n\t\t\t\t<h3 class=\"tagline\">\r\n\t\t\t\t\tAn online event management system for booking Birthday and Marriage ceremonies.<br>\r\n\t\t\t\t\tEasy to Book, feasable and convenient\r\n\t\t\t\t</h3>\r\n\t\t\t\t\r\n\t\t\t\t<!-- Nice place to describe your site in a sentence or two -->\r\n\t\t\t\t<p><a routerLink=\"/dashboard/order\" class=\"btn btn-default btn-lg\">Book your event now.</a></p>\r\n\t\r\n\t\t\t</div> <!-- /col -->\r\n\t\t</div> <!-- /row -->\r\n\t\r\n\t</div>\r\n</section>"

/***/ }),

/***/ 562:
/***/ (function(module, exports) {

module.exports = "<nav class=\"mainmenu\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"dropdown\">\r\n\t\t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"dropdown\"><span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button>\r\n\t\t\t<!-- <a data-toggle=\"dropdown\" href=\"#\">Dropdown trigger</a> -->\r\n\t\t\t<ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dLabel\">\r\n\t\t\t\t<li><a routerLink=\"/\" class=\"active\">Hello</a></li>\r\n\t\t\t\t<li><a routerLink=\"/about\">About us</a></li>\r\n\t\t\t\t<li><a routerLink=\"/works\">Events</a></li>\r\n\t\t\t\t<li><a routerLink=\"/contact\">Get in touch</a></li>\r\n\t\t\t\t<li><a routerLink=\"/dashboard\">Dashboard</a></li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n</nav>"

/***/ }),

/***/ 563:
/***/ (function(module, exports) {

module.exports = "<!-- Third (Works) section -->\n<section class=\"section\" id=\"head\">\n\t<div class=\"container\">\n\t\n\t\t<h2 class=\"text-center title\">Organized Events</h2>\n\t\t<p class=\"lead text-center\">\n\t\t\tThese are some events organized by <a>FESTIVA</a><br>\n\t\t</p>\n\t\t<div class=\"row col-sm-8 col-sm-offset-2\">\n\t\t\t<div class=\"col-sm-6\" *ngFor=\"let event of events; let i = index\" >\n\t\t\t\t<div class=\"thumbnail\">\n\t\t\t\t\t<img src=\"/assets/site/images/body{{ i+1 }}.jpg\" alt=\"\">\n\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t<h3>{{ event.event_type }}</h3>\n\t\t\t\t\t\t<p>This event is organized on behalf of Mr. {{ event.fkey[0].name }} on {{ event.event_date }}.</p>\n\t\t\t\t\t\t<p><a href=\"/dashboard/photos/\" class=\"btn btn-primary\" role=\"button\">View</a> <a href=\"/dashboard/feedback/\" class=\"btn btn-default\" role=\"button\">Feedback</a></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!--<div class=\"col-sm-4\">\n\t\t\t\t<div class=\"thumbnail\">\n\t\t\t\t\t<img src=\"/assets/site/images/body2.jpg\" alt=\"\">\n\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t<h3>Thumbnail label</h3>\n\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque doloribus enim vitae nam cupiditate eius at explicabo eaque facere iste.</p>\n\t\t\t\t\t\t<p><a href=\"#\" class=\"btn btn-primary\" role=\"button\">Button</a> <a href=\"#\" class=\"btn btn-default\" role=\"button\">Button</a></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t<div class=\"thumbnail\">\n\t\t\t\t\t<img src=\"/assets/site/images/body3.jpg\" alt=\"\">\n\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t<h3>Thumbnail label</h3>\n\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque doloribus enim vitae nam cupiditate eius at explicabo eaque facere iste.</p>\n\t\t\t\t\t\t<p><a href=\"#\" class=\"btn btn-primary\" role=\"button\">Button</a> <a href=\"#\" class=\"btn btn-default\" role=\"button\">Button</a></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t<div class=\"thumbnail\">\n\t\t\t\t\t<img src=\"/assets/site/images/body4.jpg\" alt=\"\">\n\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t<h3>Thumbnail label</h3>\n\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque doloribus enim vitae nam cupiditate eius at explicabo eaque facere iste.</p>\n\t\t\t\t\t\t<p><a href=\"#\" class=\"btn btn-primary\" role=\"button\">Button</a> <a href=\"#\" class=\"btn btn-default\" role=\"button\">Button</a></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>-->\n\n\t\t</div>\n\n\t</div>\n</section>"

/***/ }),

/***/ 564:
/***/ (function(module, exports) {

module.exports = "    <link href=\"/assets/dist/css/sb-admin-2.css\" rel=\"stylesheet\">\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4 col-md-offset-4\">\r\n            <div class=\"login-panel panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                    <h3 class=\"panel-title\">Please Sign In</h3>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <form role=\"form\" (submit)=\"login($event)\">\r\n                        <fieldset>\r\n                            <div class=\"form-group\">\r\n                                <input class=\"form-control\" placeholder=\"Name / E-Mail\"\r\n                                    name=\"name\" type=\"text\" [(ngModel)]=\"localUser.name\"\r\n                                    autofocus required\r\n                                >\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <input class=\"form-control\" placeholder=\"Password\"\r\n                                    name=\"pass\" type=\"password\" [(ngModel)]=\"localUser.pass\"\r\n                                    required\r\n                                >\r\n                            </div>\r\n                            <div class=\"checkbox\">\r\n                                <label>\r\n                                    <!--<input name=\"remember\" type=\"checkbox\" value=\"Remember Me\">Remember Me-->\r\n                                </label>\r\n                            </div>\r\n                            <!-- Change this to a button or input when using this as a form -->\r\n                            <!--<a class=\"btn btn-lg btn-success btn-block\">Login</a>-->\r\n                          <button class=\"btn btn-lg btn-success btn-block\" type=\"submit\">login</button>\r\n                          <a class=\"btn btn-lg btn-default btn-block\" routerLink=\"/signup\" routerLinkActive=\"\" >Signup</a>\r\n                          <a class=\"btn btn-lg btn-default btn-block\" routerLink=\"/\" routerLinkActive=\"\" >Back to Site</a>\r\n                        </fieldset>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 565:
/***/ (function(module, exports) {

module.exports = "    <link href=\"/assets/dist/css/sb-admin-2.css\" rel=\"stylesheet\">\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4 col-md-offset-4\">\r\n            <div class=\"login-panel panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                    <h3 class=\"panel-title\">Please Sign Up</h3>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <form role=\"form\" (submit)=\"signup($event)\">\r\n                        <fieldset>\r\n                            <div class=\"form-group\">\r\n                                <input class=\"form-control\" placeholder=\"Owais Naseem\"\r\n                                    name=\"name\" type=\"text\" [(ngModel)]=\"obj.name\"\r\n                                    autofocus required\r\n                                >\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <input class=\"form-control\" placeholder=\"owais@festiva.com\"\r\n                                    name=\"email\" type=\"email\" [(ngModel)]=\"obj.email\"\r\n                                    required\r\n                                >\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <input class=\"form-control\" placeholder=\"Password\"\r\n                                    name=\"password\" type=\"password\" [(ngModel)]=\"obj.pass\"\r\n                                    required\r\n                                >\r\n                            </div>\r\n                            <!--<div class=\"form-group\">\r\n                                <input class=\"form-control\" placeholder=\"Password\"\r\n                                    name=\"cpass\" type=\"password\" [(ngModel)]=\"cpass\"\r\n                                    required\r\n                                >\r\n                            </div>-->\r\n                            <div class=\"form-group\">\r\n                                <input class=\"form-control\" placeholder=\"St. 1, Block 2, Karachi.\"\r\n                                    name=\"address\" type=\"text\" [(ngModel)]=\"obj.address\"\r\n                                    required\r\n                                >\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <input class=\"form-control\" placeholder=\"0321-1234567\"\r\n                                    name=\"phone\" type=\"number\" [(ngModel)]=\"obj.phone\"\r\n                                    required\r\n                                >\r\n                            </div>\r\n                            <div class=\"checkbox\">\r\n                                <label> {{ successMsg }}\r\n                                    <!--<input name=\"remember\" type=\"checkbox\" value=\"Remember Me\">Remember Me-->\r\n                                </label>\r\n                            </div>\r\n                            <!-- Change this to a button or input when using this as a form -->\r\n                            <!--<a class=\"btn btn-lg btn-success btn-block\">Login</a>-->\r\n                            <button class=\"btn btn-lg btn-success btn-block\" type=\"submit\">Signup</button>\r\n                          <a class=\"btn btn-lg btn-default btn-block\" routerLink=\"/login\" routerLinkActive=\"\" >Login Page</a>\r\n                          <a class=\"btn btn-lg btn-default btn-block\" routerLink=\"/\" routerLinkActive=\"\" >Back to Site</a>\r\n                        </fieldset>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 566:
/***/ (function(module, exports) {

module.exports = "<p>\n  testcomp works!\n</p>\n"

/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(344);


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = routerTransition;

function routerTransition() {
    return fadeIn();
}
function slideToRight() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* trigger */])('routerTransition', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* state */])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ position: 'fixed', width: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ position: 'fixed', width: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ transform: 'translateX(-100%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ transform: 'translateX(0%)' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* transition */])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ transform: 'translateX(0%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* trigger */])('routerTransition', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* state */])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ position: 'fixed', width: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ position: 'fixed', width: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ transform: 'translateX(100%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ transform: 'translateX(0%)' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* transition */])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ transform: 'translateX(0%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* trigger */])('routerTransition', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* state */])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ position: 'fixed', width: '100%', height: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ position: 'fixed', width: '100%', height: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ transform: 'translateY(-100%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ transform: 'translateY(0%)' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* transition */])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ transform: 'translateY(0%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* trigger */])('routerTransition', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* state */])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ position: 'fixed', width: '100%', height: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ position: 'fixed', width: '100%', height: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ transform: 'translateY(100%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ transform: 'translateY(0%)' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* transition */])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ transform: 'translateY(0%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ transform: 'translateY(-100%)' }))
        ])
    ]);
}
function fadeIn() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* trigger */])('routerTransition', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* state */])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ position: 'fixed', width: '100%', height: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ position: 'fixed', width: '100%', height: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ opacity: '0' }),
            // animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ opacity: '1' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* transition */])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ opacity: '1' }),
            // animate('0.5s ease-in-out', style({transform: 'translateY(-100%)'}))
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ opacity: '0' }))
        ])
    ]);
}
//# sourceMappingURL=route.animation.js.map

/***/ })

},[584]);
//# sourceMappingURL=main.bundle.js.map