class Movie {
	constructor(title, rating, seen){
		this.title = title;
		this.rating = rating;
		this.seen = seen;
	}

	toString() {
		if (this.seen)
			console.log("You have watched " + this.title + " - " + this.rating + " stars");
		else
			console.log("You have not watched " + this.title + " - " + this.rating + " stars");
	}
}

var movie1 = new Movie("In Bruges", 5, true);
var movie2 = new Movie("Frozen", 4.5, false);
var movie3 = new Movie("Mad Max Fury Road", 5, true);
var movie4 = new Movie("Les Miserables", 3.5, false);

var movieArray = [];

movieArray.push(movie1);
movieArray.push(movie2);
movieArray.push(movie3);
movieArray.push(movie4);

movieArray.forEach(function(i) {
	i.toString();
});