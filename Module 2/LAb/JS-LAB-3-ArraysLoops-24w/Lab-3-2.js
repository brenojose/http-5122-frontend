//LAB 3 - ARRAYS & LOOPS - PART 2


//PM TEAM MEMBER ARRAY
var ourTeam =["John", "Doe", "Cole", "Joseph", "Aaron"];

//OUTPUT TEAM ARRAY TO JS CONSOLE
console.log(ourTeam);


//REMOVE LAST MEMBER
ourTeam.pop(4);
console.log(ourTeam);

//ADD SEAN TO FRONT OF ARRAY
ourTeam.unshift("Sean");
console.log(ourTeam);

//REARRANGE THE ARRAY ALPHABETICALLY
ourTeam.sort();
console.log(ourTeam);

//OUTPUT REQUIRED MESSAGE TO JS CONSOLE
console.log("We have " + ourTeam.length + " people in our group.");


//LOOP THROUGH ARRAY TO OUTPUT TEAM MEMBERS/NUMBERS TO JS CONSOLE

for (let i = 0; i < ourTeam.length; i++) {
 console.log("#" + [i + 1] + " " + ourTeam[i]);
}