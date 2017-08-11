var friends = ["Charlie", "David", "Liz", "Mathias"];

var ch = friends.shift();

console.log(ch);

var um = friends.indexOf("Liz");

var doesntbelongtothearray = friends.indexOf("Hagrid");

// looping through an array
for (var i = 0; i < friends.length; i++)
	console.log(friends[i]);

// methods usually doesn't change the original array,
// i.e, they create copies of the array

// slice method (start, end (not included))
var remainingFriends = friends.slice(1,3);

console.log(remainingFriends);