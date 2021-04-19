// const age = 100;

// function go() {
//   const myAge = 200;
//   const hair = 'brown';
//   console.log(age);
//   console.log(myAge);
//   console.log(hair);
// }

// go();

// function isCool(name) {
//     let cool;
//     if(name === 'josh') {
//         cool = true;
//     }

//     console.log(cool);
//     return cool;
// }

// for (let i=0; i < 10; i++) {
//     console.log(i);
// }

const dog = 'Finn';

function logDog(dog) {
  console.log(dog);
}

function go() {
  const dog = 'Tucker';
  logDog('Rufus');
}

go();

function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase());
  }
  yell();
}

/* Additional Notes */
// Try not to create global variables
// Functions are scoped to the parent function
