var btn1 = document.querySelector("#p1");
var btn2 = document.getElementById("p2");
var resetBtn = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p = document.querySelector("p");
var numInput = document.querySelector("input");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

btn1.addEventListener("click", function(){
	if (!gameOver){
		p1Score++;
		if (p1Score === winningScore) {
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
});

btn2.addEventListener("click", function(){
	if (!gameOver){
		p2Score++;
		if (p2Score === winningScore){
			p2Display.style.color = "green";
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
});

resetBtn.addEventListener("click", function () {
	reset();
})

function reset() {
	p1Score = 0;
	p1Display.textContent = p1Score;
	p1Display.classList.remove("winner");
	p2Score = 0;
	p2Display.textContent = p2Score;
	p2Display.style.color = "black";
	gameOver = false;
}

numInput.addEventListener("change", function(){
	reset();
	winningScore = Number(this.value);
	p.textContent = "Playing to: " + winningScore; 
})


