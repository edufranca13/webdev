console.log("working");
while (true) {
	var answer = prompt("are you there yet?");
	var lowerCaseAnswer = answer.toLowerCase();
	if (lowerCaseAnswer.indexOf("yes") > -1 || lowerCaseAnswer.indexOf("yeah") > -1) {
		console.log("Yeahk");
		break;
	}
}