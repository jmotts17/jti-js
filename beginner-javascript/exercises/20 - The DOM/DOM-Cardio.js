// Make a div
// add a class of wrapper to it
// put it into the body
const div = document.createElement('div');
div.classList.add('wrapper');
document.body.appendChild(div);
// console.log(div);

// make an unordered list
// add three list items with the words "one, two three" in them
// put that list into the above wrapper
const list = document.createElement('ul');

for (let i = 1; i <= 3; i += 1) {
  const li = document.createElement('li');

  switch (i) {
    case 1:
      li.textContent = 'One';
      break;
    case 2:
      li.textContent = 'Two';
      break;
    case 3:
      li.textContent = 'Three';
      break;
    default:
      break;
  }
  list.appendChild(li);
}

div.appendChild(list);

// create an image
// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper

const img = document.createElement('img');
const width = 250;
const src = `https://picsum.photos/${width}`;
img.src = src;
img.classList.add('cute');
img.alt = 'Cute Puppy';
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const html = `
    <div class="myDiv">
        <p>Paragraph One</p>
        <p>Paragraph Two</p>
    </div>
`;

const ulElement = div.querySelector('ul');
ulElement.insertAdjacentHTML('beforebegin', html);

// add a class to the second paragraph called warning
const div2 = div.querySelector('.myDiv');
div2.children[1].classList.add('warning');

// remove the first paragraph
div2.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
  const card = `
        <div class="playerCard">
            <h2>${name} - ${age}</h2>
            <p>They are ${height} and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be a tall dog!</p>
        <button class="delete" type="button">Delete</button>
        </div>
    `;
  return card;
}

// make a new div with a class of cards
const cardDiv = document.createElement('div');
cardDiv.classList.add('cards');

// Have that function make 4 cards
let cardsHTML = generatePlayerCard('Josh', '27', '73');
cardsHTML += generatePlayerCard('Jo', '28', '67');
cardsHTML += generatePlayerCard('Dean', '60', '70');
cardsHTML += generatePlayerCard('Tammy', '57', '65');

// append those cards to the div
// put the div into the DOM just before the wrapper element
div.insertAdjacentHTML('beforebegin', cardsHTML);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
// make out delete function
function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  buttonThatGotClicked.closest('.playerCard').remove();
}

// loop over them and attach a listener
buttons.forEach((button) => button.addEventListener('click', deleteCard));
