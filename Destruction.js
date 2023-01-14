var a= 1;
var b = 2;
console.log(a)
console.log(b)

var temp;
temp = a;
a = b;
b = temp;
console.log(a)
console.log(b)

var a = 5;
var b = 2;
[a, b] = [b, a];
console.log(a);
console.log(b);

Ignoring Values
function noise() {
  return [13, 23, 33];
}

var[a, , b] = noise();
console.log(a);
console.log(b);

Indirect assignment of a function return
function x() {
  return [420, 69];
}
[a, b] = x();
console.log(a);
console.log(b);

Assignment to new variables
var obj = {e: 12, x: null};
var {e: t, x: u} = obj;
console.log(t);
console.log(u);

Nested object and array destructuring
let data = {
  location: [
    {
      latitude: '34.5',
      longitude: '90',
      city: 'Sonipat',
      country: 'India',
    }
  ]
};
let obj = {
  location: [
    {
      latitude: myLat,
      longitude: myLong,
      city: myCity,
    }
  ]
} = data;
console.log(myCity);
console.log(myLat);
console.log(myLong);

Destructuring with for-of loop
var people = [
  {
    name: 'Me',
    family : {
      mother : 'Mummy',
      father : 'Papa',
      sister : 'Sister',
    },
    age: 22
  },
  {
    name: "Ritesh Rohilla",
    family : {
      mother : 'Usha Rohilla',
      father : "Inder dev",
      brother : 'Kuku'
    },
    age: 24
}
];
for (var{name: n, famly: {mother: m}} of people) {
  console.log('name: ' + n+ ' , mother: ' + m);
}

const obj = {};
obj.fname = 'John';
obj.lname = 'Doe';

let f = obj.fname;
let l = obj.lname;

let obj = {fname: 'John', lname: 'Doe'};
console.log(obj)
