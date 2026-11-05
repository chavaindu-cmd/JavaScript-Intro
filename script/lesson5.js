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

function atm() 
{
    const message = parseFloat(
        prompt("Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit")
    );

    switch (message)
    {
        case 1:
            account.getBalance();
            break;

        case 2:
            account.deposit(Number(prompt(`Enter amount`)));
            break;

        case 3:
            account.withdrawal(Number(prompt(`Enter amount`)));
            break;

        case 4:
            account.getAccountName();
            break;

        case 5:
            account.exitAccount();
            break;
            
    }
}
account.getAccountName();
account.getBalance();

account.deposit(600);
account.getBalance();

account.withdrawal(200);
account.getBalance();

account.withdrawal(2000);

account.exitAccount();

atm();