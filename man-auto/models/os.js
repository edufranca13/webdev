var mongoose = require("mongoose");

var osSchema = new mongoose.Schema({
	numero: Number,
	problema: String,

});

module.exports = mongoose.model("Os", osSchema);
