var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/blog_demo2");

var Post = require("./models/post");
var User = require('./models/user');

//create new user
User.create({
  email: "bob@col.edu",
  name: "Robert Iniest",
}, function(err) {
  if (err)
    console.log(err);
});

Post.create({
  title: "HOW TO COOK THE BEST BURGERJ",
  content: "lorem2 lorem10202 lorem2",
}, function(err) {
  if (err)
    console.log(err);
});

Post.create({
  title: "HOW TO COOK THE BEST BURGER PT. 2",
  content: "lorem2 lorem10202 lorem2",
}, function(err, post) {
  User.findOne({email: "bob@col.edu"}, function(err, foundUser) {
    if (err)
      console.log(err);
    else {
      foundUser.posts.push(post);
      foundUser.save(function (err, data) {
        if (err)
          console.log(err);
        else
          //you will see that posts are not populated
          console.log(data);
      });
    }
  });
});

//retrieving posts populated
User.findOne({email: "bob@col.edu"}).populate("posts").exec(function(err, user) {
  if (err)
    console.log(err);
  else
  console.log(user);
});
