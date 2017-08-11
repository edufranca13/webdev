//creates an empty shopping cart
var cart = [];

//change images accordingly
$('img').on({
	'mouseenter':function() {
		var name = $(this).attr("src");
		name = name.slice(4,5);
		name = "img/" + name + "b.png";
		$(this).attr("src", name);
	},
	'mouseleave':function () {
		var name = $(this).attr("src");
		name = name.slice(4,5);
		name = "img/" + name + ".png";
		$(this).attr("src", name);
	},
	//this must goes to the selling page of the product
	//so it probably will grab some information of the product
	//which may be a certain class and wiill pass this info to the next html page
	//what this carries? it carries information about the img? 
	//how can I connect my main.js to the routes so I can pass what the user clicked to
	//the address so i can render a page in which we have the product`s info
	'click':function(){
		cart.push(this);
		alert('img clicked');
	},
});

//search mechanism
$('input').keypress(function(event) {
	if (event.which === 13)	
		alert($(this).val());
});


