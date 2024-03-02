//Whereas arrays use [], objects use {}.
var myObject = {};

//What properties of your object are important to your program?
var myCat = {
	name: "Buster",
	breed: "Tabby",
	age: 6,
	sex: "M",
	fixed: false	
};

//Getting a value from an object...
var catName = myCat.name; //Dot notation accesses the properties of an object. catName will be "Buster".

//Setting a value for an object...
myCat.fixed = true; // myCat.fixed is now true.

//Objects can have functions (“methods”) as values. They ususally modify or access a property of this object.
var myCat = {
	name: "Buster",
	age: 6,
	sex: "M",
	addBirthday: function () {
		myCat.age = myCat.age + 1;
	}
};

//Calling a function that is a method of an object - with dot notation!
myCat.addBirthday();  //Now, myCat.age is 7.
myCat.addBirthday();  //Now, myCat.age is 8.

//Object properties can have values of any data type or of an array, or an object - or an array of objects!
var myCat = {
	name: "Buster",
	vaccinations: [{shot: "FeLV", date: 20240911}, {shot: "Rabies", date: 20230324}]	
};