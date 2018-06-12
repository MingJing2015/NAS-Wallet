var express = require("express");
var router = express.Router();

var mongojs = require("mongojs");
var db = mongojs("mongodb://ming:123456@ds161059.mlab.com:61059/institutedb", ['students']);
//var db = mongojs("institutedb", ['students']);

var myMongo = require("../db");

// var Nebulas = require("./indexNeb");
// var Neb = Nebulas.Neb;
// var neb = new Neb();


var Nebulas = require("nebulas"),
Transaction = Nebulas.Transaction,
Utils = Nebulas.Utils,
Unit = Nebulas.Unit,
neb = new Nebulas.Neb(),
//validateAll = uiBlock.validate(),
//gLastGenerateInfo = {},
gAccount, gTx;




neb.setRequest(new Nebulas.HttpRequest("https://testnet.nebulas.io"));

// Global !!
var Account;
var account;

var mTxHash; // For transaction 


/* Just for testing
neb.api.getAccountState("n1PfySvoUyNfWg6xKDohK96TCWbSxQXLdwB").then(function (state) {
    console.log(state);
}).catch(function (err) {
    console.log(err);
});
*/

// getAccountState ----------------------------------
router.get("/students", (req, res, next) => {

    /*
    var Account = Nebulas.Account;

    var account = Account.NewAccount();
    //console.log(account.getPrivateKeyString());
    //console.log(account.getPublicKeyString());
    //console.log(account.getAddressString());
    //console.log(Account.isValidAddress(account.getAddressString()));
    
    var key = account.toKey("passphrase");
    //console.log(JSON.stringify(key));
    //console.log("********************");
    
    var a1 = new Account();
    a1 = a1.fromKey(key, "passphrase");
    console.log(a1.getPrivateKeyString());
    console.log(account.getAddressString());
    console.log("********************");

    var Transaction = Nebulas.Transaction;
    var tx = new Transaction(100, account, account, "10", 1);
    tx.signTransaction();
    console.log("hash: " + tx.hash.toString("hex"));
    console.log("sign: " + tx.sign.toString("hex"));
    console.log("tx: " + tx.toString());
    console.log("---------------");
    var data = tx.toProtoString();
    console.log("data: " + data);
    tx.fromProto(data);
    console.log("tx: " + tx.toString());
    console.log("address: "+tx.from.getAddressString());
    return;
*/

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

    Account = Nebulas.Account;
    account = Account.NewAccount();
    account.fromKey(fileJson, 'Nas20180429');

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

    // For waiting: gTx.signTransaction() get result !
    neb.api.getAccountState(account.getAddressString()).then(function (state) {

            res.json(gTx.toProtoString());

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