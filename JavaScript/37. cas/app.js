// map() metoda kreira novi niz, na nacin da se callback funkcija (argument map metode) izvrsava za svaki element.
// Duzina novog niza je jednaka duzini originalnog niza.
// map() metoda ne menja originalni niz, vec pravi novi.

const brojevi = [2, 4, 6, 8, 10, 12];

const brojevi2 = brojevi.map(function (broj) {
  return broj;
});

console.log(brojevi2);

// Napraviti brojevi3 koji ce sadrzati kvadrate elemenata niza brojevi.

const brojevi3 = brojevi.map((broj) => broj ** 2);

console.log(brojevi3);

const studenti = [
  "asija",
  "ajla",
  "selver",
  "nedim",
  "ajsa",
  "emir",
  "merjem",
  "anastasija",
];

// 1. Preko map() metode napraviti novi niz gde ce imati imena svih studenata pocinjati velikim slovom

const studenti2 = studenti.map(
  (student) => student[0].toUpperCase() + student.slice(1)
);

console.log(studenti2);

// 2. Napraviti novi niz koji ce zadrzati samo prva tri elementa postojeceg niza.

const studenti3 = studenti.map(function (student, pozicija) {
  if (pozicija < 3) {
    return student;
  } else {
    return;
  }
});

console.log(studenti3);

// Ako zelimo da iskljucimo neke elemente onda ce se na tim pozicijama dobiti undefined.

// 2. Napraviti novi niz mapirajuci niz brojeva, koji ce imati sve elemente ide, dok elementi na pozicijama 0,3,5 ce biti kvadrirani.

const brojevi4 = brojevi.map(function (broj, pozicija) {
  if (pozicija === 0 || pozicija === 3 || pozicija === 5) {
    return broj ** 2;
  } else {
    return broj;
  }
});

console.log(brojevi4);

// 3. Napraviti novi niz koji ce sadrzati kvadrate parnih elemenata postjeceg niza.
// Dok za neparne elemente treba vratiti aritmeticku vrednost prethodnog elementa, datog i narednog.

const numbers = [2, 7, 5, 7, 17, 28, 55, 34];

const numbers2 = numbers.map((num, index, arr) => {
  if (num % 2 === 0) {
    return num ** 2;
  } else {
    return +((arr[index - 1] + num + arr[index + 1]) / 3).toFixed(2);
  }
});

console.log(numbers2);
