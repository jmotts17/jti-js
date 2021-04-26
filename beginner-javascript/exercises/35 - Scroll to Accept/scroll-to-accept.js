// function scrollToAccept() {
//   const terms = document.querySelector('.terms-and-conditions');

//   if (!terms) {
//       return; // quit this if there isn't that item on the page.
//     }

//     terms.addEventListener('scroll', function (e) {
//         console.log(e);
//     });
// }
//
// scrollToAccept();

const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

function obCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    // stop observing button
    ob.unobserve(terms.lastElementChild);
  } else {
    button.disabled = true;
  }
}

const ob = new IntersectionObserver(obCallback, { root: terms, threshold: 1 });

// ob.observe(watch);

ob.observe(terms.lastElementChild);
