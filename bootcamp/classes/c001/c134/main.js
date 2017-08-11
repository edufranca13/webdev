class Comment {
	constructor(data){
		this.data = data;
	}	

	toString() {
		this.data.forEach(function(el){
			console.log(el);
		});
	}
}


