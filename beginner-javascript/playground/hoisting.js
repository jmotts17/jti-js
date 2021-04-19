// console.log(age);
// console.log(cool);
// var age = 10;

/* What does this file do? */
sayHi();

/* How does this file do it? */
function sayHi() {
  console.log('Hey!');
  console.log(add(10, 2));
}

function add(a, b) {
  return a + b;
}

// Hoisting moves functions above function calling
// ^ Only works with regular functions ^
// Hoisting will work with varaible declarations, but not their values
