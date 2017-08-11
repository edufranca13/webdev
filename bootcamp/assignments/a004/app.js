var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var expressSanitizer = require('express-sanitizer');
var app = express();

mongoose.connect("mongodb://localhost/posts");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(express.static("public"));
app.use(methodOverride("_method"));

var postSchema = new mongoose.Schema({
  title: String,
  desc: String,
  img: String,
  created: {type: Date, default: Date.now},
});

var Post = mongoose.model("Post", postSchema);

app.get("/", function(req, res) {
  res.redirect("/blog");
});

app.get("/blog", function(req, res) {
  Post.find({}, function(err, posts){
    if (err)
      console.log(err);
    else
      res.render("index", {posts: posts});
  });
});

app.get("/blog/new", function(req, res) {
  res.render("new");
});

app.post("/blog", function(req, res) {
  req.body.post.desc = req.sanitize(req.body.post.desc)
  Post.create(req.body.post, function(err, posts) {
    if (err)
      console.log(err);
    else
      res.redirect("/");
  });
});

app.get("/blog/:id", function(req, res) {
  Post.findById(req.params.id, function(err, post) {
    if (err)
      console.log(err);
    else
      res.render("show", {post: post})
  });
});

app.get("/blog/:id/edit", function(req, res) {
    Post.findById(req.params.id, function(err, post) {
        if (err)
          console.log(err);
        else
          res.render("edit", {post: post});
    });
});

app.put("/blog/:id", function(req, res) {
    req.body.post.desc = req.sanitize(req.body.post.desc)
    Post.findByIdAndUpdate(req.params.id, req.body.post, function(err, post) {
      if (err)
        console.log(err);
      else
        res.redirect("/blog/" + req.params.id);
    });
});

app.delete("/blog/:id", function(req, res) {
  Post.findByIdAndRemove(req.params.id, function(err) {
    if (err)
      console.log(err);
    else {
      res.redirect("/blog");
    }
  });
});

app.listen(3000, function() {
  console.log("Server is on.")
});
