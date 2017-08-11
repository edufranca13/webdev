var mongoose = require('mongoose');

var Product = require('../models/product');
var Comment = require('../models/comment');

var data = [
  {
    name: "Pochete Triângulos Maneiros",
    image: "/assets/images/2.png",
    price: 52.00,
    type: "Pochete",
  },
  {
    name: "Pochete Abacaxi",
    image: "/assets/images/3.png",
    price: 45.00,
    type: "Pochete",
  },
  {
    name: "Pochete Psicodélica",
    image: "/assets/images/4.png",
    price: 42.00,
    type: "Pochete",
  },
  {
    name: "Pochete Real",
    image: "/assets/images/4.png",
    price: 42.00,
    type: "Pochete",
  },
];

function seedDB() {
  Product.remove({}, function(err) {
    if (err)
      console.log(err);
    else {
      data.forEach(function(seed) {
        Product.create(seed, function(err, product) {
          if (err)
            console.log(err);
          else {
            Comment.create({
              text: "Ai que pochetinha mais linda",
              author: "Lila",
            }, function(err, comment) {
              if (err)
                console.log(err);
              else {
                product.comments.push(comment);
                product.save();
              };
            });
          };
        });
      });
    };
  });
};

module.exports = seedDB;
