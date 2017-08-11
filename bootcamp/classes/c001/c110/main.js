function isEven(num){
	if (num % 2)
		return false;
	else 
		return true;
}

function factorial(num) {
	if (num === 0)
		return 0;
	else if (num === 1)
		return 1;
	else
		return factorial(num-1)*num;
}

function factorial2(num) {
	var newNum = 1;
	while (num !== 1){
		newNum *= num;
		num--;
	}
	if (num === 0)
		return 0;
	else
		return newNum;
}

function kebabToSnake(str){
	return str.replace("-", "_");
}

function kebabToCamel(str){
	if (str.indexOf("-") === -1)
		return str;
	else if (str.indexOf("-") === 0)
		return str.slice(1);
	else if (str.indexOf("-") === str.length - 1)
		return str.slice(0, str.length - 1);
	return str.slice(0, str.indexOf("-")) + str.slice(str.indexOf("-")+1)[0].toUpperCase() + str.slice(str.indexOf("-")+2);
}