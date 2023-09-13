// primitives
// complex types
// operators
// logical operators
// conditionals
// loops
// objects
// arrays
// array methods
// callbacks
// promises
// async await
// closure
// hosting
// classes
// DOM
// DOM manipulation
// events
// es6 js

var a = "";
console.log(typeof a);

function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2));
console.log(sum({}, []));

// ako se na objektu nalazi property vratite vrednost ako se ne nalazi vratite -1

const obj = { size: "12", width: "22" };

function getProperty(objekat, prop) {
  return objekat[prop] ? objekat[prop] : -1;
}

console.log(getProperty(obj, "size"));

const n = [];
