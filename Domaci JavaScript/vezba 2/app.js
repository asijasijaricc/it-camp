// 1. Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive).
// Return true if one or more of them are in the specified range.

// 1.

function range(num1, num2, num3) {
  if (
    num1 >= 50 &&
    num1 <= 99 &&
    num2 >= 50 &&
    num2 <= 99 &&
    num3 >= 50 &&
    num3 <= 99
  ) {
    return "Numbers are in the range";
  } else {
    return "Number are not in the range";
  }
}

console.log(range(56, 87, 63));

// 2. 4. Write a JavaScript program to check from three given integers whether a number is greater than or equal to 20.
// It is less than the others.

function greater(num1, num2, num3) {
  if (
    (num1 >= 20 && (num1 < num2 || num1 < num3)) ||
    (num2 >= 20 && (num2 < num1 || num2 < num3)) ||
    (num3 >= 20 && (num3 < num2 || num3 < num1))
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(greater(23, 45, 10));
console.log(greater(23, 23, 10));
