//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION
var numAsk1 = "Please input your first grade course: "
var numAsk2 = "Please input your second grade course: "
var numAsk3 = "Please input your third grade course: "
var numAsk4 = "Please input your fourth grade course: "
var numAsk5 = "Please input your fifth grade course: "
var grade1 = parseFloat(prompt(numAsk1));
var grade2 = parseFloat(prompt(numAsk2));
var grade3 = parseFloat(prompt(numAsk3));
var grade4 = parseFloat(prompt(numAsk4));
var grade5 = parseFloat(prompt(numAsk5));

//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.
function fiveNumbers (paramOne, paramTwo, paramThree, paramFour, paramFive) {
    let averageNumber = ((paramOne + paramTwo + paramThree + paramFour + paramFive)/5).toFixed(1);
    return averageNumber;
}
console.log(fiveNumbers(5, 10, 15, 20, 25));
//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

var averageGrade = fiveNumbers(grade1, grade2, grade3, grade4, grade5);

if (averageGrade >= 70) {
    alert("Congratulations! You have successfully passed! Your average grade is: " + averageGrade + ".");
} else {
    alert("Review required. Your average grade is " + averageGrade + ".");
}

