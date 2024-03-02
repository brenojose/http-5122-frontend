//#### LAB 4 - FUNCTIONS ####
//PART 3:  WALKING THE DOG 
var temperature = "What is the current temperature?";
var tempHot = "Yikes! Too hot for dog walking!";
var tempGood = "You're good, have a nice walk!";
var tempCold = "Yikes! This is no weather for dog walking!";

//################## CREATE YOUR checkTemp FUNCTION
function checkTemp(currentTemp) {
    if (currentTemp > 30 || currentTemp < -10) {
        return false;
    } else {
        return true;
    }
}
//This function will...
//It expects to receive...
//It will return...

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
var tempMessage = parseFloat(prompt(temperature));
if (checkTemp(tempMessage) === false) {
        alert(tempCold);
    } else {
    alert(tempGood);
}

checkTemp();