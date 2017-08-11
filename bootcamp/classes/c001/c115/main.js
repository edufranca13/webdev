function sing() {
	console.log("twinkle twinkle");
	console.log("How I wonder?");
}

// This function is to be used in a high order function

// example: 

// sing is without parenthesis because it is not "us" that are calling
// the function sing, but the function setInterval.
setInterval(sing, 2000);