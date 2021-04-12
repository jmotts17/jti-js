function calculateBill() {
  console.log('Running calculate bill!!');
  const total = 100 * 1.13;
  return total;
}

const myTotal = calculateBill();
console.log(`Your total is $${Math.ceil(myTotal)}.`);

console.log(`Your total is $${Math.ceil(calculateBill())}.`);
