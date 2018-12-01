const accessory = 9.99;
const phone_cost = 99.99;
const tax_rate = 1.07;
let bank_balance = prompt('How much money do you have in the bank?');

amount = (phone_cost + accessory) * tax_rate;

if (amount < bank_balance) {
  bank_balance = bank_balance - amount;
  console.log('Cost: $' + amount.toFixed(2));
  console.log("Bank Balance is now: $" +  bank_balance.toFixed(2));
}
else {
  console.log('no thanks');
  console.log("Bank Balance is now: $" +  bank_balance);
}
