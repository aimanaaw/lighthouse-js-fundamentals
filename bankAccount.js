let savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    let verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  },
  printAccountSummary: function printAccountSummary() {
    return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%.";
  }
};
// correct syntax
// console.log(savingsAccount.printAccountSummary());

// console.log(savingsAccount.balance);
// console.log(savingsAccount["balance"]);

// console.log(savingsAccount.withdraw=50);
// console.log(savingsAccount.removeMoney=50);


// incorrect syntax
// console.log(savingsAccount.withdraw(50));
// console.log(savingsAccount.removeMoney(50));

savingsAccount.balance;
savingsAccount["balance"];

console.log(savingsAccount.withdraw(50));
console.log(savingsAccount.printAccountSummary());
savingsAccount.removeMoney=50;