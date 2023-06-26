// 1. Napraviti funkciju koja vraca najveci element nekog niza.
// 2. Napraviti funkciju koja vraca najmanji element nekog niza.
// 3. Iz naseg niza grupa napraviti dva niza muskarci i devojke, s tim sto se Dzevdet, Marija, Melida i Tarik ne smeju naci.
// 4. Napraviti funkciju koja pravi novi niz, koji ce sadrzati samo elemente koji su se nalazili na neparnim mestima unutar originalnog niza.
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// [1,3,5,7,9,11,13]

// 1.

function najvBroj(niz) {
  let najveci = niz[0];

  for (let i = 0; i < niz.length; i++) {
    if (niz[i] > najveci) {
      najveci = niz[i];
    }
  }
  return najveci;
}

console.log(najvBroj([7, 4, 5, 6, 3]));
console.log(najvBroj([3, 4, 5, 6, 7]));

// 2.

function najmBroj(niz) {
  let najmanji = niz[0];

  for (let i = 0; i < niz.length; i++) {
    if (niz[i] < najmanji) {
      najmanji = niz[i];
    }
  }
  return najmanji;
}

console.log(najmBroj([3, 4, 5, 6, 7]));
console.log(najmBroj([7, 4, 5, 6, 3]));

// 3. prvi nacin

let celaGrupa = [
  "Tarik",
  "Selver",
  "Emir",
  "Nedim",
  "Merjem",
  "Melida",
  "Marija",
  "Dzevdet",
  "Dzana",
  "Asija",
  "Anastasija",
  "Ajsa",
];

celaGrupa.splice(5, 3);

// console.log(celaGrupa);

celaGrupa.splice(0, 1);

console.log(celaGrupa);

let devojke = celaGrupa.splice(3, 5);

let muskarci = celaGrupa.splice(0, 3);

console.log(devojke);
console.log(muskarci);

// 3. drugi nacin

let grupa = [
  "Tarik",
  "Selver",
  "Emir",
  "Nedim",
  "Merjem",
  "Melida",
  "Marija",
  "Dzevdet",
  "Dzana",
  "Asija",
  "Anastasija",
  "Ajsa",
];

const novaGrupa = [];

for (let person of grupa) {
  if (
    person === "Tarik" ||
    person === "Melida" ||
    person === "Marija" ||
    person === "Dzevdet"
  ) {
    continue;
  } else {
    novaGrupa.push(person);
  }
}

console.log(novaGrupa);

const muskarcii = [];
const devojkee = [];

for (let person of novaGrupa) {
  if (person[person.length - 1] === "a" || person === "Merjem") {
    devojkee.push(person);
  } else {
    muskarcii.push(person);
  }
}

console.log(muskarcii);
console.log(devojkee);

// 4.

function neparni(niz) {
  let rezultat = [];

  for (let i = 0; i < niz.length; i++) {
    if (niz[i] % 2 !== 0) {
      rezultat.push(niz[i]);
    }
  }
  return rezultat;
}

console.log(neparni([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]));
