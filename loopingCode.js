// Looping Code--

// const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

// for (const cat of cats) {
//   console.log(cat);
// }
//---------------------------------
// map() and filter()
// You can use map() to do something to each item in a collection and create a new collection containing the changed items:

// function toUpper(string) {
//   return string.toUpperCase();
// }

// const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

// const upperCats = cats.map(toUpper);

// console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]

// You can use filter() to test each item in a collection, and create a new collection containing only items that match:
// function lCat(cat) {
//   return cat.startsWith('L');
// }

// const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

// const filtered = cats.filter(lCat);

// console.log(filtered);
// [ "Leopard", "Lion" ]

// -------------------------------------

// const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

// const filtered = cats.filter((cat) => cat.startsWith('L'));
// console.log(filtered);
// [ "Leopard", "Lion" ]

// ------------------------------------------

// Calculating Squares
// const results = document.querySelector('#results');

// function calculate() {
//   for (let i = 1; i < 10; i++) {
//     const newResult = `${i} x ${i} = ${i * i}`;
//     results.textContent += `${newResult}\n`;
//   }
//   results.textContent += '\nFinished!';
// }

// const calculateBtn = document.querySelector('#calculate');
// const clearBtn = document.querySelector('#clear');

// calculateBtn.addEventListener('click', calculate);
// clearBtn.addEventListener('click', () => results.textContent = '');

// ---------------------------------------------------------------------

// for.. of
// const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

// for (const cat of cats) {
//   console.log(cat);
// }

// const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

// for (let i = 0; i < cats.length; i++) {
//   console.log(cats[i]);
// }


// const cats = ['Pete', 'Biggles', 'Jasmine'];

// let myFavoriteCats = 'My cats are called ';

// for (const cat of cats) {
//   myFavoriteCats += `${cat}, `
// }

// console.log(myFavoriteCats); // "My cats are called Pete, Biggles, Jasmine, "


// const cats = ['Pete', 'Biggles', 'Jasmine'];

// let myFavoriteCats = 'My cats are called ';

// for (let i = 0; i < cats.length; i++) {
//   if (i === cats.length - 1) {   // We are at the end of the array
//     myFavoriteCats += `and ${cats[i]}.`
//   } else {
//     myFavoriteCats += `${cats[i]}, `
//   }
// }

// console.log(myFavoriteCats);     // "My cats are called Pete, Biggles, and Jasmine."


// ----------------------------------------------

// while and do...while

// const cats = ['Pete', 'Biggles', 'Jasmine'];

// let myFavoriteCats = 'My cats are called ';

// let i = 0;

// while (i < cats.length) {
//   if (i === cats.length - 1) {
//     myFavoriteCats += `and ${cats[i]}.`;
//   } else {
//     myFavoriteCats += `${cats[i]}, `;
//   }

//   i++;
// }

// console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."

// do.. while

// const cats = ['Pete', 'Biggles', 'Jasmine'];

// let myFavoriteCats = 'My cats are called ';

// let i = 0;

// do {
//   if (i === cats.length - 1) {
//     myFavoriteCats += `and ${cats[i]}.`;
//   } else {
//     myFavoriteCats += `${cats[i]}, `;
//   }

//   i++;
// } while (i < cats.length);

// console.log(myFavoriteCats);     // "My cats are called Pete, Biggles, and Jasmine."

