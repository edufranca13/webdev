var express = require('express');
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

//renderizar a página principal
app.get("/", function(req, res){
	res.render("index");
});

//quando clicar em uma imagem deve ir para a respectiva página
//a página é basicamente a mesma com pequenas mudanças nas coisas
app.get("/imgs/:product", function (req, res) {
	var product = req.params.product;
	console.log(product);
	res.send(product.toUpperCase());
})

app.listen(3000, function() {
	console.log("Server has started");
});


