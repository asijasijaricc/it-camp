// keys() metoda vraca Array Iterator Object kljuceva nekog niza.

const grupa = ["Emir", "Ajsa", "Selver", "Asija"];
//               0        1       2         3
const kljucevi = grupa.keys();

console.log(kljucevi);

for (let kljuc of kljucevi) {
  console.log(kljuc);
}

// enteries() metoda vraca Array Iterator Object key/value nekog niza.

const parovi = grupa.entries();

console.log(parovi);

for (let par of parovi) {
  console.log(par);
}

// callback funkcija predstavlja funkciju koju saljemo kao argument neke metode odnosno neke druge (funkcije).

function glavnaFunkcija(callback) {
  console.log("Pocetak posla glavne funkcije.");
  callback();
  console.log("Kraj posla glavne funkcije.");
}

function pomocna() {
  console.log("Ovo je radnja iz callback funkcije.");
}

glavnaFunkcija(pomocna);

// 1. Napraviti glavnu funkciju koja ima callback funkciju, i jos 2 argumenta (broja). Callback funkcija treba da ispise prvi broj
// stepenom drugim i da se to izvrsi unutar glavne funkcije.

// 1. prvi nacin

function glavna(callback, a, b) {
  callback(a, b);
}

function pomocnaf(a, b) {
  console.log(a ** b);
}

glavna(pomocnaf, 3, 2);

// 2. drugi nacin

const main = (callback, num1, num2) => {
  return callback(num1, num2);
};

console.log(main((a, b) => a ** b, 3, 2));
