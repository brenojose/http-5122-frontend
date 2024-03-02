/*
1. Attach a JavaScript file to the JS_Assign-1-groupLogin.html file.                                                                                                                        <- Done!
2. A popup box should ask the user which team number they belong to.                                                                                                                        <- Done!
3. If a user does not provide the correct team number (numeral, not text), a popup message will let them know that they are denied access.              <- needs to be numeral input.       <- Done!
4. Users that provide the correct team number (as set by you, pick one number 1 to 6) will be asked what their first name is.                           <- okay, number 4 then.             <- Done!
5. The code should check if the provided name belongs to a set list of the members of your team (use the names of four other classmates).               <- Akash, Evneet, Isibor and me     <- Done!    
6. Valid members will be greeted by a popup message that welcomes them by their full name.                                                              <- need to know their full names    <- Done!
7. Users that submit a value that is not a valid team member name will see a popup with an “Access denied!” message.                                    <- if else statement                <- Done!
*/

// Initial thought: For this I think I need 5 text variables, one if else statement, 2 prompts, 1 variable to store the names.

// First I need to declare the variables
var teamQuestion = "Welcome! Please, enter your team number (1 to 6):";
var banHammer = "Access denied!";
var firstName = "Could you please provide your first name?";
var greetings = "Welcome back to our secret website, ";
var fNameStorage = ["breno", "evneet", "isibor", "akash"];

var numberInput = prompt(teamQuestion);

    
if (isNaN(numberInput) || numberInput === "") {    // I didn't put null here because don't make sense appearing this alert for a null input, makes more sense appearing the "banHammer" one.
    alert ("Please type only numbers in this box")
} else if (parseInt(numberInput) === 4) {
    var checkName = prompt(firstName).toLowerCase();    //I had a little hard time here, because I was trying to put just the prompt(firstName) and trying to check the includes function using "firstName" inside. tolowercase I saw in class
    

    if (fNameStorage.includes(checkName)) {    //I'm thinking now how can I put the full name if the nameStorage is being used to test the input... I mean, the nameStorage don't have the full name, just the first one.
        
        switch (true) {                        //took me a while to understand about the uses of switch function, but this website helped me, since I didn't knew about switch true pattern (https://seanbarry.dev/posts/switch-true-pattern)
            case checkName === "breno":
                checkName = "Breno Jose Gomes de Souza"
                alert (greetings + checkName + "!");
                break;
            
            case checkName === "evneet":
                checkName = "Evneet Kaur"
                alert (greetings + checkName + "!");
                break;

            case checkName === "isibor":
                checkname = "Isibor Eromosele"
                alert (greetings + checkName + "!");
                break;
            
            case checkName === "akash":
                checkName = "Akash Sharma"       
                alert (greetings + checkName + "!"); 
                break;
        }

    } else {
        alert(banHammer);
      }


  } else {
    alert (banHammer);
    }

/* 
Final thought: When I first looked at this assignment, I thought it would be a bit easier. However, I ended up having to figure out new things that I wasn't familiar with before, such as isNaN, parseInt, and includes. It also didn't take as much time as I thought (I think). It took about 3 hours to study the assignment and the new functions. I feel relieved to be able to finish without getting stuck for too long on something specific.

                                        - References -
Study of parseInt I used (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
Study of isNaN I used (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN)
Study of includes I used (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
Study of switch true pattern I used (https://seanbarry.dev/posts/switch-true-pattern) 
*/