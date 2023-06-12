// Domaci zadaci:
// 1. Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

// 2. Write a JavaScript program to find the larger number from the two given positive integers,
// the two numbers are in the range 40..60 inclusive.

// 1.

function range(num1, num2) {
  if ((num1 >= 40 && num1 <= 60) || (num2 >= 40 && num2 <= 60)) {
    return `Number is in the range between 40 and 60`;
  } else if ((num1 >= 70 && num1 <= 100) || (num2 >= 70 && num2 <= 100)) {
    return `Number is in the range between 70 and 100`;
  } else {
    return "Numbers aren't in the ranges.";
  }
}
console.log(range(45, 70));

// 2.

function larger(num1, num2) {
  if (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) {
    if (num1 > num2) {
      return `${num1} is larger number then ${num2}`;
    } else {
      return `${num2} is larger number then ${num1}`;
    }
  } else {
    return "Number are not in the range";
  }
}
console.log(larger(47, 42));
