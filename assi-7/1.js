class account{
    constructor(name,balance){
        this.name=name
        this.balance=balance
    }
    checkbalance() {
        console.log(`Account balance for Mithium S: ${this.balance}`);
    }
    deposit(amount){
        this.amount=amount;
        if (amount<0){
            console.log(`Invalid deposit amount.Please enter a positive amount`);
        }else{
            this.balance+=amount;
            console.log(`Deposited Rs: ${amount}.New balance: Rs.${this.balance}`);
           
        }
    }
    withdraw(money){
        this.money=money
        if (money<0){
            console.log(`Invalid withdraw amount.Please enter a positive amount`);
        }else if(money>this.balance){
            console.log("Insufficient funds for withdrawl");
        }else{
            this.balance-=money;
            console.log(`Withdraw Rs: ${money}.New balance: Rs.${this.balance}`);
        }
    }
}
const myaccount=new account('Mithium S',999);
myaccount.checkbalance();
myaccount.deposit(500);
myaccount.deposit(-50);
myaccount.withdraw(200);
myaccount.withdraw(1500);
myaccount.withdraw(-500);
myaccount.checkbalance();
