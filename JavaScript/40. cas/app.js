// 1. U Fibonacijevom nizom cije vrednosti ne prelazi 4 miliona, pronaci sumu parnih elemenata.

const fibonacci = () => {
  const arr = [1, 1];
  let i = 2;
  while (arr[i - 2] + arr[i - 1] <= 4000000) {
    arr.push(arr[i - 2] + arr[i - 1]);
    i++;
  }
  return arr.filter((el) => el % 2 === 0).reduce((prev, curr) => prev + curr);
};

console.log(fibonacci());

// 2. Write a JavaScipt program to find the most frequent item of an array.
// Sample array:

const arr1 = [3, "a", "a", 2, 3, "a", "a", "a", 2, 2, 4, 6, 3];

function najcesciElement(arr) {
  let element;
  let brojac = 0;
  brojPojavljivanja = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        brojac++;
      }
      if (brojac > brojPojavljivanja) {
        brojPojavljivanja = brojac;
        element = arr[i];
      }
    }
    brojac = 0;
  }
  return element;
}

console.log(najcesciElement(arr1));

// every() Array iterator metoda nam sluzi za proveru da li je svaki element niza prosao test.
// Ova metoda vraca boolean.

const godine = [17, 22, 18, 22, 19];

const isEveryAdult = godine.every((student) => student > 17);

console.log(isEveryAdult); // false

// some() metoda proverava da li je bar jedan element niza prosao test.
// Ova metoda vraca boolean.

const isSomeAdult = godine.some((student) => student > 17);

console.log(isSomeAdult); // true
