$('img').click(function() {
	var name = $(this).attr("src");
	name = name.slice(0,1);
	name += "b.png";
	console.log(name);

	$(this).attr("src", name);

});