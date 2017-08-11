$('button').on("click", function() {
	$('ul.list').append("<li class='item'> Div1Div1Div1 </li>");
});

$('li').on("click", function() {
	$(this).toggleClass("done");
})