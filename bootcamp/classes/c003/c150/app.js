var express = require("express");
var app = express();

//ROUTES
// / => "HI THERE!"
app.get("/", function(request, response) {
	response.send("Hi There");
});

// /dogs => "dogs";
app.get("/dogs", function(request, response) {
	console.log("someone made a request to /dogs");
	response.send("woof");
})
//make our app to liste to a particular port
app.listen(3000, function() {
	console.log("Server has started")
});
