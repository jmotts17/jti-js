const myParagraph = document.createElement('p');

myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'Nice photo';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

// Add something to the top like a heading
const heading = document.createElement('h2');
heading.textContent = 'Cool Things';

myDiv.insertAdjacentElement('afterbegin', heading);

const list = document.createElement('ul');

const listItemOne = document.createElement('li');
listItemOne.textContent = 'One';
const listItemTwo = document.createElement('li');
listItemTwo.textContent = 'Two';
const listItemThree = document.createElement('li');
listItemThree.textContent = 'Three';
const listItemFour = document.createElement('li');
listItemFour.textContent = 'Four';
const listItemFive = document.createElement('li');
listItemFive.textContent = 'Five';

list.appendChild(listItemThree);
list.insertAdjacentElement('afterbegin', listItemTwo);
list.insertAdjacentElement('afterbegin', listItemOne);
list.insertAdjacentElement('beforeend', listItemFour);
list.insertAdjacentElement('beforeend', listItemFive);

myDiv.insertAdjacentElement('beforeend', list);
