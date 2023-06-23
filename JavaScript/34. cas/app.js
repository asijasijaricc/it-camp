// concat() metoda nam sluzi za spajanaje dva ili vise nizova.

const muskarci = ["Emir", "Selver"];
const devojke = ["Asija", "Dzana", "Ajsa", "Anastasija"];

// const celaGrupa = muskarci.concat(devojke);
// console.log(celaGrupa);

// Argument metode ne mora biti niz. Moze biti i element koji ce se dodati na prethodno spojene nizove.
const celaGrupa = muskarci.concat(devojke, "Nedim");
console.log(celaGrupa);

// slice() metoda vraca deo niza (onoliko elemenata koliko smo trazili slanjem arguemnta-indeksa).

console.log(celaGrupa.slice(0, 2));
console.log(celaGrupa.slice(-4, -1));
console.log(celaGrupa.slice(3));

// splice() metoda se moze korisiti za dodavanje novih elemenata u nizu, brisanje i sve mozemo vrsiti na zeljenim pozicijama unutar niza.

const novGrupa = celaGrupa.splice(2, 0);
