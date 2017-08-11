var randomNumber = Math.floor(Math.random() * 5) + 1;

while (true) {
	var guess = prompt("Guess?");

	if (guess > 5) {
		alert("Guess should be less 5");
	}
	else if (guess < 1) {
		alert("Guess should be bigger than 1");
	}
	else if (Number(guess) === randomNumber) {
		alert("You guessed it.");
		break;
	}
	else {
		alert("Try again.");
	}
}
