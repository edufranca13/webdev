var express               = require('express'),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    bodyParser            = require('body-parser'),
    LocalStrategy         = require('passport-local'),
    passportLocalMongoose = require('passport-local-mongoose'),
    User                  = require('./models/user');

mongoose.connect("mongodb://localhost/auth_demo_app");

app = express(),

app.use(bodyParser.urlencoded({extended: true}));

app.use(require("express-session")({
  secret: "Just a few English Words",
  resave: false,
  saveUninitialized: false,
}));

app.set("view engine", "ejs");
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//----ROUTES----//
app.get("/", function(req, res) {
  res.render("home");
});

app.get("/secret", isLoggedIn, function(req, res) {
  res.render("secret");
});

app.get("/register", function(req,res) {
  res.render("register");
});

app.post("/register", function(req,res) {
  User.register(new User({username: req.body.username}), req.body.password, function(err, user){
    if (err) {
      console.log("Error: " + err);
      return res.render('register');
    }
    passport.authenticate("local")(req, res, function() {
      res.redirect("/secret");
    });
  });
});

app.get("/login", function(req, res) {
	res.render("login");
});

app.post("/login", passport.authenticate("local", {
	successRedirect: "/secret",
	failureRedirect: "/login"
}), function(req, res) {
});

app.get("/logout", function(req, res) {
	req.logout();
	res.redirect("/");
});

//middleware function
function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect("/login");
};

app.listen(3000, function() {
  console.log("Server is on.");
});
