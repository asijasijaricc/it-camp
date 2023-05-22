// Search metode:

const recenica = "danas je lep dan.";

// indexOf() metoda nam vraca poziciju karaktera ili (niza karaktera) koje smo poslali kao argument.
// Ako se taj neki arguemnt nalazi vise puta unutar stringa dobijamo poziciju prvog pojavljivanja tog argumenta.
// Ako se argument ne nadje unutar stringa rezultat ce biti -1.

console.log(recenica.indexOf("d"));
console.log(recenica.indexOf("dan"));
console.log(recenica.indexOf("noc"));
console.log(recenica.indexOf("nas"));
console.log(recenica.indexOf("danas"));

// lastIndexOf() metoda nam vraca poziciju poslednjeg pojavljivanja karaktera (niza karaktera) koje smo poslali kao argument.
// Ako se argument ne nadje unutr stringa rezultat ce biti -1.

console.log(recenica.lastIndexOf("dan"));
console.log(recenica.lastIndexOf("lep"));

// Obe metode prihvataju drugi argument, koji oznacava poziciju od koje pocinje trazenje.
// Napomena: Brojac se ne resetuje, ako krenemo od drugog arguemnta da trazimo, i brojanje ide od drugog argumenta.

console.log(recenica.indexOf("dan", 6));
console.log(recenica.indexOf("danas", 6));

// Search() metoda takodje vraca poziciju trazenog stringa, s tim sto kod ove metode ne mozemo poslati drugi argument.
// Ako se arguemnt ne nadje unutar stringa rezultat ce biti -1.

console.log(recenica.search("dan"));
console.log(recenica.search("noc"));

// startsWith() metoda proverava da li neki string pocinje arguemntom koji joj saljemo. Vraca boolean (true ili false).
// Opciono mozemo poslati drugi argument koji ce da bude index od kojeg zelimo da trazimo poziciju nekog stringa.

console.log(recenica.startsWith("Danas")); // false
console.log(recenica.startsWith("je", 6)); // true, jer smo poceli od 6te pozicije

// endsWith() metoda proverava da li neki string zavrsava arguemntom koji joj saljemo. Vraca boolean (true ili false).
// Opciono mozemo poslati drugi arguemnt koji predstavlja ukupnu duzinu posmatranja tog stringa.

console.log(recenica.endsWith("dan")); // false
console.log(recenica.endsWith("dan.")); // true jer ima tacku

console.log(recenica.endsWith("dan.", 15)); // false
console.log(recenica.endsWith("dan", 16)); // true

// 1. Izdvajanje podstringova
// Napisi funkciju koja prima tri arguemnta: originalni string, pocetni indeks i krajnji indeks.
// Funkcija treba da izdvoji podstringove iz originalnog stringa koji se nalazi izmedju pocetnog i krajnjeg indeksa
// (ukljucujuci oba indeksa) i vrati taj podstring. Na primer, za ulazne vrednosti "Hello, World", 7 i 11, funkacija treba da vrati "World".

// const deoStringa(string, pocetkak, kraj) => {} arrow funkcija

// 1. nacin

function originalniIndex(string, index1, index2) {
  return string.slice(index1, index2 + 1);
}

console.log(originalniIndex("Hello, World", 7, 11));

// 2. nacin

function originalniIndex2(string, index1, index2) {
  return string.substr(index1, index2 + 1 - index1);
}

console.log(originalniIndex2("Hello, World", 7, 11));

// 3. nacin

function originalniIndex3(string, index1, index2) {
  let noviString = "";
  for (let i = index1; i <= index2; i++) {
    noviString += string[i];
  }
  return noviString;
}

console.log(originalniIndex3("Hello, World", 7, 11));

// domaci 1. split
// domaci 2. palindrom
// domaci 3. for
