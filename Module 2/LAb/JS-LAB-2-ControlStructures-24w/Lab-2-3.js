//######## LAB 2-3 EMAIL SIGNUP ########
//alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
let newsWelcome = confirm("Welcome to our Newsletter! Would you like to join us?");


//==== LOGIC =============
if (newsWelcome === true) {
    let popupMail = prompt("Provide us your email please:", "me@example.com")

    if (popupMail === "" || popupMail === null || popupMail === "me@example.com") {
        alert("Thank you, but your email was not valid.");
    } else {
        alert("Thank you, our next newsletter will be sent to " + popupMail);
      }
} else {
    alert ("Thank you, we will not bother you again.");
  }