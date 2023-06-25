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

console.log(najmBroj([7, 4, 5, 6, 3]));

// 3.

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
