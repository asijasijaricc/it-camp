// 1.

const radnik = {
  firstName: "Asija",
  lastName: "Sijaric",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  adresa: {
    ulica: "Avnoja",
    broj: "bb",
    grad: "Novi Pazar",
    getAdress: function () {
      return `${radnik.fullName()} zivi u ${this.ulica} u ${this.grad}`;
    },
  },
};

console.log(radnik.adresa.getAdress());

// 2. Napraviti novi niz (punoletni) koji ce sadrzati one elemente (objekte) cija je vrednost veca od 17.

const godine = [
  { starost: 17 },
  { starost: 17 },
  { starost: 22 },
  { starost: 27 },
  { starost: 22 },
  { starost: 19 },
];

const punoletni = godine.filter((coek) => coek.starost > 17);

console.log(punoletni);

const punoletni2 = punoletni.map((coek) => coek.starost);

console.log(punoletni2);

// ... (spread) operator
// Spread operator nam sluzi za kolniranje niza ili objekta.

const punoletni3 = [20, ...punoletni2, 30];

console.log(punoletni3);

const radnik2 = {
  ...radnik,
  firstName: "Asi",
  lastName: "Zuk",
};

console.log(radnik2);
