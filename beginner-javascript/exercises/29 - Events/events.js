const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('IT GOT CLICKED');
}

const hooray = () => console.log('HOORAY!');

butts.addEventListener('click', function () {
  console.log('Im an anon!');
});

butts.removeEventListener('click', handleClick);

coolButton.addEventListener('click', hooray);

// Listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

// function buyItem() {
//   console.log('Buying item');
// }

// function handleBuyButtonClick(buyButton) {
//   console.log('Binding the buy button');
//   buyButton.addEventListener('click', buyItem);
// }

// buyButtons.forEach(handleBuyButtonClick);

// buyButtons.forEach((button) => {
//   button.addEventListener('click', () => {
//     console.log('You clicked it!');
//   });
// });

function handleBuyButtonClick(event) {
  console.log('You clicked a button');
  const button = event.target;
  //   console.log(button.textContent);
  //   console.log(parseFloat(event.target.dataset.price));
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
  // Stop this event from bubbling up
  //   event.stopPropagation();
}

buyButtons.forEach(function (buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
  'click',
  function (event) {
    console.log('You clicked the window:');
    console.log(event.target);
    console.log(event.type);
    // event.stopPropagation();
    console.log(event.bubbles);
  },
  {
    capture: true,
  }
);

const photoEl = document.querySelector('.photo');
photoEl.addEventListener('mousemove', function (e) {
  console.log(e.currentTarget);
  console.log(this);
});

/* Additional Notes */
// Callback Function - A function that we pass to a method that will be called at a later time.
// Anonymous functions can't be removed
// event.target is the element that actually got clicked
// event.currentTarget is the actual element
