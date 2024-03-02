//DECLARED THE VARIABLES
var movie1 = "Haven";
var movie2 = "Limelight";
var movie3 = "Fear";
var movie4 = "Maleficent";
var movie5 = "Se7en";
var movie6 = "Aliens";
var movie7 = "Goodfellas";
var movieTop7 = "Which top 7 movie would you like?";
//DECLARED THE ARRAY
var movieArray =[movie1, movie2, movie3, movie4, movie5, movie6, movie7];
//CREATED A CONDITION TO GET OUT OF THE WHILE LOOP
var condition = true
//CREATED THE WHILE LOOP TO RE-ASK IN CASE OF INVALID DATA AND IF STATEMENT TO VALIDATE THE USER INPUT
while (condition) {
    var movieQuestion = prompt(movieTop7, "Pick a number: 1-7");
    if (isNaN(movieQuestion) || movieQuestion === null || movieQuestion === "" || movieQuestion <= 0 || movieQuestion >= 8) {
        alert("Please enter a number between 1 and 7!");
    } else {
        condition = false
    }
}
//WITHOUT THE LOOP, IT WILL POPUP A MESSAGE FOR THE NUMBER AND MOVIE NAME
alert("Number " + movieQuestion + " on the list is "+ movieArray[movieQuestion - 1]);

//A FOR STATEMENT TO SHOW ALL THE MOVIES IN THE CONSOLE
for (i = 0; i < movieArray.length; i++) {
    console.log("Movie " + [i + 1] + ": " + movieArray[i]);
}




