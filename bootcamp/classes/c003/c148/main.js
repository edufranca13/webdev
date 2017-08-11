var para = document.createElement('p');
document.body.appendChild(para);

para.textContent = "hello world";

$('body').on("click", function() {
	alert("clicked");
});

