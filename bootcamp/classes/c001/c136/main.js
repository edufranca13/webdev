var btn = document.querySelector("button");

btn.addEventListener("click", function() {
	console.log("hey you!");
});

var div = document.querySelector("div");
var b = false;
btn.addEventListener("click", function() {
	if (b)
		div.style.background = "blue";
	else
		div.style.background = "white";
	b = !b;

});