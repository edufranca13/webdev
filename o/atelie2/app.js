var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

//banco de dados dos produtos so far...
var products = [ 
	{name: "Carnavalesca", image: "img/3.png", price: "45,00", id: 232},
	{name: "Carnavalesca", image: "img/5.png", price: "45,00", id: 232},
	{name: "Carnavalesca", image: "img/2.png", price: "45,00", id: 232},
	{name: "Carnavalesca", image: "img/3.png", price: "45,00", id: 232},
	{name: "Carnavalesca", image: "img/5.png", price: "45,00", id: 232},
	{name: "Carnavalesca", image: "img/2.png", price: "45,00", id: 232},
	];

app.get("/", function(req, res){
	res.render("index", {products : products});
});


app.get("/imgs/:id", function (req, res) {
	var id = Number(req.params.id);
	var obj = products.filter(function (elem) {
		return elem.id === id;
	})[0];
	res.send(obj);
})

app.listen(3000, function() {
	console.log("Server has started");
});


