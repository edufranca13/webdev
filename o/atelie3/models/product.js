var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
	name: String,
	image: String,
	price: Number,
	type: ({type: String, default: "Carteira Mágica"}),
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
  }],
});

module.exports = mongoose.model("Product", productSchema);
