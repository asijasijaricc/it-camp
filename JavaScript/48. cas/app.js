const person = {
  firstName: "Nedim",
  lastName: "Huseinovic",
  age: 18,
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.fullName());

const person2 = {
  firstName: "Emir",
  lastName: "Marukic",
  age: 22,
};

// Postoje 3 metode koje mozemo korisiti za izvrsavnje neke funkcije (metode) za odredjeni obejkat.
// 1. call()
// 2. apply()
// 3. bind()

// Prvo dolazimo  do funkcije cije izvrsavanje zelimo, to moze biti funkcija koja predstavlja metodu nekog objekt,
// a moze biti i funkcija koja je definisana kao gobl scope.
// Nakon toga, na tu funkciju primenjujemo call metodu ciji je prvi arguemnt predstavlje objekat na kojem zelimo izvrsenje funkcije,
// a potencijlno su drugi, treci,... su argumenti glavne funkcije.

console.log(person.fullName.call(person2));

const restoran = {
  specijalitet: "Becka snicla",
  zadovoljstvoGostiju: "zadovoljni",
  lokacija: "Avnoja bb",
};

function poruka(mesto) {
  return `
  Nas vecerasnji specijalitet je bio ${this.specijalitet}. 
  Gosti su bili veoma ${this.zadovoljstvoGostiju}. 
  Nalazimo se na lokaciji ${this.lokacija} u ${mesto}.`;
}

console.log(poruka.call(restoran, "Novom Pazaru"));

const restoran2 = {
  specijalitet: "Lovacka snicla",
  zadovoljstvoGostiju: "nezadovoljni",
  lokacija: "Stevana Nemanje, 26",
};

console.log(poruka.call(restoran2, "Beogradu"));

// Prvo dolazimo  do funkcije cije izvrsavanje zelimo, to moze biti funkcija koja predstavlja metodu nekog objekt,
// a moze biti i funkcija koja je definisana kao gobl scope.
// Nakon toga, na tu funkciju primenjujemo apply metodu ciji je prvi arguemnt predstavlje objekat na kojem zelimo izvrsenje funkcije,
// a potencijalno drugi argument je niz elemenata (gde svaki element predstavlja argument glavne metode).

console.log(poruka.apply(restoran, ["Beogradu"]));

const bindFunction = poruka.bind(restoran2);

console.log(bindFunction("Sarajevu"));

// Destructuring //

// const firstName = person.firstName;
// console.log(firstName);

const { firstName } = person;

console.log(firstName);

const { lastName, age } = person;
const { age: agee } = person;

console.log(lastName, age);
