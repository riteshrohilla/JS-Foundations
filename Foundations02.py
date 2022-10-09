// let name = "John";

// alert(`hello, ${name}!`);

// alert(`the result is ${1+2}`);


// let nameFieldChecked = true;
// let ageFieldChecked = false;

// let isGreater = 4>1;
// alert(isGreater );


// Typeof operator
// typeof undefined // "undefined"

// typeof 0 // "number"

// typeof 10n // "bigint"

// typeof true // "boolean"

// typeof "foo" // "string"

// typeof Symbol("id") // "symbol"

// typeof Math // "object"  (1)

// typeof null // "object"  (2)

// typeof alert // "function"  (3)


// Strings: The basics.

// const string = "The revolution will not be televised";
// console.log(string);
// string = 'hello'
// const badString = string;
// console.log(badString);

// const dblsgl = "I'm not okay!";
// const sgldbl = 'I head you are not"okay" wish you all the luck';
// console.log(sgldbl);
// console.log(dblsgl);

// const bigmouth = 'I\'ve  got no right to take my place';
// console.log(bigmouth);

// Concatenating string
// this method is called template literal

// const greeting = `hello`;
// console.log(`ritesh is saying ${greeting}`);


// const name = "Ritesh";
// const greeting = `Hello, ${name}`;
// console.log(greeting);

// // same technique to join together two variables.
// const one = "Hello, ";
// const two = " how are you?";
// const joined = `${one}${two}`;
// console.log(joined);

// concatenation in context
// <button>Press me</button>
// const button = document.querySelector("button");

// function greet() {
//   const name = prompt("What is your name?");
//   alert(`Hello ${name}, nice to see you!`);
// }

// button.addEventListener("click", greet);

// concatenation using "+"
// const greeting = "Hello, ";
// const name = "Ritesh Rohilla";
// console.log(greeting + name);

// const greeting = "hello";
// const name = "Ritesh";
// console.log(`${greeting}, ${name}`);

// Numbers vs Strings
// const name = "Front";
// const number = 242;
// console.log(`${name}${number}`);

// const myString = "123";
// const myNum = Number(myString);
// console.log(typeof myNum);


// including expressions in strings
// const song = "Fight the youth";
// const score = 9;
// const highScore = 10;
// const output = `I like the song ${song}. I gave it a score of ${(score/highScore) * 100}`
// console.log(output);

// Multiline strings
// const output = `I like the song. 
// I gave it a score of 90%.`;
// console.log(output);

// const output = "I like the song. \n I gave it a score of 90%";
// console.log(output);


// JS String length

// let text = "abcdefghijklmnopqrstuvwxyz";
// let length = text.length;
// console.log(length);


// Extracting string parts
// methods
// slice(start, end)
// substring(start, end)
// substr(start, length)
// let str = "Apple, Banana, Kiwi";
// let part = str.substring(7, 13);
// console.log(part);


// let str = "Apple, Banana, Kiwi";
// let part = str.substr(-18);
// console.log(part);


// Replacing String Content

// let text = "Please visit Microsoft";
// let newText = text.replace("Microsoft", "Google");
// console.log(newText);


// let text1 = "Hello World!";
// let text2 = text1.toUpperCase();
// console.log(text2);

// let text3 = "Hi, Ritesh Rohilla";
// let text4 = text3.toLowerCase();
// console.log(text4);

// JavaScript String concat()
// concat() joins two or more strings:
// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2);
// console.log(text3);
// The concat() method can be used instead of the plus operator. These two lines do the same:

// JavaScript String trim()
// the trim() method removes whitespaces from both sides of a string. 
// let text1 = "              Hello World!         ";
// let text2 = text1.trim();


// js string padStart()
// let text = "5";
// let padded = text.padStart(5, "a");
// console.log(padded);


// let numb = 5;
// let text = numb.toString();
// let padded = text.padStart(4, "0");
// console.log(padded);


// Extracting String Characters
// There are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]
// let text = "HELLO WORLD";
// let char = text.charAt(0); // it returns specific characer from a string
// console.log(char);

// let text = "HELLO WORLD";
// let char = text.charCodeAt(0);
// console.log(char);


// let text = "Hello world";
// let char = text[9];
// console.log(char);


// js string split()
// text.split(",")
// text.split(" ")
// text.split("|")
// If the separator is omitted, the returned array will contain the whole string in index [0].

// If the separator is "", the returned array will be an array of single characters:

// let carName1 = "Volvo XC60";
// let carName2 = 'Volvo XC60';
// console.log(carName1);
// console.log(carName2);

// let name = "cat";
// name2 = 'cat'.charAt(2);
// console.log(name2)

// const a = 'a';
// const b = 'b';
// if (a < b) {
//   console.log(`${a} is a less than ${b}`)
// }
// else if ( a > b ); {
//   console.log(`${b} is a less than ${a}`)
// }
// else{ 
//   console.log(`${a} and ${b} are equal`)
// }


// STRINGS

// const string1 = "A string primitive";
// const string2 = 'Also a string primitive';
// const string3 = `Yet another string primitive`;


// const string4 = new String("A String object");


// Character access
// 'cat'.charAt(1) // gives value "a"
// 'cat'[1] // gives value "a"


// Comparing strings
// const a = 'a';
// const b = 'b';
// if (a < b) { // true
//   console.log(`${a} is less than ${b}`)
// } else if (a > b) {
//   console.log(`${a} is greater than ${b}`)
// } else {
//   console.log(`${a} and ${b} are equal.`)
// }

// // === and ==, 
// function areEqualCaseInsensitive(str1, str2) {
//   return str1.toUpperCase() === str2.toUpperCase();
// }



// const areEqualInUpperCase = (str1, str2) =>
//   str1.toUpperCase() === str2.toUpperCase();
// const areEqualInLowerCase = (str1, str2) =>
//   str1.toLowerCase() === str2.toLowerCase();

// areEqualInUpperCase("ß", "ss"); // true; should be false
// areEqualInLowerCase("ı", "I"); // false; should be true



// const areEqual = (str1, str2, locale = "en-US") =>
//   str1.localeCompare(str2, locale, { sensitivity: "accent" }) === 0;

// areEqual("ß", "ss", "de"); // false
// areEqual("ı", "I", "tr"); // true



// String primitives and String objects

const s1 = '2+2';
console.log(s1);
const s2 = new String('2+2');
console.log(s2);
console.log(eval(s1));
console.log(eval(s2));
console.log(eval(s2.valueOf()));
