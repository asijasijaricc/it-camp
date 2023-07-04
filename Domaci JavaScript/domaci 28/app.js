// Domaci:
// 1. Pomocu map() metode napraviti novi niz stringova ciji ce elementi da budu ispisani velikim slovima.

// 2. Napraviti novi niz koji sadrzi element na kubni stepen postojeceg niza:

// 3. Napraviti novi niz koji sadrzi kvadratne korene elemenata postojeceg niza.

// 4.
// const brojevi = [-5, 4, 3, 10, 14, -5];
// Napraviti novi niz koji ce sve negativne brojeve pomnoziti sa (-1), a pozitivne kvadrirati.

// 1.

const stringovi = ["apple", "strawberry", "pineapple", "mango"];

const stringovi2 = stringovi.map((string) => string.toUpperCase());

console.log(stringovi2);

// 2.

const arr = [1, 3, 4, 6, 7];

const arr2 = arr.map((num) => num ** 3);

console.log(arr2);

// 3.
