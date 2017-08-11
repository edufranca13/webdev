var counter = document.querySelectorAll("code > a");

console.log(counter.length);

for (var i = 0; i < counter.length; i++) {
	console.log(counter[i].title);
}
