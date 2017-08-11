var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/blog_demo");

var postSchema = new mongoose.Schema({
  title: String,
  content: String,
});

var Post = mongoose.model("Post", postSchema);

var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  //association with the postSchema
  posts: [postSchema],
});

var User = mongoose.model("User", userSchema);

//create new user
var newUser = new User({
  email: "john@brown.edu",
  name: "Johnny Brown",
});

//embedding data in user
newUser.posts.push({
  title: "Hello World!",
  content: "aaa",
});

newUser.save(function(err, user) {
  if (err)
    console.log(err);
  else
    console.log(" ");
});

//creating new post
var newPost = new Post({
  title: "Blah",
  content: "Shshshsh",
});

newPost.save(function(err, post) {
    if (err)
      console.log(err);
    else
      console.log(post);
});

//retrieving and adding data
// User.findOne({name: "Johnny Brown"}, function(err, user) {
//   if (err)
//     console.log(err);
//   else {
//     user.posts.push({
//       title: "Blah Blah Blah",
//       content: "lorem2 lorem2 lorem2",
//     });
//     user.save(function(err, user) {
//       if (err)
//         console.log(err);
//       else
//         console.log(user);
//     });
//   }
// });
