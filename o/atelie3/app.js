var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var Comment = require('./models/comment');
var Product = require('./models/product');
var seedDB = require('./seed/seed');
var app = express();

var birds = require('./routes/birds');
app.use('/birds', birds);

seedDB();
mongoose.connect("mongodb://localhost/product");
app.set("view engine", "ejs");

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

app.get("/", function(req, res) {
	res.redirect("/miti");
});

//Index route
app.get("/miti", function(req, res){
	Product.find({}, function(err, products) {
		if (err)
		console.log(err);
		else
		res.render("./product/index", {products : products});
	});
});

//New route
app.get("/miti/new", function(req, res) {
	res.render("./product/new");
});

//Create route
app.post("/miti", function(req, res) {
	Product.create(req.body.product, function(err, product) {
		if (err)
		console.log(err);
		else
		res.redirect("/");
	})
});

//Show route
app.get("/miti/:id", function (req, res) {
	Product.findById(req.params.id).populate("comments").exec(function(err, product) {
		if (err) {
			console.log('here');
		}
		else
		res.render("./product/show", {product: product});
	});
});

//Edit route
app.get("/miti/:id/edit", function(req, res) {
	Product.findById(req.params.id, function(err, product) {
		if (err)
			console.log(err);
		else
			res.render("./product/edit", {product: product});
	});
});

//Update route
app.put("/miti/:id", function(req, res) {
		Product.findByIdAndUpdate(req.params.id, req.body.product, function(err, product) {
			if(err)
				console.log(err);
			else
				res.redirect("/miti/" + req.params.id);
		});
});

//Comment create route
app.post("/miti/:id/comment", function(req, res) {
	Product.findById(req.params.id, function(err, product) {
		if (err)
			console.log(err);
		else {
			Comment.create(req.body.comment, function(err, comment) {
					if (err)
						console.log(err);
					else {
						product.comments.push(comment);
						product.save();
						res.redirect("/miti/" + product._id);
					}
			});
		}
	});
});

app.listen(3000, function() {
	console.log("Server has started");
});
