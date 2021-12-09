function canSellTickets(ArrayOfMoneyByTicket) {
  let EmployeeMoney = 0;
  let GivingBack = 0;
  for (let i = 0; i < ArrayOfMoneyByTicket.length; i++) {
    GivingBack = ArrayOfMoneyByTicket[i] - 25;
    if (GivingBack > 0) {
      if (EmployeeMoney >= GivingBack) {
        EmployeeMoney -= GivingBack;
        GivingBack = 0;
      } else {
        return false;
      }
    } else {
      EmployeeMoney += ArrayOfMoneyByTicket[i];
    }
  }
  return true;
}

// Testing
const ventaNum1 = [25];
const ventaNum2 = [25, 50];
const ventaNum3 = [25, 50, 100];
const ventaNum4 = [25, 50, 75, 100];
const ventaNum5 = [25, 25, 50];
const ventaNum6 = [25, 100];
const ventaNum7 = [25, 25, 50, 50, 100];

console.log("Testing 01 ", canSellTickets(ventaNum1)); // true
console.log("Testing 02 ", canSellTickets(ventaNum2)); // true
console.log("Testing 03 ", canSellTickets(ventaNum3)); // false
console.log("Testing 04 ", canSellTickets(ventaNum4)); // false
console.log("Testing 05 ", canSellTickets(ventaNum5)); // true
console.log("Testing 06 ", canSellTickets(ventaNum6)); // false
console.log("Testing 07 ", canSellTickets(ventaNum7)); // false
