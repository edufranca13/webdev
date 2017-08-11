var array = [1,2,3,4];

function printReverse(array){
	var reversedArray = array.reverse();
	reversedArray.forEach(function(i) {
		console.log(i);
	});
}

function isUniform(array){
	var first = array[0];
	var answer = true;
	array.forEach(function(i) {
		if (i !== first)
			answer = false;
	});
	return answer;
}

function sumArray(array){
	var sum = 0;
	array.forEach(function(i) {
		sum += i;	
	});
	return sum;
}

function max(array){
	var maximum = array[0];
	array.forEach(function (i) {
		if (i > maximum)
			maximum = i;
	});
	return maximum;
}


