var express = require("express");
var router = express.Router();

var mongojs = require("mongojs");
//var db = mongojs("mongodb://bcit:Mang0@ds151108.mlab.com:51108/institutedb", ['students']);
//var db = mongojs("institutedb", ['students']);

var myMongo = require("../db");

// list all the students
router.get("/list", (req, res, next) => {
    //res.send("STUDENTS API Page");
    myMongo.getDb( (err, myMongo) => {
        if (err) {
            console.log("Database Connection Failed" + err);
        } else {
            myMongo.students.find( (err,data) => {
                if (err) {
                    res.send(err);
                }
                res.render("list", {
                    title: "List Students",
                    data: data
                })
            });
        }
    });
});

// display a create form to the user
router.get("/create", (req, res, next) => {
    res.render("create", {
        title: "Add a student"
    });
});

// create/add student
router.post("/student", (req, res, err) => {
    myMongo.getDb( (err, myMongo) => {
        if (err) {
            console.log("Database Connection Failed" + err);
        } else {
            var student = req.body;
            if (!student.StartDate) {
                student.StartDate = new Date();
            }

            if (!student.FirstName || !student.LastName || !student.School) {
                res.status(400);
                res.json(
                    {error: "Bad data, could not insert in database"}
                );
            } else {
                myMongo.students.save(student, (err, data) => {
                    if (err) {
                        res.send(err)
                    }
                    res.redirect("/forms/list");
                });
            }
        }
    });
});

// display a delete confirmation page
router.get("/delete/:id", (req, res, next) => {
    myMongo.getDb( (err, myMongo) => {
        if (err) {
            console.log("Database Connection Failed" + err);
        } else {
            myMongo.students.findOne( {_id: mongojs.ObjectId(req.params.id)},
                function(err, data) {
                    if (err) {
                        res.send(err)
                    }
                    res.render("delete", {
                        title: "Delete a student", data: data
                    });
                });
        }
    });
});

// delete a student
router.post("/delete", (req, res, next) => {
    myMongo.getDb( (err, myMongo) => {
        if (err) {
            console.log("Database Connection Failed" + err);
        } else {
            var student = req.body;
            myMongo.students.remove( {_id: mongojs.ObjectId(student._id)}, (err,data) => {
                if (err) {
                    res.send(err);
                }
                res.redirect("/forms/list");
            });
        }
    });
});

// display edit student form
router.get("/edit/:id", (req, res, next) => {
    myMongo.getDb( (err, myMongo) => {
        if (err) {
            console.log("Database Connection Failed" + err);
        } else {
            myMongo.students.findOne( {_id: mongojs.ObjectId(req.params.id)},
                function(err, data) {
                    if (err) {
                        res.send(err)
                    }
                    res.render("edit", {
                        title: "Edit a student", 
                        data: data
                    });
                });
        }
    });
});

// update student
router.post("/edit", (req, res, next) => { 
        myMongo.getDb( (err, myMongo) => {
        if (err) {
            console.log("Database Connection Failed" + err);
        } else {
            var student = req.body;
            var changedStudent = {};

            if (student.FirstName) {
                changedStudent.FirstName = student.FirstName;
            }

            if (student.LastName) {
                changedStudent.LastName = student.LastName;
            }

            if (student.School) {
                changedStudent.School = student.School;
            }

            if (student.StartDate) {
                changedStudent.StartDate = student.StartDate;
            }

            if (!changedStudent) {
                res.status(400);
                res.json( {error: "Bad data"});
            } else {
                myMongo.students.update(
                    {_id: mongojs.ObjectId(student._id)},
                    changedStudent, {}, (err,data) => {
                        if (err) {
                            res.send(err);
                        }
                        res.redirect("/forms/list");
                    }
                );
            }
        }
    });
});

module.exports = router;