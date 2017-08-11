var express = require('express');
var app = express();
var request = require('request');
app.set("view engine", "ejs");


app.get('/', function(req, res) {
	res.render('search');
});

app.get('/results',function(req, res) {
	var search = req.query.search;
	var name = 'http://www.omdbapi.com/?s=' + search;
	request(name, function(error, response, body) {
		if (!error && response.statusCode === 200){
			var parsedBody = JSON.parse(body);
			res.render('results', {parsedBody : parsedBody});
		}
	});
});


app.listen(3000, function() {
	console.log("on");
});