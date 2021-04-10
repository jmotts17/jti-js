const name = 'Joshua';
const middle = "Anthony";
const last = `Motta`;

const sentence = `she's so "cool"`

const hello = `Hello my name is ` + name + `. Nice to meet you.`;
const hello2 = `Hello my name is ${name}. Nice to meet you. I am ${1 + 100} years old.`

const html = `
    <div>
        <h2>${name}</h2>
        <p>${hello}</p>
    </div>  
`;

document.body.innerHTML = html;

/* Additional Notes */
// back ticks keep spacing
// concatenation when 2 strings are combined
// interpolation when a variable is used within a string