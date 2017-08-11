$('input[type="text"]').keypress(function(event) {
	if (event.which === 13){
		$('ul').append("<li><span><i class='fa fa-trash'></i></span> " + $(this).val() + "</li>");
		$(this).val("");
	}
});

$('ul').on("click", "li", function() {
	$(this).toggleClass("done");
});

$('ul').on("click", "span", function(event) {
	console.log($(this));
	$(this).parent().fadeOut(500, function (){
		$(this).remove();
	});
	event.stopPropagation();
});

$('.fa-plus').click(function() {
	$('input').fadeToggle();
});


