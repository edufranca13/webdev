var express = require('express');
var router = express.Router();
var Skill = require('../models/skills');
var csrf = require('csurf');

var csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
  Skill.find({}, function(err, skills) {
  if (err)
    console.log(err);
  else
    res.render('shop/index', {title: "Express", skills: skills });
  });
});

router.get('/user/signup', function(req, res, next) {
  res.render('user/signup', {csrfToken: req.csrfToken()});
});

router.post('/user/signup', function(req, res, next) {
  res.redirect("/");
});

module.exports = router;
