var mongoose = require("mongoose");

var clienteSchema = new mongoose.Schema({
	nome: String,
	sobrenome: String,
	endereco: String,
	veiculo: [
	{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Veiculo",

	}

	],    

});

module.exports = mongoose.model("Cliente", clienteSchema);
