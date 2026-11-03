const account = {
    accountName: "Indusha",
    balance: 1000,

    getBalance: function() 
    {
        console.log(`Your current balance is: ${this.balance}`);
    },

    getAccountName: function() 
    {
        console.log(`Account holder: ${this.accountName}`);
    },

    deposit: function(amount) 
    {
        this.balance = this.balance + amount;
        console.log(`You deposited: ${amount}`);
    },

    withdrawal: function(amount) 
    {
        if (amount <= this.balance) 
        {
            this.balance = this.balance - amount;
            console.log(`You withdrew: ${amount}`);
        }
        else 
        {
            this.accountError();
        }
    },

    accountError: function() 
    {
        console.log("Not enough balance");
    },

    exitAccount: function()
    {
        console.log("You exited the account");
    }
};
account.getAccountName();
account.getBalance();

account.deposit(600);
account.getBalance();

account.withdrawal(200);
account.getBalance();

account.withdrawal(2000);

account.exitAccount();