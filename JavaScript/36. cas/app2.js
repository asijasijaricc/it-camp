// JavaScript Array Iteration metode //

// Array Iterator metode prolaze kroz svaki element niza.

// foEach() metoda poziva callback funkciju (koja predstavlja argument forEach() metode jednom za svaki element niza).

const brojevi = [2, 4, 6, 8, 10, 12];

brojevi.forEach((element, index, array) => {
  //   console.log(index, element, array); - prima 3 argumenta
  console.log(element);
});

// callback funkacija moze imati 3 arguemnta:
// 1. vrednost elementa
// 2. index(pozicija) elementa
// 3. ceo niz na koji se primenjuje metoda

// 2. Napraviti novi niz koji ce imati sve elemente originalnog niza.

const brrojevi3 = [];
brojevi.forEach((element) => {
  brrojevi3.push(element);
});

console.log(brrojevi3);
