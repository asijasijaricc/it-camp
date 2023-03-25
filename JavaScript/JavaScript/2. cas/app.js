// Neku poruku u JavaScriptu mozemo prikazati na vise nacina:

// 1. innerHTML

naslov = document.getElementById("naslov");
naslov.innerHTML = "Prvi nacin ispisa";

// 2. document.write - obicno se koristi za testiranje koda.

// 3. alert() - Upozorenje korisniku:

// alert("Jos jedan nacin prikazivanja poruke.");

// 4. console.log() - Prikazvanje nekih informacija u konzoli. Njacesce koriscen metod.

console.log("Poruka u konzoli");

// JavaScript nazivi promeljivih //

// Ime promenljive u JavaScriptu mora poceti:

// 1. velikim ili malim slovima (A-Z ili a-z);
// 2. $(dollar sign);
// 3. _(donja crta).

// Broj moze biti sadrzan u nazivu promenljive, ali promenljiva ne sme poceti brojem.

// JavaScript je case sensitive (razlikuje velika i mala slova)!!!

// a = 10;
// console.log(A); error - A is not defined
// console.log(a); // 10

// Zapisivanje proemnljivih koje sadrze 2 ili vise reci:

// vecernji termin - nije ispravan nacin da pravim razmak

vecernji_termin = 19.3; // ispravan nacin zapisivanja promenljive - Underscore
VecernjiTermin = 19.3; // ispravan nacin zapisivanja promenljive - Upper Camel Case (Pascal Case)
vecernjiTermin = 19.3; // ispravan nacin zapisivanja promenljive. Najcesce koriscen nacin za zapisivanje promenljive u JavaScriptu. - Lower Camel case

// deklaracija   i    inicjalizacija
// Postoje 4 nacina za deklarisanje promenljive u JavaScriptu:

// 1. Koriscenjem var rezervisane reci (keyword). Vise je ranije bila koriscena (dok nismo dobili nove dve:)

var a; // deklarisanje promeljive (obezbedjivanje lokacije memorije za promenljive a)
a = 10; // inicijalizacija promenljive (dodeljivanje vrednosti vec deklarisanoj promenjivoj a)
// console.log(a);

// Kroz jednu linju koda mozemo takodje izvrsiti i deklaraciju i inicijalizaciju:
var a = 10;

// 2. Koriscenje let rezervisane reci (keyword). Promenljive koje su sklone menjenju vrednosti.

// let b; deklarisanje promenljive b
// b = 14; inicijalizacije promenljive b
// console.log(b);

// Kroz jednu linju koda mozemo takodje izvrsiti i deklaraciju i inicijalizaciju:
let b = 14;
console.log(b);

// 3. Koriscenjem const rezervisane reci (keyword). Na ovaj nacin deklarisemo promenljive cija se vrednost nece menjati.

// Nije moguca posebna deklaracija i inicijalizacija za promenljive definisane preko const keyword.
// const c;
// c = 20;

// Neophodno je odjednom izvrsiti deklaraciju i inicijalizaciju:
const c = 20;
console.log(c);

// 4. Koriscenje niceg.

d = 5;
console.log(d);

// Varijable (promenljive) u JavaScriptu predstavljaju kontejnere za skladistenje vrednosti.
