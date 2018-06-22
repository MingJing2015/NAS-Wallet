webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_card_list_card_list_component__ = __webpack_require__("./src/app/views/card-list/card-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_wallet_details_wallet_details_component__ = __webpack_require__("./src/app/views/wallet-details/wallet-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_contract_details_contract_details_component__ = __webpack_require__("./src/app/views/contract-details/contract-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { CommonModule } from '@angular/common';




// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: []
// })
var routes = [
    { path: '', redirectTo: 'CardList', pathMatch: 'full' },
    { path: 'CardList', component: __WEBPACK_IMPORTED_MODULE_2__views_card_list_card_list_component__["a" /* CardListComponent */] },
    { path: 'WalletDetails', component: __WEBPACK_IMPORTED_MODULE_3__views_wallet_details_wallet_details_component__["a" /* WalletDetailsComponent */] },
    { path: 'ContractDetails', component: __WEBPACK_IMPORTED_MODULE_4__views_contract_details_contract_details_component__["a" /* ContractDetailsComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <!--\n    <nav class=\"navbar navbar-inverse\">\n      <div class=\"container\">\n          <div class=\"navbar-header\">\n              <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\"\n                      data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n                  <span class=\"sr-only\">Toggle navigation</span>\n                  <span class=\"icon-bar\"></span>\n                  <span class=\"icon-bar\"></span>\n                  <span class=\"icon-bar\"></span>\n              </button>\n              <a class=\"navbar-brand\" href=\"\"><span class=\"glyphicon glyphicon-home\"></span> Home</a>\n          </div>\n          <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n          </div>\n      </div>\n  </nav>\n  -->\n  \n  <!--\n  <div id=\"header-container\">\n    <div class=\"container\">\n\t<div id=\"header\">\n        <a id=\"logo\"><img src=\"assets/imgs/logo-b.png\"></a>\n    </div>\n    </div>\n</div>\n<hr>\n-->\n\n\n  <!--<div>cards info list</div>\n    <student-list></student-list>-->\n\n    <!--\n    <card-list></card-list>\n    <app-wallet-details></app-wallet-details>\n    -->\n  <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_student_details_student_details_component__ = __webpack_require__("./src/app/views/student-details/student-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_student_list_student_list_component__ = __webpack_require__("./src/app/views/student-list/student-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_card_details_card_details_component__ = __webpack_require__("./src/app/views/card-details/card-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_card_list_card_list_component__ = __webpack_require__("./src/app/views/card-list/card-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_wallet_details_wallet_details_component__ = __webpack_require__("./src/app/views/wallet-details/wallet-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_contract_details_contract_details_component__ = __webpack_require__("./src/app/views/contract-details/contract-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










 // For remote service, can not use HttpClientModule ?



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__views_student_details_student_details_component__["a" /* StudentDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__views_student_list_student_list_component__["a" /* StudentListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__views_card_details_card_details_component__["a" /* CardDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__views_card_list_card_list_component__["a" /* CardListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__views_wallet_details_wallet_details_component__["a" /* WalletDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__views_contract_details_contract_details_component__["a" /* ContractDetailsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/defineClass.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Student; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Card; });
/* unused harmony export CardBalance */
/* unused harmony export NetState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PwdChangeStatusModel; });
/* unused harmony export NetStatusResult */
/* unused harmony export NetStatusModel */
/* unused harmony export signedTransaction */
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());

var Card = /** @class */ (function () {
    function Card() {
    }
    return Card;
}());

var CardBalance = /** @class */ (function () {
    function CardBalance() {
    }
    return CardBalance;
}());

var NetState = /** @class */ (function () {
    function NetState() {
    }
    return NetState;
}());

var PwdChangeStatusModel = /** @class */ (function () {
    function PwdChangeStatusModel() {
    }
    return PwdChangeStatusModel;
}());

var NetStatusResult = /** @class */ (function () {
    function NetStatusResult() {
    }
    return NetStatusResult;
}());

var NetStatusModel = /** @class */ (function () {
    function NetStatusModel() {
    }
    return NetStatusModel;
}());

var signedTransaction = /** @class */ (function () {
    function signedTransaction() {
    }
    return signedTransaction;
}());



/***/ }),

/***/ "./src/app/services/card.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/****************
 *
 *  By \routes\card.js (Node.js API service, to access Mongo DB for card/wallet/account info )
 *
 *  Used at card-list and card-details component
 *
 ***************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import 'rxjs/add/operator/toPromise';
var CardService = /** @class */ (function () {
    function CardService(http) {
        this.http = http;
        //private cardsUrl = '/api/cards';                            // For Internet !!!!!!!!!!!!!!!!!!!!!!!!!!!
        this.cardsUrl = 'http://127.0.0.1:3000/api/cards'; // For local debug, need open CORS on Chrome 
    }
    // get("/api/cards")
    CardService.prototype.getCards = function () {
        return this.http.get(this.cardsUrl)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    // post("/api/cards")
    CardService.prototype.createCard = function (newCard) {
        return this.http.post(this.cardsUrl, newCard)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    // get("/api/cards/:id") endpoint not used by Angular app
    // delete("/api/cards/:id")
    CardService.prototype.deleteCard = function (delCardId) {
        return this.http.delete(this.cardsUrl + '/' + delCardId)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    // put("/api/cards/:id")
    CardService.prototype.updateCard = function (putCard) {
        console.log("account info update ... PUT() ..... ");
        var putUrl = this.cardsUrl + '/' + putCard._id;
        return this.http.put(putUrl, putCard)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    // get card Balance by CardAddress
    CardService.prototype.refreashCard = function (cardAddress) {
        console.log("In card service : refreashCard ..." + cardAddress);
        // private cardsBalanceUrl = '/api/cardsBalance';   -- get API service by cards.js in routes folder
        return this.http.get(this.cardsUrl + '/' + cardAddress)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    CardService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
    };
    CardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CardService);
    return CardService;
}());



/***/ }),

/***/ "./src/app/services/contract.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import 'rxjs/add/operator/toPromise';
var ContractService = /** @class */ (function () {
    function ContractService(http) {
        this.http = http;
        //private contractUrl = '/api/contracts';
        this.contractUrl = 'http://127.0.0.1:3000/api/contracts'; // For local debug, need open CORS on Chrome 
    }
    // Check TX Status
    ContractService.prototype.getContracts = function (hash) {
        //getContracts(): Promise<any | void> {
        return this.http.get(this.contractUrl + '/' + hash)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    ContractService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
    };
    // 2. 测试合约
    ContractService.prototype.testTransaction = function (data) {
        var info = data.toAddress + '`' + data.nonce.toString() + '`' + data.value + '`' + data.contractAddress;
        var putUrl = this.contractUrl + '/' + info;
        //var putUrl = this.studentsUrl + '/' + "n1RaCeVeLxzJG2yLwE155y2S6EqjWeVboqJ";
        return this.http.put(putUrl, data)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    // 3. 执行合约 Call
    ContractService.prototype.callTransaction = function (file, data) {
        //var info = data.toAddress + ' ' + data.nonce.toString() + ' ' + data.value;
        var info = data.toAddress + '`' + data.password + '`' + data.nonce.toString() + '`' + data.value + '`' + data.function + '`' + data.arguments;
        // , 'function': this.function, 'arguments': this.arguments 
        var putUrl = this.contractUrl + '/' + info;
        //var putUrl = this.studentsUrl + '/' + "n1RaCeVeLxzJG2yLwE155y2S6EqjWeVboqJ";
        console.log(file);
        console.log(info);
        return this.http.post(putUrl, file)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    ContractService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ContractService);
    return ContractService;
}());



/***/ }),

/***/ "./src/app/services/remote.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_defineClass__ = __webpack_require__("./src/app/models/defineClass.ts");
/****************
 *
 *  By Nebulas API service, to access wallet/account info )
 *
 *  Used at contract-details component
 *
 ***************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RemoteService = /** @class */ (function () {
    function RemoteService(http) {
        this.http = http;
        this.site = "https://pacific-plains-55185.herokuapp.com/";
    }
    RemoteService.prototype.getNetState = function () {
        //let url  = this.site + 'api/students';
        var url = 'https://testnet.nebulas.io/v1/user/nebstate';
        //let url =  'http://localhost:8685/v1/user/nebstate';
        console.log(url);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' }); // For mean
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(url, options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RemoteService.prototype.getAccountState = function (address) {
        var _this = this;
        //let url  = this.site + 'api/students';
        //let url = 'http://localhost:8685/v1/user/accountstate';
        var url = 'https://testnet.nebulas.io/v1/user/accountstate';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' }); // For mean
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        //return this.http.post(url, {"address":"n1MjR3J28LPYGSVNGYC8DWsM7VJaAqqPnWH"}, options)  // local address
        return this.http.post(url, { "address": address }, options) // Test net address
            .toPromise()
            .then(function (response) { return _this.parsePwdChangeData(response); })
            .catch(this.handleError);
    };
    // Retreival of JSON from .NET is a success.
    // I had trouble parsing the passwordChange response with extractData so I 
    // created this custom function to do it.
    RemoteService.prototype.parsePwdChangeData = function (res) {
        var pwdChangeStatus = new __WEBPACK_IMPORTED_MODULE_3__models_defineClass__["b" /* PwdChangeStatusModel */]();
        pwdChangeStatus._body = res["_body"];
        pwdChangeStatus.status = res["status"];
        pwdChangeStatus.statusText = res["statusText"];
        return pwdChangeStatus || {};
    };
    // Retreival of JSON from .NET is a success.
    RemoteService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    // An error occurred. Notify the user.
    RemoteService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(errMsg);
    };
    // Resolve circular references from JSON object
    // http://stackoverflow.com/questions/15312529/resolve-circular-references-from-json-object
    // JSON and XML Serialization in ASP.NET Web API
    // https://docs.microsoft.com/en-us/aspnet/web-api/overview/formats-and-model-binding/json-and-xml-serialization#handling_circular_object_references
    RemoteService.prototype.resolveReferences = function (json) {
        if (typeof json === 'string')
            json = JSON.parse(json);
        var byid = {}, // all objects by id
        refs = []; // references to objects that could not be resolved
        json = (function recurse(obj, prop, parent) {
            if (typeof obj !== 'object' || !obj)
                return obj;
            if ("$ref" in obj) {
                var ref = obj.$ref;
                if (ref in byid)
                    return byid[ref];
                // else we have to make it lazy:
                refs.push([parent, prop, ref]);
                return;
            }
            else if ("$id" in obj) {
                var id = obj.$id;
                delete obj.$id;
                if ("$values" in obj)
                    obj = obj.$values.map(recurse);
                else
                    for (var prop_1 in obj)
                        obj[prop_1] = recurse(obj[prop_1], prop_1, obj);
                byid[id] = obj;
            }
            return obj;
        })(json); // run it!
        for (var i = 0; i < refs.length; i++) {
            var ref = refs[i];
            ref[0][ref[1]] = byid[refs[2]];
            // Notice that this throws if you put in a reference at top-level
        }
        return json;
    };
    RemoteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], RemoteService);
    return RemoteService;
}());



/***/ }),

/***/ "./src/app/services/student.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/****************
 *
 *  By \routes\student.js (Nebulas.js lib functions to access NAS wallet/account info )
 *
 *  Used at wallet-list and wallet-details components
 *
 ***************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import 'rxjs/add/operator/toPromise';
var StudentService = /** @class */ (function () {
    function StudentService(http) {
        this.http = http;
        //private studentsUrl = '/api/students';                              // For internet  !!!!!!!!!!!!!!!!!!!!!!!!!!!
        this.studentsUrl = 'http://127.0.0.1:3000/api/students'; // For local debug, need open CORS on Chrome 
    }
    // get("/api/students")
    StudentService.prototype.getStudents = function () {
        return this.http.get(this.studentsUrl)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    // get("/api/student/id")
    StudentService.prototype.getStudent = function (student) {
        return this.http.get(this.studentsUrl)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    StudentService.prototype.getAccountState = function (cardAddress) {
        console.log("In card service : refreashCard ..." + cardAddress);
        // private cardsBalanceUrl = '/api/cardsBalance';   -- get API service by cards.js in routes folder
        return this.http.get(this.studentsUrl + '/' + cardAddress)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    // 1. 账户解锁
    StudentService.prototype.postAccount = function (file) {
        console.log(file);
        console.log(file.name);
        return this.http.post(this.studentsUrl, file)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    // 2. 生成签名
    StudentService.prototype.putTransaction = function (file, data) {
        var info = data.toAddress + ' ' + data.nonce.toString() + ' ' + data.value;
        var putUrl = this.studentsUrl + '/' + info;
        //var putUrl = this.studentsUrl + '/' + "n1RaCeVeLxzJG2yLwE155y2S6EqjWeVboqJ";
        console.log(file);
        console.log(info);
        return this.http.put(putUrl, file)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    // 3. 发送交易
    StudentService.prototype.deleteStudent = function (delStudentId) {
        return this.http.delete(this.studentsUrl + '/' + delStudentId)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    // put("/api/students/:id")
    StudentService.prototype.updateStudent = function (putStudent) {
        var putUrl = this.studentsUrl + '/' + putStudent._id;
        return this.http.put(putUrl, putStudent)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    StudentService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
    };
    // post("/api/students")
    StudentService.prototype.createStudent = function (newStudent) {
        return this.http.post(this.studentsUrl, newStudent)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    StudentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], StudentService);
    return StudentService;
}());



/***/ }),

/***/ "./src/app/views/card-details/card-details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/card-details/card-details.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<div *ngIf=\"card\" class=\"row\" >\n  <div class=\"col-md-12\">\n    <h3 *ngIf=\"card._id\">Details</h3>\n    <h3 *ngIf=\"!card._id\">Add wallete</h3>\n  </div>\n</div>\n<div *ngIf=\"card\" class=\"row\">\n  <form class=\"col-md-12\">\n    <div class=\"form-group\">\n      <label for=\"card-OwnerName\">Owner</label>\n      <input class=\"form-control\" name=\"card-OwnerName\" [(ngModel)]=\"card.OwnerName\" placeholder=\"Wallet owner name\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"card-CardName\">Wallet name</label>\n      <input class=\"form-control\" name=\"card-CardName\" [(ngModel)]=\"card.CardName\" placeholder=\"Wallet name\"/>\n    </div>\t\n    <div class=\"form-group\">\n      <label for=\"card-CardAddress\">Address</label>\n      <input class=\"form-control\" name=\"card-CardAddress\" [(ngModel)]=\"card.CardAddress\" placeholder=\"Address\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"card-Password\">Password</label>\n      <input class=\"form-control\" name=\"card-Password\" [(ngModel)]=\"card.Password\" placeholder=\"Password\"/>\n    </div>\n    <div *ngIf=\"card._id\" class=\"form-group\">\n      <label for=\"card-start-date\">date</label>\n      <input class=\"form-control\" name=\"card-start-date\" [(ngModel)]=\"card.StartDate\" placeholder=\"\"/>\n    </div>\n    \n    <div *ngIf=\"card._id\" class=\"form-group\">\n      <label for=\"card-Balance\">Balance</label>\n      <input class=\"form-control\" name=\"card-Balance\" [(ngModel)]=\"balance\" placeholder=\"\"/>\n    </div>\n    \n    <div *ngIf=\"card._id\" class=\"form-group\">\n      <label for=\"card-Nonce\">Nonce</label>\n      <input class=\"form-control\" name=\"card-Nonce\" [(ngModel)]=\"nonce\" placeholder=\"\"/>\n    </div>\n\n    <button class=\"btn btn-primary col-lg-3 col-md-3 col-sm-3\" *ngIf=\"!card._id\" (click)=\"createCard(card)\">Save</button>\n    <button class=\"btn btn-info col-lg-3 col-md-3 col-sm-3\"    *ngIf=\"card._id\" (click)=\"updateCard(card)\">Modify</button>\n    <button class=\"btn btn-danger col-lg-3 col-md-3 col-sm-3\"  *ngIf=\"card._id\" (click)=\"deleteCard(card._id)\">Delete</button><br/>\n\n    <!--\n    <button class=\"btn btn-info\" *ngIf=\"card.CardAddress\" (click)=\"refreashCard(card.CardAddress)\">查看详情</button>\n    -->\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/views/card-details/card-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_defineClass__ = __webpack_require__("./src/app/models/defineClass.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_card_service__ = __webpack_require__("./src/app/services/card.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CardDetailsComponent = /** @class */ (function () {
    function CardDetailsComponent(cardService) {
        this.cardService = cardService;
    }
    CardDetailsComponent.prototype.createCard = function (card) {
        var _this = this;
        if (!card.OwnerName || !card.CardName || !card.CardAddress) {
            return;
        }
        this.cardService.createCard(card).then(function (newCard) {
            _this.createHandler(newCard);
        });
    };
    CardDetailsComponent.prototype.updateCard = function (card) {
        var _this = this;
        this.cardService.updateCard(card).then(function (updatedCard) {
            _this.updateHandler(updatedCard);
        });
    };
    CardDetailsComponent.prototype.deleteCard = function (cardId) {
        var _this = this;
        this.cardService.deleteCard(cardId).then(function (deletedcardId) {
            console.log("Delete card ID: " + cardId);
            // deletedcardId is wrong ID ??  Why ??
            _this.deleteHandler(cardId);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_defineClass__["a" /* Card */])
    ], CardDetailsComponent.prototype, "card", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CardDetailsComponent.prototype, "balance", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CardDetailsComponent.prototype, "nonce", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Function)
    ], CardDetailsComponent.prototype, "createHandler", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Function)
    ], CardDetailsComponent.prototype, "updateHandler", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Function)
    ], CardDetailsComponent.prototype, "deleteHandler", void 0);
    CardDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'card-details',
            template: __webpack_require__("./src/app/views/card-details/card-details.component.html"),
            styles: [__webpack_require__("./src/app/views/card-details/card-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_card_service__["a" /* CardService */]])
    ], CardDetailsComponent);
    return CardDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/card-list/card-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/card-list/card-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"form-group pull-right col-lg-2 col-md-2 col-sm-2\" style=\"padding-top: 12px;\">\n        <select class=\"form-control\" id=\"net\" required [(ngModel)]=\"netType\" (change)=\"onNetChange()\" name='net'>\n            <option *ngFor=\"let item1 of netTypeArr\" [value]=\"item1.value\">{{item1.name}}</option>\n        </select>\n    </div>\n\n    <a id=\"logo\">\n        <img src=\"assets/imgs/logo-b.png\">\n    </a>\n</div>\n\n<nav class=\"navbar navbar-inverse\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n                aria-expanded=\"false\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">\n                <img alt=\"Nebulas\" src=\"assets/imgs/icon_19.png\">\n            </a>\n            <a class=\"navbar-brand\" href=\"#\">NAS Wallet Library</a>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n                <li *ngFor=\"let item of menuMyItems\" class={{item.active}}>\n                    <a routerLink={{item.path}}{{item.parameterID}}{{item.random}} routerLinkActive=\"active fluffy\">{{item.linkName}}</a>\n                </li>\n                <!--<li  *ngFor=\"let item of menuMyItems\" class={{item.active}}><a routerLink={{item.path}}{{item.parameterID}} routerLinkActive=\"active fluffy\">{{item.linkName}}</a></li>-->\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a routerLink=\"/ContractDetails\" routerLinkActive=\"active fluffy\">\n                        <span class=\"glyphicon glyphicon-edit\"></span> Contracts</a>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a routerLink=\"/WalletDetails\" routerLinkActive=\"active fluffy\">\n                        <span class=\"glyphicon glyphicon-usd\"></span> Transactions</a>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li class='active'>\n                    <a routerLink=\"/CardList\" routerLinkActive=\"active fluffy\">\n                        <span class=\"glyphicon glyphicon-list\"></span> Wallets</a>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n\n            </ul>\n        </div>\n    </div>\n</nav>\n\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <h3>Wallet Listing</h3>\n            <ul class=\"list-group\">\n                <li class=\"list-group-item\" *ngFor=\"let s of cards\" (click)=\"selectCard(s)\" [class.active]=\"s === selectedCard\">\n                    {{s.OwnerName}} {{s.CardName}} {{s.CardAddress}}\n                </li>\n            </ul>\n            <button class=\"btn btn-info col-lg-3 col-md-3 col-sm-3\" (click)=\"createNewCard()\">Add</button>\n            <button class=\"btn btn-warning col-lg-3 col-md-3 col-sm-3\" (click)=\"showNetState()\">Net State</button>\n\n            <h3 *ngIf=\"Chain_ID\" >NAS Net Infomation</h3>\n            <ul *ngIf=\"Chain_ID\" class=\"list-group\">\n                <li class=\"list-group-item\">Chain_ID: {{Chain_ID}}</li>\n                <li class=\"list-group-item\">Height: {{Height}}</li>\n                <li class=\"list-group-item\">Lib: {{Lib}}</li>\n                <li class=\"list-group-item\">Protocol_version: {{Protocol_version}}}</li>\n                <li class=\"list-group-item\">Synchronized: {{Synchronized}}</li>\n                <li class=\"list-group-item\">Tail: {{Tail}}</li>\n                <li class=\"list-group-item\">Version: {{Version}}</li>\n\n            </ul>\n        </div>\n\n        <div class=\"col-md-5 col-md-offset-1\">\n            <card-details [card]=\"selectedCard\" [balance]=\"balance\" [nonce]=\"nonce\" [createHandler]=\"addCard\" [updateHandler]=\"updateCard\"\n                [deleteHandler]=\"deleteCard\">\n            </card-details>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/views/card-list/card-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Result */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_card_service__ = __webpack_require__("./src/app/services/card.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_remote_service__ = __webpack_require__("./src/app/services/remote.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Result = /** @class */ (function () {
    function Result() {
    }
    return Result;
}());

var CardListComponent = /** @class */ (function () {
    function CardListComponent(CardService, remoteService) {
        var _this = this;
        this.CardService = CardService;
        this.remoteService = remoteService;
        this.balance = null;
        this.nonce = null;
        // For Setect Net
        this.netTypeArr = [
            { value: '0', name: "Testnet" },
            { value: '1', name: "Local nodes" },
            { value: '2', name: "Mainnet" },
        ];
        this.netType = '0';
        this.getIndexOfCard = function (cardId) {
            return _this.cards.findIndex(function (card) {
                return card._id === cardId;
            });
        };
        this.deleteCard = function (cardId) {
            var idx = _this.getIndexOfCard(cardId);
            console.log("Delete ID: " + idx);
            if (idx !== -1) {
                console.log("Delete ID: " + idx);
                console.log("cards before size: " + _this.cards.length);
                _this.cards.splice(idx, 1);
                console.log("cards after size: " + _this.cards.length);
                _this.selectCard(null);
            }
            return _this.cards;
        };
        this.addCard = function (card) {
            _this.cards.push(card);
            _this.selectCard(card);
            return _this.cards;
        };
        this.updateCard = function (card) {
            var idx = _this.getIndexOfCard(card._id);
            if (idx !== -1) {
                _this.cards[idx] = card;
                _this.selectCard(card);
            }
            return _this.cards;
        };
    }
    CardListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.CardService
            .getCards()
            .then(function (cards) {
            _this.cards = cards.map(function (card) {
                return card;
            });
        });
    };
    CardListComponent.prototype.selectCard = function (card) {
        var _this = this;
        this.selectedCard = card;
        this.balance = '';
        this.nonce = '';
        //this.CardService.refreashCard(card.CardAddress).then((cardBalance: CardBalance) => {
        this.remoteService.getAccountState(card.CardAddress).then(function (cardBalance) {
            console.log("Got from cardService.refreashCard of card-details.ts ");
            console.log(cardBalance);
            //console.log(cardBalance._body);
            //this.cardBalance = JSON.parse(cardBalance._body);
            //console.log(this.cardBalance);
            _this.resultData = JSON.parse(cardBalance._body);
            //console.log(this.resultData.result.balance);
            //console.log(this.resultData.result.nonce);
            var dataBalance = Number(_this.resultData.result.balance) / 1000000000000000000.0;
            if (!isNaN(dataBalance))
                _this.balance = dataBalance.toString() + ' NAS';
            else
                _this.balance = '';
            _this.nonce = _this.resultData.result.nonce;
        });
    };
    CardListComponent.prototype.showNetState = function () {
        var _this = this;
        //this.remoteService.getNetState().then((netState: NetState) => {
        this.remoteService.getNetState()
            .then(function (netState) {
            console.log(netState);
            _this.Chain_ID = netState.result.chain_id;
            _this.Height = netState.result.height;
            _this.Lib = netState.result.lib;
            _this.Protocol_version = netState.result.protocol_version;
            _this.Synchronized = netState.result.synchronized;
            _this.Tail = netState.result.tail;
            _this.Version = netState.result.version;
        });
    };
    CardListComponent.prototype.createNewCard = function () {
        var card = {
            OwnerName: '',
            CardName: '',
            CardAddress: '',
            Password: '',
            StartDate: new Date()
        };
        this.balance = '';
        this.nonce = '';
        // By default, a newly-created contact will have the selected state.
        this.selectCard(card);
    };
    CardListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'card-list',
            template: __webpack_require__("./src/app/views/card-list/card-list.component.html"),
            styles: [__webpack_require__("./src/app/views/card-list/card-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_card_service__["a" /* CardService */], __WEBPACK_IMPORTED_MODULE_2__services_remote_service__["a" /* RemoteService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_card_service__["a" /* CardService */],
            __WEBPACK_IMPORTED_MODULE_2__services_remote_service__["a" /* RemoteService */]])
    ], CardListComponent);
    return CardListComponent;
}());



/***/ }),

/***/ "./src/app/views/contract-details/contract-details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/contract-details/contract-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"form-group pull-right col-lg-2 col-md-2 col-sm-2\" style=\"padding-top: 12px;\">\n        <select class=\"form-control\" id=\"net\" required [(ngModel)]=\"netType\" (change)=\"onNetChange()\" name='net'>\n            <option *ngFor=\"let item1 of netTypeArr\" [value]=\"item1.value\">{{item1.name}}</option>\n        </select>\n    </div>\n    <a id=\"logo\">\n        <img src=\"assets/imgs/logo-b.png\">\n    </a>\n</div>\n\n<nav class=\"navbar navbar-inverse\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n                aria-expanded=\"false\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">\n                <img alt=\"Nebulas\" src=\"assets/imgs/icon_19.png\">\n            </a>\n            <a class=\"navbar-brand\" href=\"#\">NAS Wallet Library</a>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n                <li *ngFor=\"let item of menuMyItems\" class={{item.active}}>\n                    <a routerLink={{item.path}}{{item.parameterID}}{{item.random}} routerLinkActive=\"active fluffy\">{{item.linkName}}</a>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li class='active'>\n                    <a routerLink=\"/ContractDetails\" routerLinkActive=\"active fluffy\">\n                        <span class=\"glyphicon glyphicon-edit\"></span> Contracts</a>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a routerLink=\"/WalletDetails\" routerLinkActive=\"active fluffy\">\n                        <span class=\"glyphicon glyphicon-usd\"></span> Transactions</a>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a routerLink=\"/CardList\" routerLinkActive=\"active fluffy\">\n                        <span class=\"glyphicon glyphicon-list\"></span> Wallets</a>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n            </ul>\n        </div>\n    </div>\n</nav>\n\n\n<div class=\"container\">\n\n    <!-- COMPONENT START -->\n    <!-- <div class=\"form-group\">\n        <div class=\"input-group input-file\" name=\"Fichier1\">\n            <input type=\"text\" class=\"form-control\" placeholder='Choose a file...' />\n            <span class=\"input-group-btn\">\n                <button class=\"btn btn-default btn-choose\" type=\"button\" (change)=\"handleInputChange($event)\">Choose</button>\n            </span>\n        </div>\n    </div> -->\n\n\n    <div class=\"col-lg-12 col-md-12 col-sm-12  horizontal-center-row\">\n\n        <div class=\"row\">\n            <div class=\"form-group col-lg-8 col-md-8 col-sm-8\">\n                <label for=\"pay-from\">1. Select Your Wallet File:</label>\n                <input class=\"btn btn-primary btn-choose col-lg-12 col-md-12 col-sm-12\" type=\"file\" name=\"file\" accept=\"*/*\" (change)=\"handleInputChange($event)\">\n            </div>\n\n            <div class=\"form-group col-lg-2 col-md-2 col-sm-2\">\n                <label for=\"pay-pw\">Password</label>\n                <input type=\"password\" class=\"form-control \" name=\"pay-pw\" [(ngModel)]=\"password\" placeholder=\"password\" />\n            </div>\n        </div>\n        <div *ngIf=\"fromAddress\" class=\"row\">\n            <div class=\"form-group col-lg-4 col-md-4 col-sm-4\">\n                <label for=\"pay-from\">From Address</label>\n                <input class=\"form-control\" readonly name=\"pay-from\" [(ngModel)]=\"fromAddress\" placeholder=\"From Address\" />\n            </div>\n            <div class=\"form-group col-lg-2 col-md-2 col-sm-2\" style=\"display:online;\">\n                <label for=\"pay-nonce\">Nonce</label>\n                <input class=\"form-control\" readonly name=\"pay-nonce\" [(ngModel)]=\"nonce\" placeholder=\"\" />\n            </div>\n            <div class=\"form-group col-lg-3 col-md-3 col-sm-3\" style=\"display:online;\">\n                <label for=\"pay-balance\">From Address Balance (NAS)</label>\n                <input class=\"form-control\" readonly name=\"pay-balance\" [(ngModel)]=\"fromBalance\" placeholder=\"\" />\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"form-group col-lg-5 col-md-5 col-sm-5\">\n                <label for=\"pay-from\">Contract Address</label>\n                <input class=\"form-control\" name=\"pay-from\" [(ngModel)]=\"contractAddress\" placeholder=\"Contract Address\" />\n            </div>\n            <div class=\"form-group col-lg-2 col-md-2 col-sm-2\">\n                <label for=\"pay-pw\">Wallet Type</label>\n                <input class=\"form-control\" readonly name=\"pay-pw\" [(ngModel)]=\"contractType\" placeholder=\"\" />\n            </div>\n            <div class=\"form-group col-lg-3 col-md-3 col-sm-3\" style=\"display:online;\">\n                <label for=\"pay-balance\">Contract Balance (NAS)</label>\n                <input class=\"form-control\" readonly name=\"pay-balance\" [(ngModel)]=\"contractBalance\" placeholder=\"\" />\n            </div>\n\n            <div class=\"form-group  col-lg-2 col-md-2 col-sm-2\">\n                <button class=\"btn btn-info col-lg-12 col-md-12 col-sm-12\" (click)=\"checkContractState()\">2. Check contract</button>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group col-lg-10 col-md-10 col-sm-10\">\n                <label for=\"pay-pw\">Contract Txhash</label>\n                <input class=\"form-control\" name=\"pay-pw\" [(ngModel)]=\"contractTxhash\" placeholder=\"\" />\n            </div>\n            <div class=\"form-group  col-lg-2 col-md-2 col-sm-2\">\n                <button class=\"btn btn-default col-lg-12 col-md-12 col-sm-12\" (click)=\"SearchContract()\">Search Contract</button>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div *ngIf=\"contractCode\" class=\"form-group  col-lg-12 col-md-12 col-sm-12\">\n                <label for=\"pay-limit\">Contract Codes</label>\n                <textarea class=\"form-control\" rows=\"10\" cols=\"100\" readonly>{{contractCode}}</textarea>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"form-group col-lg-2 col-md-2 col-sm-2\">\n                <label for=\"pay-pw\">Contract Txhash</label>\n                <input class=\"form-control\" name=\"pay-pw\" [(ngModel)]=\"contractTxhash\" placeholder=\"\" />\n            </div>\n\n            <div class=\"form-group col-lg-2 col-md-2 col-sm-2\" style=\"display:online;\">\n                <label for=\"pay-value\">Function</label>\n                <input class=\"form-control\" name=\"pay-value\" [(ngModel)]=\"function\" placeholder=\"save\" />\n            </div>\n\n            <div class=\"form-group col-lg-4 col-md-4 col-sm-4\" style=\"display:online;\">\n                <label for=\"pay-value\">Arguments</label>\n                <input class=\"form-control\" name=\"pay-value\" [(ngModel)]=\"arguments\" placeholder='[\"arg-1\", \"arg-2\", ...]' />\n\n            </div>\n\n            <div class=\"form-group col-lg-2 col-md-2 col-sm-2\" style=\"display:online;\">\n                <label for=\"pay-value\">Value (NAS)</label>\n                <input class=\"form-control\" name=\"pay-value\" [(ngModel)]=\"value\" placeholder=\"Amount\" />\n            </div>\n\n\n            <div class=\"form-group  col-lg-2 col-md-2 col-sm-2\">\n                <button class=\"btn btn-success col-lg-12 col-md-12 col-sm-12\" (click)=\"testContract()\">3. Test Contract</button>\n            </div>\n        </div>\n        <div *ngIf=\"testResult\" class=\"row\">\n            <div class=\"form-group col-lg-10 col-md-10 col-sm-10\">\n                <label for=\"pay-pw\">Contract test / Call result (Hash)</label>\n                <textarea class=\"form-control\" rows=\"4\" cols=\"100\" readonly>{{testResult}}</textarea>\n            </div>\n            <div class=\"form-group  col-lg-2 col-md-2 col-sm-2\">\n                <button class=\"btn btn-warning col-lg-12 col-md-12 col-sm-12\" (click)=\"callContract()\">4. Call Contract</button>\n            </div>\n\n        </div>\n\n        <div *ngIf=\"testResult\" class=\"row\">\n\n            <div class=\"form-group  col-lg-4 col-md-4 col-sm-4\" style=\"display:online;\">\n                <label for=\"pay-nonce\">Contract Balance (NAS)</label>\n                <input class=\"form-control\" readonly name=\"pay-nonce\" [(ngModel)]=\"newContractBalance\" placeholder=\"\" />\n            </div>\n\n            <div class=\"form-group col-lg-2 col-md-2 col-sm-2\" style=\"display:online;\">\n                <label for=\"pay-balance\">New From Nonce</label>\n                <input class=\"form-control\" readonly name=\"pay-balance\" [(ngModel)]=\"newFromNonce\" placeholder=\"\" />\n            </div>\n\n            <div class=\"form-group col-lg-4 col-md-4 col-sm-4\" style=\"display:online;\">\n                <label for=\"pay-balance\">From Address Balance (NAS)</label>\n                <input class=\"form-control\" readonly name=\"pay-balance\" [(ngModel)]=\"newFromBalance\" placeholder=\"\" />\n            </div>\n\n            <div class=\"form-group col-lg-2 col-md-2 col-sm-2\">\n                <button class=\"btn btn-default btn-s col-lg-12 col-md-12 col-sm-12\" (click)=\"onCheckContractCall()\">\n                    Check Balance Result\n                </button>\n            </div>\n        </div>\n\n        <div *ngIf=\"testResult\" class=\"row\">\n            <div class=\"form-group col-lg-10 col-md-10 col-sm-10\">\n                <label for=\"pay-pw\">Contract Call hash check result</label>\n                <textarea class=\"form-control\" rows=\"4\" cols=\"100\" readonly>{{hashResult}}</textarea>\n            </div>\n            <div class=\"form-group col-lg-2 col-md-2 col-sm-2\">\n                <button class=\"btn btn-primary btn-s col-lg-12 col-md-12 col-sm-12\" (click)=\"checkHashResult()\">\n                    5. Check TX Status\n                </button>\n            </div>\n        </div>\n\n    </div>"

/***/ }),

/***/ "./src/app/views/contract-details/contract-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_remote_service__ = __webpack_require__("./src/app/services/remote.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_contract_service__ = __webpack_require__("./src/app/services/contract.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_student_service__ = __webpack_require__("./src/app/services/student.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContractDetailsComponent = /** @class */ (function () {
    function ContractDetailsComponent(remoteService, contractService, studentService) {
        this.remoteService = remoteService;
        this.contractService = contractService;
        this.studentService = studentService;
        // For Setect Net
        this.netTypeArr = [
            { value: '0', name: "Testnet" },
            { value: '1', name: "Local nodes" },
            { value: '2', name: "Mainnet" },
        ];
        this.netType = '0';
        // For display Contract Info
        // 1. 银行保险柜合约
        // contractAddress: string = 'n1zQ3F2ZLsyQGeJjefhxoXCh6Uq2jesqvkB';
        // contractTxhash:  string = 'c1ac05b55936e25d6fd959e51c7066b7d434428a005515963604f9bd3243f383';
        // 2. 用户信息合约 http://blog.51cto.com/634435/2114749
        //contractAddress: string = 'n1rQ1uHy4BEvdyuF4dRttMwp6Vu2ZTRuwB3';     // From Address: n1QvdfomX24brtcBrBypPDcPvt9Qwm9UBM9   created
        //contractTxhash:  string = '053e6f946569c6400adef0750bc69268e326bd9c30a702fa8a5614db44a56cac';
        // n1RaCeVeLxzJG2yLwE155y2S6EqjWeVboqJ   ["title1", "content1"]
        // 3. Order 用户信息合约 contract.txt
        //  ["4", "7b571d64d9387826d7b5dc16d9c18b49f46aaac4da8a08000d5868a87503f8bc", "iPhone 49"]
        this.contractAddress = 'n1ohyV5xeVwMTCNm6sFLVKKNvdE5Uv6uDpS'; // From Address: n1QvdfomX24brtcBrBypPDcPvt9Qwm9UBM9   created, Map index by orderID
        this.contractTxhash = '7b571d64d9387826d7b5dc16d9c18b49f46aaac4da8a08000d5868a87503f8bc';
        this.value = "0"; // transaction value
        this.password = "Nas20180429";
        //function:  string = 'save';
        this.function = 'readByID';
        //arguments: string = '["4", "7b571d64d9387826d7b5dc16d9c18b49f46aaac4da8a08000d5868a87503f8bc", "iPhone 49"]';  //can not has space !! because of will be splited
        this.arguments = '["1"]'; //'[0]';
    }
    ContractDetailsComponent.prototype.ngOnInit = function () {
    };
    ContractDetailsComponent.prototype.checkContractState = function () {
        var _this = this;
        console.log("1. 查看合约信息 ........ " + this.contractAddress);
        if (!this.contractAddress) {
            alert(" Please input Contract Address!");
            return;
        }
        this.remoteService.getAccountState(this.contractAddress).then(function (cardBalance) {
            var account_Result = JSON.parse(cardBalance._body);
            var dataBalance = Number(account_Result.result.balance) / 1000000000000000000.0;
            if (!isNaN(dataBalance))
                _this.contractBalance = dataBalance.toString();
            else
                _this.contractBalance = '';
            _this.contractType = account_Result.result.type;
        });
    };
    ContractDetailsComponent.prototype.SearchContract = function () {
        var _this = this;
        console.log("2. 查询合约信息 ........ " + this.contractAddress);
        if (!this.contractAddress) {
            alert(" Please input Contract Address!");
            return;
        }
        this.contractService.getContracts(this.contractTxhash).then(function (result) {
            _this.contractCode = atob(result.data);
            console.log(_this.contractCode);
            //console.log(result);
            //this.contractCode = result;
            /*
            let account_Result = JSON.parse(cardBalance._body);
            var dataBalance = Number(account_Result.result.balance) / 1000000000000000000.0;

            if (!isNaN(dataBalance))
                this.contractBalance = dataBalance.toString();
            else
                this.contractBalance = '';

            this.contractType = account_Result.result.type;
            */
        });
    };
    ContractDetailsComponent.prototype.checkHashResult = function () {
        var _this = this;
        console.log("2. 查询 Hash Result 信息 ........ ");
        if (!this.testResult) {
            alert("no hash !");
            return;
        }
        this.contractService.getContracts(this.testResult).then(function (result) {
            console.log(result);
            _this.hashResult = JSON.stringify(result);
        });
    };
    ContractDetailsComponent.prototype.testContract = function () {
        var _this = this;
        console.log("4. 测试合约 start........ " + this.contractAddress);
        if (!this.contractAddress) {
            alert(" Please input Contract Address!");
            return;
        }
        var nonce = Number(this.nonce) + 1;
        var nonceStr = nonce.toString();
        console.log(nonceStr);
        console.log(this.function);
        console.log(this.arguments);
        var value = Number(1.1) * 1000000000000000000.0;
        var valueStr = value.toString();
        this.contractService.testTransaction({ 'toAddress': this.fromAddress, 'contractAddress': this.contractAddress, 'nonce': this.nonce, 'value': valueStr, 'function': this.function, 'arguments': this.arguments })
            .then(function (result) {
            console.log("4. 测试合约 end........ " + _this.contractAddress);
            //console.log(result);
            _this.testResult = JSON.stringify(result);
            console.log(_this.testResult);
        });
    };
    ContractDetailsComponent.prototype.callContract = function () {
        var _this = this;
        console.log("5. 执行合约 start ........ " + this.contractAddress);
        if (!this.contractAddress) {
            alert(" Please input Contract Address!");
            return;
        }
        var nonce = Number(this.nonce) + 1;
        var nonceStr = nonce.toString();
        this.nonce = nonceStr; // Refresh Nonce for next transaction
        //console.log(nonceStr);
        var valueStr = parseFloat(this.value) * 1000000000000000000.0;
        var tempObj = { 'toAddress': this.contractAddress, 'password': this.password, 'nonce': nonceStr, 'value': valueStr, 'function': this.function, 'arguments': this.arguments };
        console.log(tempObj);
        // here toAddress should be contractAddress ?????
        //this.contractService.callTransaction(this.jsonAddressFile, { 'toAddress': this.contractAddress, 'nonce': nonceStr, 'value': valueStr, 'function': this.function, 'arguments': this.arguments }).then((result: any) => {
        this.contractService.callTransaction(this.jsonAddressFile, tempObj).then(function (result) {
            console.log("5. 执行合约 end ........ " + _this.contractAddress);
            //console.log(result);
            //this.testResult = JSON.stringify(result);
            var rr = JSON.stringify(result);
            _this.testResult = JSON.parse(rr).hash;
            console.log(_this.testResult);
        });
    };
    // 4. 检查合约执行 Button  ================================================
    ContractDetailsComponent.prototype.onCheckContractCall = function () {
        var _this = this;
        console.log("4. 检查合约执行结果 ...... ");
        // get from account status after sending transaction
        this.studentService.getAccountState(this.fromAddress).then(function (cardBalance) {
            var dataBalance = Number(cardBalance.balance) / 1000000000000000000.0;
            _this.newFromBalance = JSON.stringify(dataBalance) + ' NAS';
            _this.newFromNonce = cardBalance.nonce;
        });
        // get to contractAddress account status after sending transaction
        this.studentService.getAccountState(this.contractAddress).then(function (cardBalance) {
            var dataBalance = Number(cardBalance.balance) / 1000000000000000000.0;
            _this.newContractBalance = JSON.stringify(dataBalance) + ' NAS';
        });
    };
    // Selected file button
    ContractDetailsComponent.prototype.handleInputChange = function (e) {
        this.jsonAddressFile = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        //this.jsonAddressFile = e;
        console.log(file);
        console.log("mFileJson ######################################################");
        //var mFileJson = JSON.parse(file.target.result);
        //console.log(mFileJson);
        //var tempFile = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0]; 
        this.fromAddress = this.jsonAddressFile.name.split('.')[0];
        this.onGetFromAddressInfo();
        /*
                var reader = new FileReader();
                reader.onload = () => {
                    this.jsonFileContent = reader.result;
                }
                reader.readAsText(file.name);
                console.log(this.jsonFileContent);
        */
    };
    ContractDetailsComponent.prototype.onGetFromAddressInfo = function () {
        var _this = this;
        console.log("3. 得到源账户信息 ........ " + this.contractAddress);
        // get to account status after sending transaction
        this.studentService.getAccountState(this.fromAddress).then(function (result) {
            var value = Number(result.balance) / 1000000000000000000.0;
            _this.fromBalance = JSON.stringify(value) + ' NAS';
            _this.nonce = result.nonce;
        });
    };
    ContractDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contract-details',
            template: __webpack_require__("./src/app/views/contract-details/contract-details.component.html"),
            styles: [__webpack_require__("./src/app/views/contract-details/contract-details.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_remote_service__["a" /* RemoteService */], __WEBPACK_IMPORTED_MODULE_2__services_contract_service__["a" /* ContractService */], __WEBPACK_IMPORTED_MODULE_3__services_student_service__["a" /* StudentService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_remote_service__["a" /* RemoteService */],
            __WEBPACK_IMPORTED_MODULE_2__services_contract_service__["a" /* ContractService */],
            __WEBPACK_IMPORTED_MODULE_3__services_student_service__["a" /* StudentService */]])
    ], ContractDetailsComponent);
    return ContractDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/student-details/student-details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/student-details/student-details.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<div *ngIf=\"student\" class=\"row\" >\n  <div class=\"col-md-12\">\n    <h2 *ngIf=\"student._id\">Student Details</h2>\n    <h2 *ngIf=\"!student._id\">New Student</h2>\n  </div>\n</div>\n<div *ngIf=\"student\" class=\"row\">\n  <form class=\"col-md-12\">\n    <div class=\"form-group\">\n      <label for=\"student-first-name\">First Name</label>\n      <input class=\"form-control\" name=\"student-first-name\" [(ngModel)]=\"student.FirstName\" placeholder=\"First Name\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"student-last-name\">Last Name</label>\n      <input class=\"form-control\" name=\"student-last-name\" [(ngModel)]=\"student.LastName\" placeholder=\"Last Name\"/>\n    </div>\t\n    <div class=\"form-group\">\n      <label for=\"student-school\">School</label>\n      <input class=\"form-control\" name=\"student-school\" [(ngModel)]=\"student.School\" placeholder=\"School\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"student-start-date\">Start Date</label>\n      <input class=\"form-control\" name=\"student-start-date\" [(ngModel)]=\"student.StartDate\" placeholder=\"mm/dd/yyyy\"/>\n    </div>\n    <button class=\"btn btn-primary\" *ngIf=\"!student._id\" (click)=\"createStudent(student)\">Create</button>\n    <button class=\"btn btn-info\" *ngIf=\"student._id\" (click)=\"updateStudent(student)\">Update</button>\n    <button class=\"btn btn-danger\" *ngIf=\"student._id\" (click)=\"deleteStudent(student._id)\">Delete</button>\n  </form>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/views/student-details/student-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_defineClass__ = __webpack_require__("./src/app/models/defineClass.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_student_service__ = __webpack_require__("./src/app/services/student.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentDetailsComponent = /** @class */ (function () {
    function StudentDetailsComponent(studentService) {
        this.studentService = studentService;
    }
    StudentDetailsComponent.prototype.createStudent = function (student) {
        var _this = this;
        this.studentService.createStudent(student).then(function (newStudent) {
            _this.createHandler(newStudent);
        });
    };
    StudentDetailsComponent.prototype.updateStudent = function (student) {
        var _this = this;
        this.studentService.updateStudent(student).then(function (updatedStudent) {
            _this.updateHandler(updatedStudent);
        });
    };
    StudentDetailsComponent.prototype.deleteStudent = function (studentId) {
        var _this = this;
        this.studentService.deleteStudent(studentId).then(function (deletedstudentId) {
            _this.deleteHandler(deletedstudentId);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_defineClass__["c" /* Student */])
    ], StudentDetailsComponent.prototype, "student", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Function)
    ], StudentDetailsComponent.prototype, "createHandler", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Function)
    ], StudentDetailsComponent.prototype, "updateHandler", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Function)
    ], StudentDetailsComponent.prototype, "deleteHandler", void 0);
    StudentDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'student-details',
            template: __webpack_require__("./src/app/views/student-details/student-details.component.html"),
            styles: [__webpack_require__("./src/app/views/student-details/student-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_student_service__["a" /* StudentService */]])
    ], StudentDetailsComponent);
    return StudentDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/student-list/student-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/student-list/student-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-5\">\n    <h2>Students</h2>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\"\n        *ngFor=\"let s of students\"\n        (click)=\"selectStudent(s)\"\n        [class.active]=\"s === selectedStudent\">\n        {{s.FirstName}} {{s.LastName}}\n      </li>\n    </ul>\n    <button class=\"btn btn-warning\" (click)=\"createNewStudent()\">New</button>\n  </div>\n  \n  <div class=\"col-md-5 col-md-offset-2\">\n\n\n    <student-details\n      [student]=\"selectedStudent\"\n      [createHandler]=\"addStudent\"\n      [updateHandler]=\"updateStudent\"\n      [deleteHandler]=\"deleteStudent\">\n    </student-details>\n  \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/student-list/student-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_student_service__ = __webpack_require__("./src/app/services/student.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentListComponent = /** @class */ (function () {
    function StudentListComponent(StudentService) {
        var _this = this;
        this.StudentService = StudentService;
        this.getIndexOfStudent = function (studentId) {
            return _this.students.findIndex(function (student) {
                return student._id === studentId;
            });
        };
        this.deleteStudent = function (studentId) {
            var idx = _this.getIndexOfStudent(studentId);
            if (idx !== -1) {
                _this.students.splice(idx, 1);
                _this.selectStudent(null);
            }
            return _this.students;
        };
        this.addStudent = function (student) {
            _this.students.push(student);
            _this.selectStudent(student);
            return _this.students;
        };
        this.updateStudent = function (student) {
            var idx = _this.getIndexOfStudent(student._id);
            if (idx !== -1) {
                _this.students[idx] = student;
                _this.selectStudent(student);
            }
            return _this.students;
        };
    }
    StudentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.StudentService
            .getStudents()
            .then(function (students) {
            _this.students = students.map(function (student) {
                return student;
            });
        });
    };
    StudentListComponent.prototype.selectStudent = function (student) {
        this.selectedStudent = student;
    };
    StudentListComponent.prototype.createNewStudent = function () {
        var student = {
            FirstName: '',
            LastName: '',
            School: '',
            StartDate: new Date()
        };
        // By default, a newly-created contact will have the selected state.
        this.selectStudent(student);
    };
    StudentListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'student-list',
            template: __webpack_require__("./src/app/views/student-list/student-list.component.html"),
            styles: [__webpack_require__("./src/app/views/student-list/student-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_student_service__["a" /* StudentService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_student_service__["a" /* StudentService */]])
    ], StudentListComponent);
    return StudentListComponent;
}());



/***/ }),

/***/ "./src/app/views/wallet-details/wallet-details.component.css":
/***/ (function(module, exports) {

module.exports = "input[type=\"file\"] {\n    display: none;\n}\n.custom-file-upload {\n    border: 3px dotted gray;\n    display: inline-block;\n    /*padding: 13px 22px;*/\n    cursor: pointer;\n    /*width: 250px;\n    height: 70px;*/\n    background: lightgray;\n    border-radius: 5px;\n}\n/* For drop zone */\n.my-drop-zone { border: dotted 3px lightgray; }\n.nv-file-over { border: dotted 3px red; }\n/* Default class applied to drop zones on over */\n.another-file-over-class { border: dotted 3px green; }\nhtml, body { height: 100%; }\n/* Test */\n.card {\n      border: 2px dashed #eee;\n      padding: 1rem;\n      margin: 0.4rem;\n      font-family: sans-serif;\n      -webkit-box-shadow: 2px 2px 2px #888888;\n              box-shadow: 2px 2px 2px #888888;\n    }\n.dark {\n      /* background-color: green; */\n      border: 2px dashed #eee;\n      border-color: #5bc0de;\n      color: red;\n    }\n.emptyLine {\n      /* background-color: green; */\n      border: 2px dashed #eee;\n      border-color: #f0ad4e;\n      color: red;\n    }\n.flat {\n      -webkit-box-shadow: none;\n              box-shadow: none;\n    }\n[contenteditable]:hover:after {\n  /* content: 'click to edit';  */\n  font-style: italic;\n  font-size: 12px;\n  font-family: sans-serif;\n  color: #ccc;\n \n}\n[contenteditable]:hover, [contenteditable]:focus {\n  background: #FFFFD3;\n}\n[contenteditable]:focus {\n  padding: 5px;\n}\n[contenteditable]:focus:after {\n  content: '';\n}"

/***/ }),

/***/ "./src/app/views/wallet-details/wallet-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"form-group pull-right col-lg-2 col-md-2 col-sm-2\" style=\"padding-top: 12px;\">\n        <select class=\"form-control\" id=\"net\" required [(ngModel)]=\"netType\" (change)=\"onNetChange()\" name='net'>\n            <option *ngFor=\"let item1 of netTypeArr\" [value]=\"item1.value\">{{item1.name}}</option>\n        </select>\n    </div>\n\n    <a id=\"logo\">\n        <img src=\"assets/imgs/logo-b.png\">\n    </a>\n</div>\n\n<nav class=\"navbar navbar-inverse\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n                aria-expanded=\"false\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">\n                <img alt=\"Nebulas\" src=\"assets/imgs/icon_19.png\">\n            </a>\n            <a class=\"navbar-brand\" href=\"#\">NAS Wallet Library</a>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n                <li *ngFor=\"let item of menuMyItems\" class={{item.active}}>\n                    <a routerLink={{item.path}}{{item.parameterID}}{{item.random}} routerLinkActive=\"active fluffy\">{{item.linkName}}</a>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a routerLink=\"/ContractDetails\" routerLinkActive=\"active fluffy\">\n                        <span class=\"glyphicon glyphicon-edit\"></span> Contracts</a>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li class='active'>\n                    <a routerLink=\"/WalletDetails\" routerLinkActive=\"active fluffy\">\n                        <span class=\"glyphicon glyphicon-usd\"></span> Transactions</a>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a routerLink=\"/CardList\" routerLinkActive=\"active fluffy\">\n                        <span class=\"glyphicon glyphicon-list\"></span> Wallets</a>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-3 col-lg-3 col-sm-3 col-xs-3\">\n            <h3>Select wallet files</h3>\n            <div ng2FileDrop [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\" (fileOver)=\"fileOverBase($event)\" [uploader]=\"uploader\"\n                class=\"well my-drop-zone\">\n                <strong>\n                    <h4>\n                        <span class=\"glyphicon glyphicon-screenshot\"></span>&nbsp;&nbsp;Drop wallet files here\n                        <br />(Drop Zone) </h4>\n                </strong>\n            </div>\n            <label for=\"file-upload\" class=\"custom-file-upload col-md-12 col-lg-12 col-sm-12 col-xs-12\" style=\"padding: 15px;\">\n                &nbsp;\n                <span class=\"glyphicon glyphicon-folder-open\"></span>&nbsp;&nbsp;&nbsp;Click here\n                <br /> to select wallet files\n            </label>\n            <input id=\"file-upload\" type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple name=\"files[]\" />\n        </div>\n        <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9\">\n            <div *ngIf=\"uploader.queue.length\" class=\"pull-right\">\n                <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"onClearAll()\">\n                    <span class=\"glyphicon glyphicon-trash\"></span> Remove all\n                </button>\n            </div>\n            <h4>Listing wallets</h4>\n            <p>Queue length: {{ uploader?.queue?.length }}</p>\n            <table class=\"table\">\n                <thead>\n                    <tr>\n                        <th width=\"50%\">File Name</th>\n                        <th>Status</th>\n                        <th>Actions</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let item of uploader.queue\">\n                        <td>\n                            <strong>{{ item?.file?.name }}</strong>\n                        </td>\n                        <td class=\"text-center\">\n                            <span *ngIf=\"item.isSuccess\">\n                                <i class=\"glyphicon glyphicon-ok\"></i>\n                            </span>\n                            <span *ngIf=\"item.isCancel\">\n                                <i class=\"glyphicon glyphicon-ban-circle\"></i>\n                            </span>\n                            <span *ngIf=\"item.isError\">\n                                <i class=\"glyphicon glyphicon-remove\"></i>\n                            </span>\n                        </td>\n                        <td nowrap>\n                            <button type=\"button\" class=\"btn btn-default btn-xs\" (click)=\"onSelectFrom(item?._file)\">\n                                <span class=\"glyphicon glyphicon-log-out\"></span> Select From &nbsp;&nbsp;&nbsp;\n                            </button>\n                            <button type=\"button\" class=\"btn btn-info btn-xs\" (click)=\"onSelectTo(item?._file)\">\n                                <span class=\"glyphicon glyphicon-log-in\"></span> Select To\n                            </button>\n                            <button type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"onRemoveOneFile(item)\">\n                                <span class=\"glyphicon glyphicon glyphicon-remove\"></span> Remove\n                            </button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <br />\n    <div class=\"col-lg-12 col-md-12 col-sm-12  horizontal-center-row\">\n        <div *ngIf=\"fromAddress\" class=\"row\">\n            <div class=\"form-group col-lg-10 col-md-10 col-sm-10\">\n                <label for=\"pay-from\">From Address</label>\n                <input class=\"form-control\" name=\"pay-from\" [(ngModel)]=\"fromAddress\" placeholder=\"From Address\" />\n            </div>\n            <div class=\"col-lg-2 col-md-2 col-sm-2\">\n                <button type=\"button\" class=\"btn btn-info btn-s\" (click)=\"onUnlockAccount()\">\n                    1. Unlock Account\n                </button>\n            </div>\n        </div>\n        <div *ngIf=\"fromAddress\" class=\"row\">\n            <div class=\"form-group col-lg-3 col-md-3 col-sm-3\">\n                <label for=\"pay-pw\">From Wallet Password</label>\n                <input type=\"password\" class=\"form-control \" name=\"pay-pw\" [(ngModel)]=\"password\" placeholder=\"Your Wallet Address\" />\n            </div>\n            <div class=\"form-group col-lg-3 col-md-3 col-sm-3\" style=\"display:online;\">\n                <label for=\"pay-nonce\">Nonce</label>\n                <input class=\"form-control\" readonly name=\"pay-nonce\" [(ngModel)]=\"nonce\" placeholder=\"\" />\n            </div>\n            <div class=\"form-group col-lg-6 col-md-6 col-sm-6\" style=\"display:online;\">\n                <label for=\"pay-balance\">From Address Balance (NAS)</label>\n                <input class=\"form-control\" readonly name=\"pay-balance\" [(ngModel)]=\"balance\" placeholder=\"\" />\n            </div>\n        </div>\n        <div *ngIf=\"toAddress\" class=\"row\">\n            <div class=\"form-group col-lg-10 col-md-10 col-sm-10\">\n                <label for=\"card-CardName\">To Address</label>\n                <input class=\"form-control\" name=\"card-CardName\" [(ngModel)]=\"toAddress\" placeholder=\"to Address\" />\n            </div>\n            <div class=\"col-lg-2 col-md-2 col-sm-2\">\n                <button type=\"button\" class=\"btn btn-primary btn-s\" (click)=\"onCreateSignData()\">\n                    2. Sign Transaction\n                </button>\n            </div>\n        </div>\n        <div *ngIf=\"toAddress\" class=\"row\">\n            <div class=\"form-group col-lg-6 col-md-6 col-sm-6\" style=\"display:online;\">\n                <label for=\"pay-value\">Pay Value / Amount to Send (NAS)</label>\n                <input class=\"form-control\" name=\"pay-value\" [(ngModel)]=\"amount\" placeholder=\"Amount\" />\n            </div>\n            <div class=\"form-group  col-lg-6 col-md-6 col-sm-6\" style=\"display:online;\">\n                <label for=\"pay-nonce\">To Address Balance (NAS)</label>\n                <input class=\"form-control\" readonly name=\"pay-nonce\" [(ngModel)]=\"toBalance\" placeholder=\"\" />\n            </div>\n        </div>\n        <div *ngIf=\"toAddress\" class=\"row\">\n            <!--\n            <div class=\"form-group  col-lg-6 col-md-6 col-sm-6\">\n                <label for=\"pay-limit\">Gas Limit</label>\n                <input class=\"form-control\" name=\"pay-limit\" [(ngModel)]=\"gasLimit\" placeholder=\"\" />\n            </div>\n            -->\n            <div class=\"form-group  col-lg-10 col-md-10 col-sm-10\">\n                <label for=\"gasPrice\">Gas Price ( 1 NAS = 1EWei = 10 18 Wei )</label>\n                <input class=\"form-control\" name=\"gasPrice\" [(ngModel)]=\"gasPrice\" placeholder=\"\" />\n            </div>\n            <div *ngIf=\"mTxHash\" class=\"col-lg-2 col-md-2 col-sm-2\">\n                <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"onSendTransaction()\">\n                    3. Send Transaction\n                </button>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div *ngIf=\"mTxHash\" class=\"form-group  col-lg-6 col-md-6 col-sm-6\">\n                <label for=\"pay-limit\">Signed Transaction</label>\n                <textarea class=\"form-control\" rows=\"6\" cols=\"50\" readonly>{{mTxHash}}</textarea>\n            </div>\n            <div *ngIf=\"Receipt\" class=\"form-group  col-lg-6 col-md-6 col-sm-6\">\n                <label for=\"gasPrice\">Transaction Receipt</label>\n                <textarea class=\"form-control\" rows=\"6\" cols=\"50\" readonly>{{Receipt}}</textarea>\n            </div>\n        </div>\n        <div *ngIf=\"Receipt\" class=\"row\">\n            <div class=\"form-group col-lg-5 col-md-5 col-sm-5\" style=\"display:online;\">\n                <label for=\"pay-balance\">From Address Balance (NAS)</label>\n                <input class=\"form-control\" readonly name=\"pay-balance\" [(ngModel)]=\"newBalance\" placeholder=\"\" />\n            </div>\n            <div class=\"form-group  col-lg-5 col-md-5 col-sm-5\" style=\"display:online;\">\n                <label for=\"pay-nonce\">To Address Balance (NAS)</label>\n                <input class=\"form-control\" readonly name=\"pay-nonce\" [(ngModel)]=\"newToBalance\" placeholder=\"\" />\n            </div>\n\n            <div *ngIf=\"mTxHash\" class=\"col-lg-2 col-md-2 col-sm-2\">\n                <button type=\"button\" class=\"btn btn-warning btn-s col-lg-12 col-md-12 col-sm-12\" (click)=\"onCheckTransaction()\">\n                    4. Check Balance\n                </button>\n            </div>\n        </div>\n\n        <div *ngIf=\"Receipt\" class=\"row\">\n                <div class=\"form-group col-lg-10 col-md-10 col-sm-10\">\n                    <label for=\"pay-pw\">Contract Call hash check result</label>\n                    <textarea class=\"form-control\" rows=\"1\" cols=\"100\" readonly>{{hashResult}}</textarea>\n                </div>\n                <div class=\"form-group col-lg-2 col-md-2 col-sm-2\">\n                    <button class=\"btn btn-primary btn-s col-lg-12 col-md-12 col-sm-12\" (click)=\"checkHashResult()\">\n                        5. Check TX Status\n                    </button>\n                </div>\n            </div>     \n    </div>\n\n\n    <!--\n    <div class=\"col-md-5 col-md-offset-0\">\n        <div *ngIf=\"selectedCard\" class=\"row\">\n            <form class=\"col-md-12\">\n\n                <div class=\"form-group\">\n                    <label for=\"card-CardAddress\">From Address</label>\n                    <input class=\"form-control\" name=\"card-CardAddress\" [(ngModel)]=\"address\" placeholder=\"钱包地址\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"card-Balance\">Balance</label>\n                    <input class=\"form-control\" name=\"card-Balance\" [(ngModel)]=\"balance\" placeholder=\"\" />\n                </div>\n                \n                <div class=\"form-group invisible\" >\n                    <label for=\"card-Nonce\">交易次数</label>\n                    <input class=\"form-control\" name=\"card-Nonce\" [(ngModel)]=\"nonce\" placeholder=\"\" />\n                </div>\n                <div class=\"form-group invisible\" >\n                        <label for=\"toAddress\">To Address</label>\n                        <input class=\"form-control\" name=\"toAddress\" [(ngModel)]=\"toAddress\" placeholder=\"to wallet Address\" />\n                </div>\n            </form>\n        </div>\n    </div>\n-->"

/***/ }),

/***/ "./src/app/views/wallet-details/wallet-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Result */
/* unused harmony export Signed2Result */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_student_service__ = __webpack_require__("./src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_contract_service__ = __webpack_require__("./src/app/services/contract.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_card_service__ = __webpack_require__("./src/app/services/card.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var URL_UPLOAD = 'http://localhost:55756/api/FileProcessing/';
var Result = /** @class */ (function () {
    function Result() {
    }
    return Result;
}());

var Signed2Result = /** @class */ (function () {
    function Signed2Result() {
    }
    return Signed2Result;
}());

var WalletDetailsComponent = /** @class */ (function () {
    function WalletDetailsComponent(studentService, contractService) {
        this.studentService = studentService;
        this.contractService = contractService;
        // Import data -- ng2-file-upload
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({ url: URL_UPLOAD });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.balance = null;
        this.newBalance = null;
        this.toBalance = null;
        this.newToBalance = null;
        this.nonce = null;
        this.password = 'Nas20180429';
        // "value":"3000000000000000000"
        this.amount = '1';
        this.gasPrice = '100000';
        // For Setect Net
        this.netTypeArr = [
            { value: '0', name: "Testnet" },
            { value: '1', name: "Local nodes" },
            { value: '2', name: "Mainnet" },
        ];
        this.netType = '0';
    }
    WalletDetailsComponent.prototype.ngOnInit = function () {
        // For : Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
        this.uploader.onBeforeUploadItem = function (item) {
            item.withCredentials = false;
        };
        var self = this;
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            console.log("onSuccessItem " + status, item);
            // ???self.handle(response);
        };
    };
    WalletDetailsComponent.prototype.getStudent = function () {
        //this.studentService.getStudents().then((newStudent) => {
        //this.studentService.getAccountState("n1L5AExWGCP299jB5RWmdo7t6qCRZ4MW8PW").then((newStudent) => {
        this.studentService.postAccount(this.myFile).then(function (newStudent) {
            console.log(newStudent);
        });
    };
    // For test API - Remove All Button:
    WalletDetailsComponent.prototype.onClearAll = function () {
        this.uploader.clearQueue();
        delete this.selectedCard;
        // initial: 
        this.selectedCard = null;
        this.fromAddress = null;
        this.toAddress = null;
        this.resultData = null;
        this.balance = null;
        this.newBalance = null;
        this.toBalance = null;
        this.newToBalance = null;
        this.nonce = null;
        this.password = 'Nas20180429';
        this.mTxHash = null;
        this.Receipt = null;
        this.jsonAddressFile = null;
        this.jsonFileContent = null;
    };
    WalletDetailsComponent.prototype.onRemoveOneFile = function (item) {
        item.remove();
    };
    // 选择 From Address Button =================================================================================================================
    WalletDetailsComponent.prototype.onSelectFrom = function (evt) {
        console.log("选择 From Address ");
        //this.selectedCard = new Card;
        this.jsonAddressFile = evt; // FileList object is file, now use _file
        this.fromAddress = this.jsonAddressFile.name.split('.')[0];
    };
    // 选择 From Address Button =================================================================================================================
    WalletDetailsComponent.prototype.onSelectTo = function (evt) {
        console.log("选择 To Address ");
        //this.selectedCard = new Card;
        var jsonAddressFile = evt; // FileList object is file, now use _file
        this.toAddress = jsonAddressFile.name.split('.')[0];
    };
    // 1. 账户解锁 Button =================================================================================================================
    WalletDetailsComponent.prototype.onUnlockAccount = function () {
        var _this = this;
        console.log("1. 账户解锁 - Start ---------------- ");
        var reader = new FileReader();
        reader.onload = function () {
            _this.jsonFileContent = reader.result;
            console.log("jsonFileContent: =========== ");
            console.log(_this.jsonFileContent);
            var obj = JSON.parse(_this.jsonFileContent);
            console.log(obj.address);
            _this.studentService.postAccount(_this.jsonAddressFile).then(function (cardBalance) {
                console.log("1. 账户解锁 - End ");
                console.log(cardBalance);
                var dataBalance = Number(cardBalance.balance) / 1000000000000000000.0;
                if (!isNaN(dataBalance))
                    _this.balance = dataBalance.toString() + ' NAS';
                else
                    _this.balance = '';
                _this.nonce = cardBalance.nonce;
            });
        };
        reader.readAsText(this.jsonAddressFile);
    };
    // 2. 生成签名 Button ===============================================
    WalletDetailsComponent.prototype.onCreateSignData = function () {
        var _this = this;
        if (!this.jsonAddressFile)
            return;
        console.log("2. 生成签名 - Start -------------------- ");
        //this.selectedCard = new Card;
        //var file = evt; // FileList object is file, now use _file
        console.log(this.nonce);
        var nonce = Number(this.nonce) + 1;
        var nonceStr = nonce.toString();
        console.log(nonceStr);
        var value = Number(this.amount) * 1000000000000000000.0;
        var valueStr = value.toString();
        this.studentService.putTransaction(this.jsonAddressFile, { 'nonce': nonceStr, 'value': valueStr, 'toAddress': this.toAddress }).then(function (result) {
            console.log("2. 生成签名 - End");
            console.log(result);
            console.log(result.signed);
            console.log(result.toAccount);
            var dataBalance = Number(result.toAccount.balance) / 1000000000000000000.0;
            if (!isNaN(dataBalance))
                _this.toBalance = dataBalance.toString() + ' NAS';
            else
                _this.toBalance = '';
            _this.mTxHash = result.signed.toString();
        });
    };
    // 3. 发送交易 Button  ================================================
    WalletDetailsComponent.prototype.onSendTransaction = function () {
        var _this = this;
        if (!this.jsonAddressFile)
            return;
        console.log("3. 发送交易 - Start ...... ");
        this.studentService.deleteStudent(this.jsonAddressFile).then(function (cardBalance) {
            console.log("3. 发送交易 - End ...... ");
            console.log(cardBalance);
            _this.Receipt = JSON.stringify(cardBalance);
        });
    };
    // 4. 检查交易 Button  ================================================
    WalletDetailsComponent.prototype.onCheckTransaction = function () {
        var _this = this;
        if (!this.jsonAddressFile)
            return;
        console.log("4. 检查交易 ...... ");
        // get from account status after sending transaction
        this.studentService.getAccountState(this.fromAddress).then(function (cardBalance) {
            var dataBalance = Number(cardBalance.balance) / 1000000000000000000.0;
            _this.newBalance = JSON.stringify(dataBalance) + ' NAS';
        });
        // get to account status after sending transaction
        this.studentService.getAccountState(this.toAddress).then(function (cardBalance) {
            var dataBalance = Number(cardBalance.balance) / 1000000000000000000.0;
            _this.newToBalance = JSON.stringify(dataBalance) + ' NAS';
        });
    };
    WalletDetailsComponent.prototype.checkHashResult = function () {
        var _this = this;
        console.log("5. 查询 Hash Result 信息 ........ ");
        if (!this.Receipt) {
            alert("no hash !");
            return;
        }
        var obj = JSON.parse(this.Receipt);
        this.contractService.getContracts(obj.hash).then(function (result) {
            console.log(result);
            switch (result.status) {
                case 0:
                    _this.hashResult = "0: 交易失败(failed)";
                    break;
                case 1:
                    _this.hashResult = "1: 交易成功(success)";
                    break;
                case 2:
                    _this.hashResult = "2: 交易待定(pending)";
                    break;
            }
            //this.hashResult = result.status.toString();
        });
    };
    WalletDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-wallet-details',
            template: __webpack_require__("./src/app/views/wallet-details/wallet-details.component.html"),
            styles: [__webpack_require__("./src/app/views/wallet-details/wallet-details.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_card_service__["a" /* CardService */], __WEBPACK_IMPORTED_MODULE_2__services_student_service__["a" /* StudentService */], __WEBPACK_IMPORTED_MODULE_3__services_contract_service__["a" /* ContractService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_student_service__["a" /* StudentService */],
            __WEBPACK_IMPORTED_MODULE_3__services_contract_service__["a" /* ContractService */]])
    ], WalletDetailsComponent);
    return WalletDetailsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map