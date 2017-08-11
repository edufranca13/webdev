var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	//Não sei se é necessário duas páginas, sendo que o usuário logado pode gerar restrições de visualizações.
	if (req.user) {
		res.render('index/loggedIndex', {user: req.user});
	}
	else
		res.render("index/index", {user: false});
});

module.exports = router;


