//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX
var boxAlert = "Do you want to see something?"
//LISTEN FOR load EVENT
window.onload = wrapper;

//'WRAPPER' FUNCTION FOR DOM LOGIC
function wrapper (){
	var box1 = document.getElementById("mysteryBox");
	box1.onmouseover = boxHover;

	function boxHover(){
		if (confirm(boxAlert)) {
			var btn1 = document.getElementById("buttonBox");
			box1.style.display = "none";
			btn1.style.display = "block";
			btn1.onclick = boxExpand;
		}
}
function boxExpand() {
    var btn1 = document.getElementById("buttonBox");
    btn1.style.width = "600px";
    btn1.style.backgroundColor = "orange";
	btn1.innerHTML= "<h2>SURPRISE!!</h2>";
}
}
	//GET DOM ELEMENTS WE'LL NEED


	//====CREATE THE FUNCTIONS WE'LL NEED====
	//FUNCTION TO ASK USER


	//FUNCTION TO CHANGE buttonBox


	//SETUP LISTENERS


//END onload FUNCTION