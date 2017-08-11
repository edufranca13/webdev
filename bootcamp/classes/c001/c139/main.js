var colorTitle = document.querySelectorAll(".colorTitle");

var recs = document.querySelectorAll(".rec");
var newColorBtn = document.querySelector(".new_colors");

setGame();

function setGame() {
	changeColor();
	var guessedColor = splitRGB(recs[Math.floor(Math.random()*5)]);
	changeTitle(guessedColor);
	guess(guessedColor);
}

newColorBtn.addEventListener('click', function() {
	setGame();
})

function guess(guessedColor) {
	for (var i = 0; i < recs.length; i++) {
		recs[i].addEventListener('click', function() {
			if(compareColors(splitRGB(this), guessedColor))
				console.log("won");
			else {
				this.classList.add("hidden");
				console.log("lost");
			}
		});
	}
}

function compareColors(color1, color2){
	for (var i = 0; i < color1.length; i++) {
		if (color1[i] !== color2[i])
			return false;
		else
			return true;
	}
}

function changeColor(){
	for (var i = 0; i < recs.length; i++)
		recs[i].style.backgroundColor = "rgb("+Math.floor(Math.random()*255)+", " + Math.floor(Math.random()*255)+", " + Math.floor(Math.random()*255)+")";
}

function splitRGB(colorString) {
	var rgb = colorString.style.backgroundColor;
	return rgb.substring(4, rgb.length-1).replace(/ /g, '').split(',');
}

function changeTitle(guessedColor){

	for (var i = 0; i < colorTitle.length; i++) {
		colorTitle[i].textContent = guessedColor[i];
	}

}