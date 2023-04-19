#!/usr/bin/nodejs

const cars = ['BMW', 'Volvo', 'Mini'];

const numbers = [23, 25, 21, 26, 25, 3, 6];

// The spread (...) Operator
const q1 = ['Jan', 'Feb', 'Mar'];
const q2 = ['Apr', 'May', 'Jun'];
const q3 = ['July', 'Aug', 'Sep'];
const q4 = ['Oct', 'Nov', 'Dec'];

const year = [...q1, ...q2, ...q3, ...q4];

console.log(year);

// Javascript let and const
const maxValue = Math.max(...numbers);
const minValue = Math.min(...numbers);

console.log(minValue);
console.log(maxValue);

// Arrow functions
// ES5
const x = function (x, y) {
  return x * y;
};
// ES6
{
  // yet to hoist
  const x = (x, y) => x * y;
}

// The For/Of Loop
// looping over array cars

let text = '';

for (const x of cars) {
  console.log(text += `${x} `);
}

// looping over a string
{
  const language = 'Javascript';
  let text = '';

  for (const x of language) {
    console.log(text += `${x} `);
  }
}
// JavaScript Maps

const fruits = new Map([
  ['apples', 500],
  ['bananas', 300],
  ['oranges', 200],
]);

console.log(fruits);
// Javascript Classes
// Syntax
//	class ClassName {
//		constructor() { ... }
//	}

// Example

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

// the example above creates a class named "car"
// the class has two initial properties: 'name', 'year'
// Javascript class is not an object
// It is a template for javascript objects

// Using a class
const myCar1 = new Car('Ford', 2014);
const myCar2 = new Car('Audi', 2019);
console.log(myCar1);
console.log(myCar2);

// Javascript sets
// create a set
const letters = new Set();
// add some values to the set
letters.add('a');
letters.add('b');
letters.add('c');
console.log(letters);
// javascript Promises
// producing code --->>> consuming code
// syntax
// const myPromise = new Promise(function(myResolve, myReject) {
// "producing code" (may take some time)
//	myResolve(); // when successful
//	myReject(); // when error
// });

// "consuming code" (must wait for a fullfilled promise).
// myPromise.then(
//	function(value) { /* code if successful */ },
//	function(error) { /* code if some error */ }
// );

const myPromise = new Promise(((myResolve, myReject) => {
  setTimeout(() => { myResolve('I love You !!'); }, 3000);
}));

myPromise.then((value) => {
  document.getElementById('demo').innerHTML = value;
});
