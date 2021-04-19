const p = document.querySelector('p');
const imgs = document.querySelectorAll('.item img');
const item2 = document.querySelector('.item2');
const item2Img = item2.querySelector('img');
const heading = document.querySelector('h2');

console.dir(heading.textContent);
console.dir(heading.innerText);
// set the textContent property on that element
// heading.textContent = 'Josh is cool';
// console.dir(heading.textContent);
// console.log(heading.innerText);

console.log(heading.innerHTML);
console.log(heading.outerHTML);

const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);

// pizzaList.textContent = `${pizzaList.textContent} 🍕`;
pizzaList.insertAdjacentText('afterbegin', '🍕 ');
pizzaList.insertAdjacentText('beforeend', '🍕');
