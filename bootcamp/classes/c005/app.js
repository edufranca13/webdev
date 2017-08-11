var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost/demo");

var friendSchema = new mongoose.Schema({
	name: String,
	age: Number,
});

var Friend = mongoose.model("Friend", friendSchema);
// var tony = new Friend({
// 	name: "Carla",
// 	age: 27,
// });

// tony.save(function(err, friend) {
// 	if(err)
// 		console.log("wrong.");
// 	else
// 		console.log(friend + " added.");
// });

Friend.create({
	name: "Snow",
	age: 27,
});

Friend.find({}, function(err, friends) {
	if(err){
		console.log(err);
	}
	else
		console.log(friends);
});

app.get("/", function (req, res) {
	res.send("hello");
});

app.get('/friends', function (res, res) {
	res.render('friends', {friends : friends});
});

app.post("/addfriends", function(req, res) {
	var f = req.body.friendName;
	friends.push(f);
	res.redirect('/friends');
})

app.listen(3000, function() {
	console.log("Server is on.")
})
