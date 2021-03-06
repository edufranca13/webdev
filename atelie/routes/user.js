var express = require('express');
var router = express.Router();
var passport = require('passport');

//protection middleware
var csrf = require('csurf');

var csrfProtection = csrf();
router.use(csrfProtection);

router.get('/signup', function(req, res) {
  var messages = req.flash('error');
  res.render('./user/signup', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

router.post('/signup', passport.authenticate('local.signup', {
  successRedirect: './profile',
  failureRedirect: './signup',
  failureFlash: true,
}));

router.get('/profile', function(req, res, next) {
  res.render('./user/profile');
});

module.exports = router;
