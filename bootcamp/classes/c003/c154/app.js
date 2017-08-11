var express = require('express');
var app = express();


app.get("/", function(req, res){
	res.render("index.ejs");
});

app.get("/products/:id", function(req, res) {
	var id = req.params.id;
	res.render("products.ejs", {id : id});
});

app.listen(3000, function() {
	console.log("SERVER ON");
});