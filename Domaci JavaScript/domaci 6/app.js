// Domaci zadatak.
// 1. Ispisati novu recenicu gde ce svaka rec zavrsavati velikim slovom.

// 2.	Prebrojati koliko se puta u unetom stringu pojavljuje slovo "M" (i veliko i malo).
// Npr. za string 'Mama ima momu', dobija se rezultat 5

// 1.

const recenica = "treba nova recenica gde se svaka rec zavrsava malim slovom";
let recenica2 = "";

for (let i = 0; i < recenica.length; i++) {
  if (i === recenica.length - 1) {
    recenica2 += recenica[i].toUpperCase();
  } else if (recenica[i + 1] === " ") {
    recenica2 += recenica[i].toUpperCase();
  } else {
    recenica2 += recenica[i];
  }
}

console.log(recenica2);

// 2.

const recenica1 = "Mama ima momu";
let slovoM = 0;

for (let i = 0; i < recenica1.length; i++) {
  if (recenica1[i] === "M" || recenica1[i] === "m") {
    slovoM++;
  }
}

console.log(slovoM);
