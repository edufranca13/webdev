var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var path = require('path');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/user');


var route = require('./routes/index');
var user = require('./routes/user');
var os = require('./routes/os');

var app = express();

app.set("view engine", "ejs");

app.use(require('express-session')({
	    secret: 'keyboard cat',
	        resave: false,
		    saveUninitialized: false

}));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(bodyParser.urlencoded({extended: true}));

app.use('/', route);
app.use('/user', user);
app.use('/os', os);

mongoose.connect("mongodb://localhost/man-auto");

app.listen(3000, function() {
	    console.log("Server is on");

});
