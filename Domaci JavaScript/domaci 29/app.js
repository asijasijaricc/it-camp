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

function vrednost() {
  const godine2 = godine.map((godina) => {
    if (godina > 2 && godine < 8) {
      return (godina * 4) / 2;
    } else if (godina > 2) {
      return godina * 7;
    } else {
      return godina;
    }
  });
  const godine3 = godine2.filter((godina) => godina < 10);
  return godine3;
}

const godine = [1, 2, 3, 5, 7, 9, 11];
const kraj = vrednost(godine);

console.log(vrednost(kraj));

// 4.

function mtokm(metri) {
  const kilometri = metri.map((metar) => metar / 1000);
  const totalDistanceInKilometers = kilometri.reduce(
    (prev, curr) => prev + curr
  );
  return totalDistanceInKilometers;
}

console.log(mtokm([5000, 6600, 10, 3, 300]));

// 5.

array1 = [1, 0, 2, 3, 4];
array2 = [3, 5, 6, 7, 8, 13];

const rezultat = [];

const duzina = Math.max(array1.length && array2.length);

for (let i = 0; i < duzina; i++) {
  const suma = array1[i] || 0 + array2[i] || 0;
  rezultat.push(suma);
}

console.log(rezultat);
