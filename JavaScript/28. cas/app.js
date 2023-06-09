// Math methods //

// Sintaksa za bilo koju matematicku metodu je sledeca:
// Math.method(number)

// Number to Integer //

// Postoje 4 razlicite metode za dobijanje celog broja slanjem broja sa decimelanim zapisom:

// Math.round(x) - vraca blizi ceo broj broju x.

console.log(Math.round(3.14534234));

// Math.ceil(x) - vraca sledeci ceo broj broja x.

console.log(Math.ceil(3.14534234));
console.log(Math.ceil(-3.14534234));

// Math.floor(x) - vraca prethodni ceo broj broja x.

console.log(Math.floor(3.14534234));
console.log(Math.floor(-3.14534234));

// Math.trunc(x) - vraca ceo broj odstranjujuci decimalni ostatak.

console.log(Math.trunc(3.14534234));
console.log(Math.trunc(-3.14534234));

// Math.sign(x) - vraca :
// 1 - ako je x pozitivan broj
// 0 - ako je x nula
// -1 - ako je x negativan broj

console.log(Math.sign(34));
console.log(Math.sign(-34));
console.log(Math.sign(0));

// Math.pow(x,y) - vraca broj x stepenovan brojem y

console.log(Math.pow(2, 3)); // 2*2*2
console.log(Math.pow(6, 2)); // 6*6

// Math.sqrt(x) - vraca nam kvadratni koren broja x.

console.log(Math.sqrt(9)); // 3
console.log(Math.sqrt(25)); // 25

// Math.abs(x) - vraca apsolutnu vrednost broja x.

console.log(Math.abs(124));
console.log(Math.abs(-124));
console.log(Math.abs(-124.456));

// Math.sin() - vraca sinus (vrednost izmedju -1 i 1) nekog ugla x (datog u radijanima).

console.log(Math.sin(Math.PI / 2));

// Math.cos() - vraca kosinus (vredonst izmedju -1 i 1) nekog ugla x (datog u radijanima)

console.log(Math.cos(Math.PI));

// 1. Write a JS program to find a value which is nearest to 100 from two diffrent given integer values

function nearestTo100(num1, num2) {
  let broj1 = Math.abs(num1 - 100);
  let broj2 = Math.abs(num2 - 100);
  if (broj1 === broj2) {
    return "Brojevi su na istoj udaljenosti od broja 100";
  } else if (broj1 > broj2) {
    return ` ${num2} je blizi broju 100 od broja ${num1}`;
  } else {
    `${num1} je blizi broju 100 od broja ${num2} `;
  }
}

console.log(nearestTo100(95, 105));
console.log(nearestTo100(67, 75));
