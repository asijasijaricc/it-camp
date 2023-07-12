// Domaci:
// 1. From the array of numbers, choose even double even numbers and compute the sum using Array's filter, map and reduce methods.

// 2. Write a JavaScript program which accept a string as input and swap the case of each character.
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

// 1.

const numbers = [1, 2, 3, 4];

const sumEvenNumbers = (arr) => {
  return arr
    .filter((num) => num % 2 === 0)
    .map((num) => num * 2)
    .reduce((prev, curr) => prev + curr);
  return arr;
};

console.log(sumEvenNumbers(numbers));
