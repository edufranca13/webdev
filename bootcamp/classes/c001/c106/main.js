function doSomething() {
	console.log("Hewllo world");
}

function argumentedFunction(num) {
	return 10*num;
}

function square(num) {
	return num*num;
}


function capitalize(arg) {

	if (typeof arg === "number")
		return "this is not a string";
	
	var newString = arg[0].toUpperCase() + arg.slice(1);
	return newString;
}