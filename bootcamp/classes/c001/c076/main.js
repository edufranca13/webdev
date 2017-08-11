$(document).ready(function() {
	$("p").click(function() {
		$(this).hide();
	})
})


var firstName = prompt("Whats is your first name?");
var lastName = prompt("Whats is your last name?");
var age = prompt("Whats is your age?");
console.log("Hello " + firstName + " " + lastName);
console.log("You are " + age + " " + "years old");


var x = 10;
var y = 15;

if (x < y || x + y > 39) {
	console.log("right");
}

