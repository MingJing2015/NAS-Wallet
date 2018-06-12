var express = require("express");
var router = express.Router();

var mongojs = require("mongojs");
var myDB = mongojs("mongodb://ming:123456@ds161059.mlab.com:61059/institutedb", ['cards']);
//var db = mongojs("institutedb", ['cards']);

//var myDB = require("../db");

var Nebulas = require("./indexNeb");

var Neb = Nebulas.Neb;
var neb = new Neb();

neb.setRequest(new Nebulas.HttpRequest("https://testnet.nebulas.io"));   


router.get("/cards", (req, res, next) => {
    //res.send("STUDENTS API Page");
    /*
    myDB.getCardDb( (err, myDB) => {
        if (err) {
            console.log("Database Connection Failed" + err);
        } else {
            console.log("Database Connectioned by getCardDb");
            myDB.cards.find( (err,data) => {
                if (err) {
                    res.send(err);
                }
                res.json(data);
            });
        }
    });
    */

   myDB.cards.find(function(err, data){
    if (err) {
      res.send(err)
    }
    res.json(data);
  });
});


// For get NAS card Balance Info from NAS-net, use neb.js 
router.get("/cards/:id", (req, res, next) => {

    console.log("In router.get cardsBalance : by id ");

    neb.api.getAccountState(req.params.id).then(function (state) {

        res.json(state).json();
    });
});



// get single card
/*
router.get("/cards/:id", (req, res, next) => {
    myDB.getCardDb( (err, myDB) => {
        if (err) {
            console.log("Database Connection Failed" + err);
        } else {
            myDB.cards.findOne( {_id: mongojs.ObjectId(req.params.id)}, (err,data) => {
                if (err) {
                    res.send(err);
                }
                res.json(data);
            });
        }
    });
});
*/

// create/add card
router.post("/cards", (req, res, err) => {

    console.log("In cards.js post ...................------------------- reate/add card ");

    var card = req.body;
    if (!card.StartDate) {
        card.StartDate = new Date();
    }

    if (!card.OwnerName || !card.CardName || !card.CardAddress) {
        res.status(400);
        res.json(
            {error: "Bad data, could not insert in database"}
        );
    } else {
        myDB.cards.save(card, (err, data) => {
            if (err) {
                res.send(err)
            }
            res.status(200);
            res.json(data);
        });
    }
});

router.delete("/cards/:id", (req, res, next) => {
    
    myDB.cards.remove( {_id: mongojs.ObjectId(req.params.id)}, (err,data) => {
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
});

// update card
router.put("/cards/:id", (req, res, next) => { 
    var card = req.body;
    var changedCard = {};

    if (card.OwnerName) {
        changedCard.OwnerName = card.OwnerName;
    }

    if (card.CardName) {
        changedCard.CardName = card.CardName;
    }

    if (card.CardAddress) {
        changedCard.CardAddress = card.CardAddress;
    }

    if (card.Password) {
        changedCard.Password = card.Password;
    }   

    if (card.StartDate) {
        changedCard.StartDate = card.StartDate;
    }

    if (!changedCard) {
        res.status(400);
        res.json( {error: "Bad data"});
    } else {
        myDB.cards.update(
            {_id: mongojs.ObjectId(req.params.id)},
                changedCard, {}, (err,data) => {
                    if (err) {
                        res.send(err);
                    }
                    res.json(data);
                }
        );
    }
});

module.exports = router;