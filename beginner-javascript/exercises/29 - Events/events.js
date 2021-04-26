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

function buyItem() {
  console.log('Buying item');
}

function handleBuyButtonClick(buyButton) {
  console.log('Binding the buy button');
  buyButton.addEventListener('click', buyItem);
}

buyButtons.forEach(handleBuyButtonClick);

buyButtons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log('You clicked it!');
  });
});

/* Additional Notes */
// Callback Function - A function that we pass to a method that will be called at a later time.
// Anonymous functions can't be removed
