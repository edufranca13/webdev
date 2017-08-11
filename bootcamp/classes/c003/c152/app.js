var express = require('express');
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
	res.send("Hello");
	res.end();
});

app.post('/addfriend', function (req, res) {
  res.send('Got a POST request');
});

app.get("/friends", function(req, res){
	var friendsList = ["Tony", "Justin", "Jessica", "Alex", "Tyler", "Bryan", "Marcus", "Zach", "Justin", "Clay"];
	res.render("friends", { friends : friendsList});
});

app.listen(3000, function() {
	console.log("Server is listening.");
})