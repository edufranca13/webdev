var header = document.querySelector("h1");

header.style.color = "pink";

var body = document.querySelector("body");
var isBlue = false;

setInterval(function() {
	if (isBlue)
		body.style.background = "white";
	else
		body.style.background = "blue";

	isBlue = !isBlue;
}, 1000)j;