var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

mongoose.connect("mongodb://localhost/camps");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

var campSchema = new mongoose.Schema({
	name: String,
	image: String,
	desc: String,
});

var Campground = mongoose.model("Campground", campSchema);

app.get("/", function (req, res) {
	res.redirect("/campground");
});

app.get("/campground", function(req, res) {
	Campground.find({}, function(err, camps){
		if (err)
			console.log(err);
		else
			res.render("index", {camps: camps});
	});
});

app.get("/campground/new", function(req, res) {
	res.render("new");
});

app.post("/campground", function(req, res) {
	Campground.create(req.body.camp, function(err, campground) {
			if (err)
				console.log(err);
			else
				res.redirect("/");
	});
});

app.get("/campground/:id", function(req, res) {
	Campground.findById(req.params.id, function(err, campground) {
		if (err)
			console.log(err);
		else
			res.render("show", {campground: campground});
	});
});

app.listen(3000, function() {
	console.log("Server is on.");
});
