

var express = require("express");
var router = express.Router();

var Nebulas = require("nebulas"),
    Transaction = Nebulas.Transaction,
    Utils = Nebulas.Utils,
    Unit = Nebulas.Unit,
    neb = new Nebulas.Neb(),
    //validateAll = uiBlock.validate(),
    //gLastGenerateInfo = {},
    gAccount, gTx;


neb.setRequest(new Nebulas.HttpRequest("https://mainnet.nebulas.io"));
//neb.setRequest(new Nebulas.HttpRequest("https://testnet.nebulas.io"));

var netID = 1;
//var netID = 1001;

// Global !!
var Account;
var account;
var mTxHash; // For transaction 


// Testing : getAccountState ----------------------------------
router.get("/contracts", (req, res, next) => {

    // 1. 查看合约信息 ........ 
    //neb.api.getTransactionReceipt("c1ac05b55936e25d6fd959e51c7066b7d434428a005515963604f9bd3243f383")
    neb.api.getTransactionReceipt("7b571d64d9387826d7b5dc16d9c18b49f46aaac4da8a08000d5868a87503f8bc")

        .then(function (resp) {

            console.log(resp);
            console.log(resp.type);
            console.log(resp.data);

            res.json(resp.data);

        }).catch(function (err) {
            res.send(err);
        });

});

// get single Account state --------------------------------
// 1. 查看合约、交易结果信息 ........ 
router.get("/contracts/:id", (req, res, next) => {

    console.log("get/contracts/id: ");
    console.log(req.params.id);

    /*
    neb.api.getAccountState(req.params.id).then(function (state) {
        res.json(state);
    }).catch(function (err) {
        res.send(err);
    });
    */

    // 1. 查看合约信息 ........ 
    neb.api.getTransactionReceipt(req.params.id)
        .then(function (resp) {

            console.log("查看合约、交易结果信息 ........ ");
            console.log(resp);
            //res.json(resp.data);
            res.json(resp);

        }).catch(function (err) {
            res.send(err);
        });
});


// #1. 账户解锁 unluck Account by json file -----------------------------------------------------
router.post("/contracts", (req, res, err) => {

    // unused ???

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


// 2. 测试合约  ----------------------------------------------
router.put("/contracts/:id", (req, res, next) => {

    console.log(" ");
    console.log("2. 测试合约... ... ");

    var data = req.body;
    console.log(data);

    var info = req.params.id;

    var from = info.split('`')[0];
    var nonce = info.split('`')[1];
    var value = info.split('`')[2];
    var contractAddress = info.split('`')[3];

    console.log("tempObj: -------------------------------------------  ");

    var tempObj = {
        'from': from,
        'to': contractAddress,
        'value': Utils.toBigNumber(value),
        'nonce': nonce,
        'gasPrice': 1000000,
        'gasLimit': Utils.toBigNumber(10),
        'contract': { 'function': data.function, 'args': data.arguments }
    };

    console.log(tempObj);

    neb.api
        .call({
            'from': from,
            'to': contractAddress,
            'value': Utils.toBigNumber(value),
            'nonce': nonce,
            'gasPrice': 1000000,
            'gasLimit': Utils.toBigNumber(10),
            'contract': { 'function': data.function, 'args': data.arguments }
        })
        .then(function (resp) {

            console.log(resp);
            res.json(resp);
        });
});


// curl -i -H 'Accept: application/json' -X POST https://testnet.nebulas.io/v1/admin/transactionWithPassphrase -H 'Content-Type: application/json' -d '{"transaction":{"from":"n1L5AExWGCP299jB5RWmdo7t6qCRZ4MW8PW","to":"n1zQ3F2ZLsyQGeJjefhxoXCh6Uq2jesqvkB", "value":"0","nonce":66,"gasPrice":"1000000","gasLimit":"2000000","contract":{"function":"takeout","args":"[1]"}}, "passphrase": "Nas20180429"}'
// Moved Permanently

// 执行合约 Call :  
router.post("/contracts/:id", (req, res, next) => {

    console.log(" ");
    console.log("3. 执行合约 Call()  start... ######################################################");

    var info = req.params.id;   // can not include ? in req.params.id;  !!!
    console.log(info);

    var toAddress = info.split('`')[0];   // should contract Address 
    var password = info.split('`')[1];   // should contract Address 
    var nonce = info.split('`')[2];
    var value = info.split('`')[3];
    var functions = info.split('`')[4];
    var argumentss = info.split('`')[5];

    var fileJson = req.body;
    console.log(fileJson.address);

    Account = Nebulas.Account;              // Global 
    Transaction = Nebulas.Transaction;      //

    //console.log("account: ###################################################### ");

    account = new Account();
    //account = account.fromKey(fileJson, 'Nas20180429');  // Password need to change by user input  ?????
    account = account.fromKey(fileJson, password);  // Password need to change by user input  ?????
    account.getAddressString();         // After this getAddressString, account got : privKey, pubKey, address

    gas_price = 1000000
    gas_limit = 10000000;

    var valueNum = parseFloat(value);

    // prepare value
    value = Utils.toBigNumber(valueNum);

    console.log("tempObj: -------------------------------------------  ");
    var tempObj = { 'function': functions, 'args': argumentss };
    console.log(tempObj);

    neb.api.getAccountState(fileJson.address)
        .then(function (state) {

            console.log("查看合约、交易结果信息 ... get form status real Nonce: ");
            console.log(state.nonce);
            //var _nonce = Number(state.nonce) + 1;

            console.log(" Parameter nonce: %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%    ");
            console.log(nonce);

            //gTx = new Transaction(this.netID, account, toAddress, value, Number(nonce), gas_price, gas_limit, { 'function': functions, 'args': argumentss });
            gTx = new Transaction(this.netID, account, toAddress, value, Number(nonce), gas_price, gas_limit, tempObj);

            console.log(gTx);

            //gTx = new Transaction( 1001, account, toAddress, value, Number(nonce), gas_price, gas_limit, tempObj);
            gTx.signTransaction();

            console.log(" PgTx.toProtoString() : %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%    ");
            console.log(gTx.toProtoString());

            neb.api.sendRawTransaction(gTx.toProtoString()) //TODO: GTX为空是 抛异常
                .then(function (resp) {

                    //console.log("sendRawTransaction resp: " + JSON.stringify(resp));
                    mTxHash = resp.txhash;

                    console.log("发送交易 end, mTxHash: ================== ");
                    console.log(mTxHash);

                    neb.api.getTransactionReceipt(mTxHash).then(function (state) {

                        console.log(" Receipt: ~~~~~~~~~~~~~~~~~` ");
                        console.log(state);

                        res.json(state);

                    }).catch(function (err) {
                        res.send(err);
                    });
                });

        }).catch(function (err) {
            res.send(err);
        });
});


// 发送交易 For send signed transaction:  
router.delete("/contracts/:id", (req, res, next) => {

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