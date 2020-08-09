let savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
      if (amount > 0) {
          savingsAccount.balance += amount;
      }
  },
  withdraw: function removeMoney(amount) {
      var verifyBalance = savingsAccount.balance - amount;
      if (amount > 0 && verifyBalance >= 0) {
          savingsAccount.balance -= amount;
      }
  },
  
  printAccountSummary: function() { 

    console.log("Bienvenido, Tu saldo es de $" +this.balance + " y tu porcentaje de interes es del " +this.interestRatePercent + "%.");
  }

  
};

savingsAccount.printAccountSummary();