var express = require('express');
var app = express();

//ROUTE
app.get("/", function(req, res) {
	res.render("index.ejs");
});

app.get("/love/:thing", function(req, res) {
	var thing = req.params.thing;
	res.render("love.ejs", {thingVar : thing});
})

//LISTEN
app.listen(3000, function() {
	console.log("Server has started.");
})