// --- Normal / Common Declaration ---
// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// --- Anonymous Function ---
// function (firstName) {
//     return `Dr. ${firstName}`;
// }

// --- Function Expression ---
// const doctorize = function (firstName) {
//   doesntExist();
//   return `Dr. ${firstName}`;
// };

// --- Arrow Functions ---
const inchToCM = (inches) => inches * 2.54;

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

const add = (a, b = 3) => a + b;

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// --- IIFE - Immediately Invoked Function Expression ---

(function (age) {
  return `You are cool and age ${age}`;
})(10);

// --- Methods!!! ---
const wes = {
  name: 'Wes Bos',
  // Method!
  sayHi() {
    console.log('Hey Wes');
    return 'Hey Wes';
  },
  // Short hand Method
  yellHi() {
    console.log('HEY WESSSS');
  },
  // Arrow function
  whisperHi: () => {
    console.log('hii wess im a mouse');
  },
};

// --- Callback Functions ---
// Click Callback
const button = document.querySelector('.clickMe');

function handleClick() {
  console.log('Great Clicking!!!');
}

button.addEventListener('click', function () {
  console.log('Nice Job!!');
});

// Timer Callback
setTimeout(() => {
  console.log('Time to eat!');
}, 1000);

/* Additional Notes */
// * Difference between Function Expression and normal Function Declaration is that the
//   normal Function Declaration gets hoisted (moved up) to before it is called.
// * A function expression is still an anonymous function as no name is being given to the function
// * Explicit return - physically typing out return vs Implicit return - Implied return (return
//   keyword is unneeded)
// * Methods are functions that live inside an object
