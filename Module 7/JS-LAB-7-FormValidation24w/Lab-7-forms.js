window.onload = function() {
    var nameInput = document.getElementById("in_Name");
    var postalInput = document.getElementById("in_pc");
    var formInput = document.getElementById("shippingForm");
    var thanksMessage = document.getElementById("thanks_msg");
    var thanksCustomer = document.getElementById("thanksCustomer");
    var thanksPC = document.getElementById("thanksPC");

    formInput.addEventListener("submit", function(event) {
        event.preventDefault();

        if (nameInput.value === "") {
            nameInput.style.backgroundColor = "red";
            nameInput.focus();
            return;
        } else {
            nameInput.style.backgroundColor = "";
        }

        if (postalInput.value === "") {
            postalInput.style.backgroundColor = "red";
            postalInput.focus();
            return;
        } else {
            postalInput.style.backgroundColor = "";
        }

        var name = nameInput.value;
        var pc = postalInput.value;

        thanksCustomer.textContent = name;
        thanksPC.textContent = pc;

        formInput.style.display = "none";
        thanksMessage.style.display = "block";
    });
};