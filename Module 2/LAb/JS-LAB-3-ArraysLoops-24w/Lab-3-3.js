//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========
var cart = [];
var totalOfCart = 0;
var cartMessage = "Please tell me the price of your item:"

//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.
	while (totalOfCart < 35) {
	//GET ITEM COST FROM USER
	let itemPrice = prompt(cartMessage);
	
	
	//CONVERT USER INPUT TO A NUMBER
	let integerPrice = parseInt(itemPrice);


	
	
	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
	totalOfCart = totalOfCart + integerPrice;
	
	
	
	//PUSH ITEM COST TO CART ARRAY
	cart.push(itemPrice);
	}
	


//SEND POPUP MESSAGE TO USER
alert("Congratulations! Your shipping will be free! Your total purchase was: " + totalOfCart + " CAD");


//SEND OUTPUT TO CONSOLE
console.log("The item prices were: " + cart.join(" | "));

