var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();

router.get('/register', function(req, res) {
	res.render('user/register', { user : req.user  });

});

router.post('/register', function(req, res) {
	User.register(new User({ username : req.body.username  }), req.body.password, function(err, account) {
		if (err) {
			return res.render('user/register', { account : account  });

		}

		passport.authenticate('local')(req, res, function () {
			res.redirect('/');

		});

	});

});

router.get('/login', function(req, res) {
	res.render('user/login', { user : req.user  });

});

router.post('/login', passport.authenticate('local', {
	successRedirect: "/secret",
	failureRedirect: "/login"
}), function(req, res) {
	res.redirect('/');
});

router.get('/logout', function(req, res) {
	req.logout();
	res.redirect('/');

});

router.get('/ping', function(req, res){
	res.status(200).send("pong!");

});

module.exports = router;
