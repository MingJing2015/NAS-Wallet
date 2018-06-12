(function(database) {
    var mongojs = require("mongojs");

    const MONGO_URL = "mongodb://ming:123456@ds161059.mlab.com:61059/institutedb";

    //var db = mongojs("mongodb://ming:123456@ds161059.mlab.com:61059/institutedb",

    // const MONGO_URL = "institutedb" 

    var theDb = null;

    database.getStudentDb = function(next) {
        if (!theDb) {
            // let us connect to the database
            //var theDb = mongojs(MONGO_URL, ['students']);
            var theDb = mongojs(MONGO_URL, ['myWallet']);
            next(null, theDb);
        } else {
             next(null, theDb);
        }
    }

    database.getCardDb = function(next) {

        if (!theDb) {
            // let us connect to the database
            var theDb = mongojs(MONGO_URL, ['myWallet']);
            //var theDb = mongojs(MONGO_URL, ['myWallet']);
            next(null, theDb);
        } else {
             next(null, theDb);
        }
    }


})(module.exports);