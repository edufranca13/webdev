function todo() {

	var todoList = [];

	while(true) {

		var input = prompt("Enter action.");

		if (input === "new") {
			var task = prompt("Enter the task: ");
			todoList.push(task);
		}
		else if (input === "list"){
			console.log("*******");
			todoList.forEach(function(task, i){
				console.log(i + ":" + task);
			})
			console.log("*******");
		}
		else if (input === "delete") {
			var index = prompt("which index?");
			if (index > -1 && index < todoList.length)
				todoList.splice(index, 1);
			console.log("Todo deleted");
		}
		else if (input === "quit")
			break;
		else
			console.log("invalid input");

	}
}
