function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  console.log('Running calculate bill!!');
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

// const myTotal = calculateBill(100, 0.13);
// const myTotal2 = calculateBill(20 + 20 + 30 + 20, 0.15);
const myTotal4 = calculateBill(100, undefined, 0.2);
// console.log(myTotal);
// console.log(myTotal2);
console.log(myTotal4);

function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

const greeting = sayHiTo('Josh');
// console.log(greeting);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = '') {
  return `HEY ${name.toUpperCase()}`;
}

const name = 'Josh';
// console.log(yell(doctorize(name)));
// console.log(yell());
