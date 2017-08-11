var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var friendsList = ["Justin", "Jessica"];

app.get("/", function(req, res)  {
	res.render("index")
});

app.get("/friends", function(req,res) {
	res.render("friends", {friends : friendsList});
});

app.post("/addfriend", function(req, res) {
	var newFriend = req.body.newfriend;
	friendsList.push(newFriend);
	res.redirect("/friends");
});

app.listen(3000, function(req, res) {
	console.log("ON");
});
