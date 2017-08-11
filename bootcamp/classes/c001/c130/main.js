function todoListApp() {
	var todoList = [];
	while (true) {
		var answer = prompt("What do you want to do?");
		if (answer === "new"){
			var newTodo = prompt("Write the task");
			todoList.push(newTodo);
		}
		else if (answer === "list") {
			for (var i = 0; i < todoList.length; i++)
				console.log(todoList[i]);
		}
		else if (answer === "quit"){
			console.log("you quit the app");
			break;
		}
		else
			console.log("not an operation");
	}
}