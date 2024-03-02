//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
//alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
let userName = "dart";// Correct user name
let pWord = "vader";// Correct password
let nameInput = prompt("Put your username here:");// user name input
let pwordInput = prompt("Put your password here:");// password input



//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME


//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
	console.log("Username: " + nameInput);

//5. CREATE POPUP BOX FOR PASSWORD

//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
	console.log("Password: "+ pwordInput);

//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
	if (nameInput === userName && pwordInput === pWord) {
		
		
		
	

//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE
		alert("Welcome to the dark side, Sr. Vader!")
		console.log("Login successful")
	}


//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE
		else {
			alert("YOU'RE NOT OUR LORD!")
			console.log("Login fail")
		}