var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var index = require("./routes/index");
var students = require("./routes/students");
var cards = require("./routes/cards");
var forms = require("./routes/forms");


//var port = 3000;

var app = express();
app.set('port', (process.env.PORT) || 3000);

// view engine
var viewEngine = require("ejs-locals");
app.engine("ejs", viewEngine);
app.set("view engine", "ejs");

// set folder for static content
app.use(express.static(path.join(__dirname, "/dist/")));
//app.use(express.static(path.join(__dirname, "/src/")));

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/", index);
app.use("/api", students);
app.use("/api", cards);
app.use("/forms", forms);

app.listen(app.get('port'), () => {
    console.log("Server started on port number " + app.get('port'));
});