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
	// 'click':function(){
	// 	cart.push(this);
	// 	alert('img clicked');
	// },
});

//search mechanism
$('input').keypress(function(event) {
	if (event.which === 13)	
		alert($(this).val());
});


