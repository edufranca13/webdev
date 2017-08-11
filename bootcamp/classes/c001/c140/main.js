$('h1').css("color", "blue");

var styles = {
	color: "red",
	background: "pink",
	borded: "2px solid purple"
}

$('h1').css(styles);

var lis = document.querySelectorAll('li');

function changeToBlue(li){
	li.style.color = "blue";
}

lis.forEach(changeToBlue);

$('li').css("font-size", "2rem");

$('li').css({
	fontSize: "10px",
	border: "3px dashed purple",
	background: "rgba(89, 45, 20, 0.5)",
});