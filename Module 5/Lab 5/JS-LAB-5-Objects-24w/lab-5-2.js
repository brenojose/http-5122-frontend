//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  MAKE THE BANK
//1. Create the object structure first.
//2. Add the required properties to your object.
//3. Add your first method and test it. Remember, the methods will change the properties of the object.
//4. Add your second method and test it.
//5. Create the required output to complete steps 6-10 of the lab.
//6. Once everything is working, tackle the Stretch Goal!
var customer24 = {
    lastName: "Breno",
    branchNumber: "15790",
    accountBalance: 500.25,
    interestRate: 1.03,
    multipleAccounts: true,
    makeDeposit: function (value) {
        customer24.accountBalance += value;
        return "Thank you, your current balance is now $ " + customer24.accountBalance;
    },
    makeWithdrawal: function (value) {
        customer24.accountBalance -= value;
        return "Thank you, your current balance is now $ " + customer24.accountBalance;
    },
    addInterest: function () {
        let interest1 = customer24.interestRate;
        if (customer24.multipleAccounts = true) {
            interest1 += 0.005;
        }
        customer24.accountBalance = customer24.accountBalance * interest1;
        return "Thank you, your current balance is now $ " + customer24.accountBalance.toFixed(2);
    }
}
console.log(customer24.accountBalance);
console.log(customer24.makeDeposit(200));
console.log(customer24.makeWithdrawal(75));
console.log(customer24.addInterest());
console.log(customer24.accountBalance.toFixed(2));

