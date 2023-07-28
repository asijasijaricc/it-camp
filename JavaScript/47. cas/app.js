// Object built in methodos

const osoba = {
  ime: "Asija",
  prezime: "Sijaric",
  starost: 19,
};

osoba.bojaOciju = "plava";

console.log(osoba);

delete osoba.bojaOciju;

console.log(osoba);

// Object.freeze(osoba) cini objakat nepromenljivim (immutabilnim).
// Ne moze dodavati, menjati ili brisati neki property

// Object.freeze(osoba);

// osoba.bojaOciju = "plava";
// osoba.ime = "Ajla";

// console.log(osoba);

// Object.seal(osoba) cini objekat proemnljivim ali nije dozvoljeno dodati ili brisati elemente

Object.seal(osoba);

osoba.bojaOciju = "plava";
delete osoba.starost;
osoba.ime = "Ajla";

console.log(osoba);

// object.keys(osoba) vraca niz kljuceva datog objekta

const keys = Object.keys(osoba);

console.log(keys);

// object.values(osoba) vraca niz kljuceva datog objekta

const values = Object.values(osoba);

console.log(values);

// object.entries(osoba) nam vraca niz nizova, gde je svaki podniz par [key, value]

const enteries = Object.entries(osoba);

console.log(enteries);

// 1.

const enteries2 = enteries.flat();

console.log(enteries2);

// niz stringova

const strings = enteries2.filter((el) => typeof el === "string");

console.log(strings);

// niz brojeva

const numbers = enteries2.filter((el) => typeof el === "number");

console.log(numbers);

// niz booleana

const booleans = enteries2.filter((el) => typeof el === "boolean");

console.log(booleans);

// object.is(obj1, obj2) metoda proverava indeticku jednakost (vraca boolean)

const osoba2 = { ime: "Ajla", prezime: "Sijaric", starost: 19 };

const osoba3 = osoba;

console.log(Object.is(osoba, osoba2)); // vraca false
console.log(Object.is(osoba, osoba3)); // vraca true
