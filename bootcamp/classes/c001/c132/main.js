class Person {
	constructor(name, age, city){
		this.name = name;
		this.age = age;
		this.city = city;
	}
	toString() {
		console.log("My name is " + this.name + ", I am " + this.age + " years old and I am from " + this.city + ".");
	}

	// static methods are used with the class itself, i.e, without instantiating
	static diffAge(p1, p2){
		return p1.age - p2.age;
	}
}

