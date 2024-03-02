//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!
var meObject = {
    firstName: "Breno",
    lastName: "Souza",
    age: 30,
    eyeColor: "Dark Brown",
    presentation: function() {
        return "My name is " + meObject.firstName + " and the color of my eyes are " + meObject.eyeColor;
    }
}

// alert("My name is " + meObject.firstName + " and the color of my eyes are " + meObject.eyeColor);
alert(meObject.presentation());