// let i = 0;
// while (i <100) { // shows 0, then 1, then 2
//   alert( i );
//     i = i+2;
// }

// let i = 3;
// while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
//   alert( i );
//   i--;
// }

// let i = 0; // we have i already declared and assigned

// for (; i < 3; i++) { // no need for "begin"
//   alert( i ); // 0, 1, 2
// }

// for (;;) {
//   // repeats without limits
// }

// let sum = 0;

// while (true) {

//   let value = +prompt("Enter a number", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Sum: ' + sum );


// for (let i = 0; i < 3; i++) {

//   for (let j = 0; j < 3; j++) {

//     let input = prompt(`Value at coords (${i},${j})`, '');

//     // what if we want to exit from here to Done (below)?
//   }
// }

// alert('Done!');

// outer: for (let i = 0; i < 3; i++) {

//   for (let j = 0; j < 3; j++) {

//     let input = prompt(`Value at coords (${i},${j})`, '');

//     // if an empty string or canceled, then break out of both loops
//     if (!input) break outer; // (*)

//     // do something with the value...
//   }
// }

// alert('Done!');

// for(let i = 2; i<=10; i++) {
//   if(i%2==0) {
//     alert(i)
//   }
// }

// for(let i=0; i<3; i++) {
//   alert(`number ${i}`);
// }

// let i=0;
// while (i<3) {
//   alert(`number is ${i}`);
//   i++;
// }


// let num;

// do {
//   num = prompt("Enter a number greater than 100?", 0);
// } while(num <= 100 && num);


// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // for each i...

//   for (let j = 2; j < i; j++) { // look for a divisor..
//     if (i % j == 0) continue nextPrime; // not a prime, go next i
//   }

//   alert( i ); // a prime
// }``
