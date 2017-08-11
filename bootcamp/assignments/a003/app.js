var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var passport = require('passport');
var Camp = require('./models/campground');
var Comment = require('./models/comment');
var User = require('./models/user');
var seedDB = require('./seed/product-seed');
var LocalStrategy = require('passport-local');
var app = express();

seedDB();
mongoose.connect("mongodb://localhost/campsBase");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

app.use(require("express-session")({
	secret: "Rusty is awesome!",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function(req, res) {
	res.redirect("/campground");
});

app.get("/campground", function(req, res) {
	Camp.find({}, function(err, camps) {
		if (err)
			console.log(err);
		else
			res.render("./campground/index", {camps: camps});
	});
});

app.get("/campground/new", function(req, res){
	res.render("./campground/new");
});

app.post("/campground", function(req, res) {
	Camp.create(req.body.camp, function(err, camp) {
		if (err)
			console.log(err);
		else
			res.redirect("/");
	});
});

app.get("/campground/:id", function(req, res) {
	Camp.findById(req.params.id).populate("comments").exec(function(err, camp) {
		if (err)
			console.log(err);
		else {
			res.render("./campground/show", {camp: camp});
		}
	});
});

app.get("/campground/:id/edit", function(req, res) {
	Camp.findById(req.params.id, function(err, camp){
		if (err)
			console.log(err);
		else
			res.render("./campground/edit", {camp: camp});
	});
});

app.put("/campground/:id", function(req, res) {
	Camp.findByIdAndUpdate(req.params.id, req.body.camp, function(err) {
		if (err)
			console.log(err);
		else
			res.redirect("/");
	});
});

app.delete("/campground/:id", function(req, res) {
	Camp.findByIdAndRemove(req.params.id, function(err){
		if (err)
			console.log(err);
		else
			res.redirect("/");
	});
});

app.get("/register", function(req,res){
	res.render("./user/register");
});

app.post("/register", function(req, res) {
	User.register(new User({username: req.body.username}), req.body.password, function(err, user){
		if (err){
			console.log(err);
			return res.render("./user/register");
		}
		passport.authenticate("local")(req, res, function(){
			res.redirect("/campground");
		});
	});
});

app.listen(3000, function() {
	console.log("Server is on.");
});
