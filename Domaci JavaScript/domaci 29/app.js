// 1. Napraviti novi niz koji filtrira postojeci i vraca novi sa onim elementima cija je duzina <= 6.

// 2. Napraviti novi niz koji filtrira postojeci i vraca novi
//  sa onim elementima ciji je tip "boolean".

// 3. Napraviti funkciju koja pravi niz koji ce iz postojeceg napraviti novi uz ispunjenje uslova:
//    value > 2 => value * 7
//    value >2 and value <8 => (value*4)/2
//    Ostale vrednosti da ne uzima u obzir
//    I na kraju treba novi niz vratiti sa godinama <10.

// 4. Write a function that converts an array of values from miles to kilometres using the map method.
// In the end, add the kilometres up in a new variable called "totalDistanceInKilometers" and
// return this variable.

// 5. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays. Go to the editor
// Sample array :
// array1 = [1, 0, 2, 3, 4];
// array2 = [3, 5, 6, 7, 8, 13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]

// 1.

const fruits = [
  "strawberry",
  "mango",
  "pineapple",
  "apple",
  "fig",
  "watermelon",
];

const fruits2 = fruits.filter((fruit) => fruit.length >= 6);

console.log(fruits2);

// 2.

const arr = ["string", 5, true, "string", false, 10];

const arr2 = arr.filter((el) => typeof el === "boolean");

console.log(arr2);

// 3.

const godine = [3, 10, 16, 5, 1, 6];

function vrednost(arr) {}
