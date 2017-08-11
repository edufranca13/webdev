var mongoose = require("mongoose");

var veiculoSchema = new mongoose.Schema({
	modelo: String,
	placa: String,
	os: [
	{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Os",

	}

	],    

});

module.exports = mongoose.model("Veiculo", veiculoSchema);
