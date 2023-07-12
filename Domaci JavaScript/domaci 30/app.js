// Domaci:
// 1. From the array of numbers, choose even double even numbers and compute the sum using Array's filter, map and reduce methods.

// 2. Write a JavaScript program which accept a string as input and swap the case of each character.
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

// 1.

// function even(arr) {
//   const arr1 = arr.filter((num) => {
//     num % 2 === 0;
//   });

//   const arr2 = arr1.reduce((prev, curr) => {
//     prev + curr;
//   });
//   return arr1;
//}

// console.log(even([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 2.

function upperCase(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i].lowerCase) {
      return string[i].toUpperCase();
    } else {
      return string[i].toLowerCase();
    }
  }
  // return string;
}

console.log(upperCase("The Quick Brown Fox"));
