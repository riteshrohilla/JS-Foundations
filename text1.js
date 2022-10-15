***** Variable using 'let' keyword

let message = 'Hello';
// message = 'Hello';
alert(message);

let user = 'Ritesh';
let age = 23;
let message = 'Hello';
alert(user, age, message);

let message;
message = 'hello';
message = 'world';
alert(message);

let hello = 'hello world';
let message;
// copy 'hello world' from hello into message
message = hello;
alert(hello);
alert(message);

"use strict";  
num = 5;
alert(num);

***** Numbers
let x = 5;
x++;
let z = x;
console.log(z);

let x = (0.2 * 10 + 0.1 * 10) / 10;
console.log(x);

let x = 100;
let y = 10;
let z = x + y;
console.log(z);

***** NAN = not a number
let x = 100/'apple'
console.log(x)

***** basic math in js
const myInt = 5;
const myFloat = 6.67;
console.log(myInt);
console.log(myFloat);
console.log(typeof myInt);
console.log(typeof myFloat);

const lotsOfDecimal = 1.7565644464353;
console.log(lotsOfDecimal);
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log(twoDecimalPlaces);

let myNumber = "74";
myNumber = Number(myNumber) + 3;
console.log(myNumber);
console.log(typeof myNumber);

let name = 'Ritesh';
alert(`hello his name is ${name}`);


**************************************************************
Foundation 2

Strings

const string = "The revolution will not be televised";
console.log(string);

const badString = string;
console.log(badString);


const output = `i like the song,
i gave it 90%.`;
console.log(output);

******** Js string slice()


let str = 'Apple, Banana, Kiwi';
let part = str.slice(9, 13);
console.log(part);

let str = 'Apple, Banana, Kiwi';
let part = str.substring(7, 13);
console.log(part);

let str = 'Apple, Banana, Kiwi';
let part = str.substr(9, 13);
console.log(part);

let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

let text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/i, "W3Schools");
console.log(newText);

let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ",text2);
console.log(text3);

let text = "5";
let padded = text.padStart(4, "x");
console.log(padded);

const a = 69;
const b = 68;
if (a < b) {
  console.log(`${a} is less than ${b}`)
} else if (a > b) {
  console.log(`${a} is greater than ${b}`)
} else {
  console.log(`${a} and ${b} are equal`)
}


function areEqualCaseSensitive(str1, str2) {
  return str1.toUpperCase() == str2.toUpperCase();
}


const areEqualInUpperCase = (str1, str2) =>
  str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase = (str1, str2) =>
  str1.toLowerCase() === str2.toLowerCase();

areEqualInUpperCase("ß", "ss"); // true; should be false
areEqualInLowerCase("ı", "I"); // false; should be true
console.log(areEqualInUpperCase);
console.log(areEqualInLowerCase);

const areEqual = (str1, str2, locale = "en-US") =>
  str1.localeCompare(str2, locale, { sensitivity: "accent" }) === 0;

areEqual("ß", "ss", "de"); // false
areEqual("ı", "I", "tr"); // true
console.log(areEqual);

const strPrim = "foo";
const strPrim1 = String(1);
const strPrime2 = String(true);
const strObj = new String(strPrim);

console.log(typeof strPrim);
console.log(typeof strPrim2);
console.log(typeof strPrim2);
console.log(typeof strObj);


new String(thing)
String(thing)
console.log(String)

const a = new String("Hello World");
const b = new String("Hello World");

console.log(a instanceof String);
console.log(b instanceof String);

console.log(typeof a);
console.log(typeof b);

String() constructor

The String constructor is used to create a new String object. When called instead as a function, it performs type conversion to a primitive string, which is usually more useful. 


 The static String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units.   
console.log(String.fromCharCode(189, 43, 190, 61));
expected output: "½+¾="

The static String.fromCodePoint() method returns a string created by using the specified sequence of code points. 
console.log(String.fromCodePoint(9731, 9733, 9842, 0x2F804));
expected output: "☃★♲你"

String.raw() : Returns a string created from a raw template string. It is a is a tag function of template literals. 


Create a variable that uses a Windows
path without escaping the backslashes:
const filePath = String.raw`C:\Development\profile\aboutme.html`;

console.log(`The file was uploaded from: ${filePath}`);
expected output: "The file was uploaded from: C:\Development\profile\aboutme.html"



String.prototype.length : Reflects the length of the string. Read-only. , The length read-only property of a string contains the length of the string in UTF-16 code units.

const str = 'Life, the universe and everything. Answer:';

console.log(`${str} ${str.length}`);
// expected output: "Life, the universe and everything. Answer: 42"


String.prototype.at() : Returns the character (exactly one UTF-16 code unit) at the specified index. Accepts negative integers, which count back from the last string character.

const sentence = 'The quick brown fox jumps over the lazy dog.';

let index = 5;

console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);
// expected output: "Using an index of 5 the character returned is u"

index = -4;

console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);
// expected output: "Using an index of -4 the character returned is d"


String.prototype.charAt() = The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string. , Returns the character (exactly one UTF-16 code unit) at the specified index. 

const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
expected output: "The character at index 4 is q"


String.prototype.charCodeAt() = Returns a number that is the UTF-16 code unit value at the given index. ,  The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index. 

const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
// expected output: "The character code 113 is equal to q"

String.prototype.codePointAt() = Returns a nonnegative integer Number that is the code point value of the UTF-16 encoded code point starting at the specified pos. ,  The codePointAt() method returns a non-negative integer that is the Unicode code point value at the given position. Note that this function does not give the nth code point in a string, but the code point starting at the specified string index. 

const icons = '☃★♲';

console.log(icons.codePointAt(1));
// expected output: "9733"



String.prototype.concat()

    Combines the text of two (or more) strings and returns a new string.
The concat() method concatenates the string arguments to the calling string and returns a new string.

const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// expected output: "Hello World"

console.log(str2.concat(', ', str1));
// expected output: "World, Hello"

String.prototype.includes()

    Determines whether the calling string contains searchString.

The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.

const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
expected output: "The word "fox" is in the sentence"


String.prototype.endsWith()

    Determines whether a string ends with the characters of the string searchString.

The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.

const str1 = 'Cats are the best!';

console.log(str1.endsWith('best!'));
// expected output: true

console.log(str1.endsWith('best', 17));
// expected output: true

const str2 = 'Is this a question?';

console.log(str2.endsWith('question'));
// expected output: false


String.prototype.indexOf()

    Returns the index within the calling String object of the first occurrence of searchValue, or -1 if not found.

      The indexOf() method, given one argument: a substring to search for, searches the entire calling string, and returns the index of the first occurrence of the specified substring. Given a second argument: a number, the method returns the first occurrence of the specified substring at an index greater than or equal to the specified number.

const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
// expected output: "The index of the first "dog" from the beginning is 40"

console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
// expected output: "The index of the 2nd "dog" is 52"


String.prototype.lastIndexOf()

    Returns the index within the calling String object of the last occurrence of searchValue, or -1 if not found.

The lastIndexOf() method, given one argument: a substring to search for, searches the entire calling string, and returns the index of the last occurrence of the specified substring. Given a second argument: a number, the method returns the last occurrence of the specified substring at an index less than or equal to the specified number.

const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';

console.log(`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm)}`);
// expected output: "The index of the first "dog" from the end is 52"

  
