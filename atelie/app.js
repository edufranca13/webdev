var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var Comment = require('./models/comment');
var Product = require('./models/product');
var seedDB = require('./seed/seed');
//required for csrf protection
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');

var index = require('./routes/index');
var user = require('./routes/user');

var app = express();

seedDB();
mongoose.connect("mongodb://localhost/product");
require('./config/passport');

//view engine
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'mysupersecret', resave: false, saveUninitialized: false}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));
app.use(express.static('public'));

app.use("/", index);
app.use("/user", user);

app.listen(3000, function() {
	console.log("Server has started");
});
