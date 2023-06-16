// JavaScript GET metode za datume:

// Sledece metode mozemo iskoristiti za dobijanje odredjenih informacija vezano za neke datume:

const date = new Date();

// 1. getFullYear

console.log(date.getFullYear());

// 2. getMonth

console.log(date.getMonth());

// 3. getDate()

console.log(date.getDate());

// 4. getHours()

console.log(date.getHours());

// 5. getMinutes()

console.log(date.getMinutes());

// 6. getSeconds()

console.log(date.getSeconds());

// 7. getMiliseconds()

console.log(date.getMilliseconds());

// 8. getTime()

console.log(date.getTime());
// console.log(Date.parse(date)); alternativa

// 9. getDay()

console.log(date.getDay()); // vraca vrednost 0-6 (dani u nedelji)
// 0 - nedelja
// 6 - subota

// Date.now()

console.log(Date.now()); // broj milisekundi od 1.1.1970 od trenutnog vremena

// JavaScript SET metode za datume:

// Sledece metode mozemo iskoristiti za setovanje odredjenih informacija vezano za neki datum:

// 1. setFullYear()

const updatedDate = date.setFullYear(1999);
console.log(new Date(updatedDate));

// 2. setMonth()

const updatedDate2 = date.setMonth(9);
console.log(new Date(updatedDate2));

// 3. setDate()

// 4. setHours()

// 5. setMinutes()

// 6. setSeconds()

// 7. setMilliseconds()

// boolean

console.log(7 === 77);
console.log(typeof (7 === 77));

console.log(Boolean(7 === 77));
console.log(typeof Boolean(7 === 77));

console.log(5);
console.log(Boolean(5));

// VREDNOSNI I REFERENTNI TIPOVI PODATAKA
// (OSNOVNI I SLOZENI)
// (PRIMITIVNI I NEPRIMITIVNI)

// Primer vrednosnog tipa podatka

let rec = "danas";
let drugaRec = rec;

console.log(rec);
console.log(drugaRec);

drugaRec += " je bilo lepo vreme.";

console.log(drugaRec);
console.log(rec);
