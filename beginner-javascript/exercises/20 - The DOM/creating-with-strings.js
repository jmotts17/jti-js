const item = document.querySelector('.item');

const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `Cute Pup`;
const myHTML = `
    <div class="wrapper">
        <h2>${desc}</h2>
        <img src="${src}" alt="${desc}"/>
    </div>
`;

// console.log(typeof myHTML);

// item.innerHTML = myHTML;

// const itemImage = document.querySelector('.wrapper img');
// itemImage.classList.add('round');

// console.log(itemImage);

// console.log(item.innerHTML);

// turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);

console.log(myFragment.querySelector('img'));
console.log(myFragment);

document.body.appendChild(myFragment);
