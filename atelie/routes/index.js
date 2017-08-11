var express = require('express');
var router = express.Router();
var Product = require('../models/product');

router.get("/", function(req, res) {
	res.redirect("/miti");
});

//Index route
router.get("/miti", function(req, res){
	Product.find({}, function(err, products) {
		if (err)
		console.log(err);
		else
		res.render("./product/index", {products : products});
	});
});

//New route
router.get("/miti/new", function(req, res) {
	res.render("./product/new");
});

//Create route
router.post("/miti", function(req, res) {
	Product.create(req.body.product, function(err, product) {
		if (err)
			console.log(err);
		else
			res.redirect("/");
	})
});

//Show route
router.get("/miti/:id", function (req, res) {
	Product.findById(req.params.id).populate("comments").exec(function(err, product) {
		if (err) {
			console.log('here');
		}
		else
		res.render("./product/show", {product: product});
	});
});

//Edit route
router.get("/miti/:id/edit", function(req, res) {
	Product.findById(req.params.id, function(err, product) {
		if (err)
			console.log(err);
		else
			res.render("./product/edit", {product: product});
	});
});

//Update route
router.put("/miti/:id", function(req, res) {
		Product.findByIdAndUpdate(req.params.id, req.body.product, function(err, product) {
			if(err)
				console.log(err);
			else
				res.redirect("/miti/" + req.params.id);
		});
});

//Comment create route
router.post("/miti/:id/comment", function(req, res) {
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

//Comment create route
router.post("/miti/:id/comment", function(req, res) {
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

module.exports = router;
