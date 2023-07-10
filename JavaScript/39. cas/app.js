// 1. Iz niza od 10 elemenata izracunati sumu parnih brojeva niza

// 1. nacin

const sum = (arr) => {
  const arr2 = arr.filter((num) => num % 2 === 0);

  const arr3 = arr2.reduce((prev, curr) => prev + curr);
  return arr3;
};

console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 2. nacin

const summ = (arr) => {
  const sum = arr.reduce((prev, curr) => {
    if (curr % 2 === 0) {
      return prev + curr;
    } else {
      return prev;
    }
    // return curr % 2 === 0 ? prev + curr : prev
  }, 0);
  return sum;
};

console.log(summ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 2. Write a JavaScipt program to find the most frequent item of an array.
// Sample array:

const arr1 = [3, "a", "a", 2, 3, "a", 3, "a", 2, 2, 4, 6, 3];

function mostFrequent() {
  let brojac = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i; j < arr1.length; i++) {}
  }
}

console.log(mostFrequent(arr1));
