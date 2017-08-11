var mongoose = require('mongoose');

var campSchema = mongoose.Schema({
  name: String,
  description: String,
  image: String,
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
  }],
});

module.exports = mongoose.model("Camp", campSchema);
