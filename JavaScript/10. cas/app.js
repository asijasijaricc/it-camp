// 1. Fudbalski teren
// Fudbalski teren dimenzija dxs treba ograditi prevougaonom ogradom tako da je rastojanje stranica ograde
// Od linije terena r. napisi program koji odredjuje duzinu ograde.
// Ulaz: U tri reda standardnog ulaza nalaze se tri cela broja:
// d - duzina terena u metrima (90 < d < 120)
// s - sirina terena u metrima (45 < s < 90)
// r - raastojanje ograde od terena u metrima (2 < r < 10)

// const d = +prompt("Unesite duzinu terena");
// const s = +prompt("Unesite sirinu terena");
// const r = +prompt("Unesite rastojanje terena");

// const duzinaOgrade = 2 * d + 2 * s + 8 * r;
// console.log("Treba nam" + duzinaOgrade + "metara za ogradjivanja terena.");

// Osnove o stringovima:
const recenica = "Necemo matematicke zadatke!";
console.log(recenica);
// Pristupanje nekom karakteru ide preko indeksa!
// Indeksiranje ide od 0!
// Poslednji karakter u stringu ima index (cela duzina stringa -1)
console.log(recenica[0]);
console.log(recenica[7]);
// Za izracunavnje duzine nekog stringa koristi se length metoda:
const duzina = recenica.length;
console.log(duzina);
// Ispisivanje poslednjeg karaktera datog stringa:
console.log(recenica[duzina - 1]);

// Domaci

// 1. Zavrsiti zadatak za racunanje duzine ograde fudbalskog terena

// 2. Korisnik unosi broj iz intervala [12, 16)
// Na osnovu unetog broja, iteracija se vrsi od njega do 1(ukljucujuci)
// Ispisati svaki broj iz iteracije, njegov kvadrat i vrednost broja se umanjuju za 25.
