var express = require('express');
var Os = require('../models/os');
var Cliente = require('../models/cliente');
var Veiculo = require('../models/veiculo');
var router = express.Router();

router.get('/', function(req,res) {
	if (req.user) {
		res.render('os/index', {
			user: req.user

		});

	}
	else
		res.send("Acesso restrito.");

});

router.get('/new', function(req, res) {
	if (req.user)
		res.render("os/new", {
			user: req.user

		});
	else
		res.send("Acesso restrito.")

});

router.post('/', function(req, res) {
	if (req.user) {
		Cliente.find({
			nome: req.body.cliente.nome,
			sobrenome: req.body.cliente.sobrenome

		}, function(err, cliente) {
			if (err)
				res.redirect("/");
			else {
				if (cliente.length > 0) {
					Veiculo.find({
						placa: req.body.veiculo.placa

					}, function(err, veiculo) {
						if (err)
							res.redirect("/");
						else {
							if (veiculo.length > 0) {
								Os.create(req.body.os, function(err, os) {
									if (err)
										res.redirect("/");
									else {
										veiculo.os.push(os);
										res.redirect('/');

									}

								})

							}
							else {
								Veiculo.create(req.body.veiculo, function(err, veiculo) {
									if (err)
										res.redirect("/");
									else {
										Os.create(req.body.os, function(err, os) {
											if (err)
												res.redirect("/");
											else {
												veiculo.os.push(os);
												res.redirect("/");

											}

										})

									}

								})

							}

						}

					});

				}
				else {
					Cliente.create(req.body.cliente, function(err, novoCliente) {
						if (err)
							res.redirect("/");
						else {
							Veiculo.create(req.body.veiculo, function(err, novoVeiculo) {
								if (err)
									res.redirect("/");
								else {
									Os.create(req.body.os, function(err, novaOs) {
										if (err)
											res.redirect("/");
										else {
											novoVeiculo.os.push(novaOs);
											novoVeiculo.save();

											novoCliente.veiculo.push(novoVeiculo);
											novoCliente.save();

											res.redirect("/");

										}


									})

								}

							})

						}

					})

				}

			}

		});


	}
	else
		res.send("Acesso restrito.")

});

router.get('/:id', function(req, res) {
	if (req.user)
		res.render("os/new", {
			user: req.user

		});
	else
		res.send("Acesso restrito.")

});

router.get('/:id/edit', function(req, res) {
	if (req.user)
		res.render("os/new", {
			user: req.user

		});
	else
		res.send("Acesso restrito.")

});

module.exports = router;

