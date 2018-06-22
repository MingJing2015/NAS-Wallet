

var express = require("express");
var router = express.Router();

//var mongojs = require("mongojs");
//var db = mongojs("mongodb://ming:123456@ds161059.mlab.com:61059/institutedb", ['students']);
//var db = mongojs("institutedb", ['students']);

//var myMongo = require("../db");

var Nebulas = require("nebulas"),
Transaction = Nebulas.Transaction,
Utils = Nebulas.Utils,
Unit = Nebulas.Unit,
neb = new Nebulas.Neb(),
//validateAll = uiBlock.validate(),
//gLastGenerateInfo = {},
gTx;


neb.setRequest(new Nebulas.HttpRequest("https://testnet.nebulas.io"));

// Global !!
var Account;
var account;

var mTxHash; // For transaction 

// getAccountState ----------------------------------
router.get("/students", (req, res, next) => {

    neb.api.getAccountState("n1PfySvoUyNfWg6xKDohK96TCWbSxQXLdwB").then(function (state) {
        res.json(state);
    }).catch(function (err) {
        res.send(err);
    });

});

// get single Account state --------------------------------
router.get("/students/:id", (req, res, next) => {

    console.log("get/Student/id: ");
    console.log(req.params.id);

    neb.api.getAccountState(req.params.id).then(function (state) {
        res.json(state);
    }).catch(function (err) {
        res.send(err);
    });
});


// 账户解锁 unluck Account by json file -----------------------------------------------------
router.post("/students", (req, res, err) => {

    var fileJson = req.body;

    console.log("1. 账户解锁 ");
    console.log(fileJson);
    console.log(fileJson.address);

    //Account = Nebulas.Account;  Old way
    var Account = require("nebulas").Account;

    //account = Account.NewAccount();

    console.log("mFileJson ###################################################### ");
    
    // account.fromKey(fileJson, 'Nas20180429');   Old way ???
    var account = Account.fromAddress(fileJson.address);  // #1. New Way  
    console.log(account);
    
    account.fromKey(fileJson, 'Nas20180429');             //  #2. 1,2 all is right, can use one to get account, but no privKey and pubKey info, just has address info
                                                          //  but, can 实现交易 Transaction ！！
    // Get from web-wallet:
    // privKey: Uint8Array(32) [173, 247, 98, 188, 75, 192, 99, 100, 69, 2, 71, 21, 235, 100, 124, 48, 163, 115, 94, 249, 251, 193, 183, 120, 144, 122, 90, 39, 178, 221, 250, 2]
    // pubKey: Uint8Array(64) [229, 104, 234, 30, 214, 114, 68, 167, 157, 232, 168, 94, 11, 139, 122, 134, 165, 211, 125, 55, 157, 143, 225, 133, 130, 229, 224, 133, 240, 238, 37, 82, 151, 131, 227, 94, 179, 165, 243, 183, 69, 220, 245, 88, 110, 58, 122, 175, 150, 164, 115, 182, 181, 150, 63, 205, 57, 233, 74, 141, 204, 110, 224, 241]

    console.log(account);

    neb.api.getAccountState(account.getAddressString()).then(function (state) {
        res.json(state);
    }).catch(function (err) {
        res.send(err);
    });
});


// 2. 生成签名  ----------------------------------------------
router.put("/students/:id", (req, res, next) => {

    console.log(" ");
    console.log("2. 生成签名 ");

    var fileJson  = req.body;
    var info      = req.params.id;

    var toAddress = info.split(' ')[0];
    var nonce     = info.split(' ')[1];
    var value     = info.split(' ')[2];

    console.log("Value: " + value);
    console.log(nonce);
    console.log(toAddress);
    console.log(fileJson);
    
    Account = Nebulas.Account;              // Global 
    Transaction = Nebulas.Transaction;      //

    account = Account.NewAccount();
    account.fromKey(fileJson, 'Nas20180429');

    gas_price = 1000000
    gas_limit = 200000;

    gTx = new Transaction(1001, account, toAddress, Number(value), Number(nonce), gas_price, gas_limit);
    gTx.signTransaction();

    // console.log(" ");
    // console.log(" New gTx.toProtoString(): +++++++++++++++++++++ +++++++++++++++++++");
    // console.log(gTx.toProtoString());   

    // For waiting: gTx.signTransaction() get result, same time get to Address info
    neb.api.getAccountState(toAddress).then(function (state) {

            //res.json(gTx.toProtoString());
            
            // For return more info
            res.json({'signed': gTx.toProtoString(), 'toAccount':state});

        }).catch(function (err) {
            res.send(err);
    });
});


// 发送交易 For send signed transaction:  
router.delete("/students/:id", (req, res, next) => {

    console.log(" ");
    console.log("3. 发送交易 ");
    //console.log(gTx);
    //console.log(gTx.toProtoString());

   neb.api.sendRawTransaction(gTx.toProtoString()) //TODO: GTX为空是 抛异常
    .then(function (resp) {

        //console.log("sendRawTransaction resp: " + JSON.stringify(resp));
        mTxHash = resp.txhash;

        console.log(" mTxHash: ================== ");
        console.log(mTxHash);

        neb.api.getTransactionReceipt(mTxHash).then(function (state) {

            console.log(" Receipt: ~~~~~~~~~~~~~~~~~` ");
            console.log(state);
            
            res.json(state);
            //res.json(mTxHash);

        }).catch(function (err) {
            res.send(err);
        });
    });
});

module.exports = router;