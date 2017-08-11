var score1 = document.querySelector(".score1");
var score2 = document.querySelector(".score2");

function playTil() {
	var points = Number(document.getElementById('box').value);
	while (points <= 0){
		points = prompt("Points should be bigger than one");
		document.getElementById('box').value = points;
	}
	console.log(points);
	return points;
}

var btn1 = document.querySelector(".btn1");
btn1.addEventListener('click', function () {

	var til = playTil();
	if (Number(score1.textContent) === til || Number(score2.textContent) === til)
		return;
	else if (Number(score1.textContent) === til - 1){
		score1.textContent = Number(score1.textContent) + 1;
		score1.style.color = "green";
	}
	else
		score1.textContent = Number(score1.textContent) + 1;

});

var btn2 = document.querySelector(".btn2");
btn2.addEventListener('click', function () {

	var til = playTil();
	if (Number(score1.textContent) === til || Number(score2.textContent) === til)
		return;
	else if (Number(score2.textContent) === til - 1){
		score2.textContent = Number(score2.textContent) + 1;
		score2.style.color = "green";
	}
	else
		score2.textContent = Number(score2.textContent) + 1;

});