// JSON JavaScript Object Nation //

// JSON je format za skladistenje i prenos podataka. Najcesce se koristi kada se podaci salju sa backenda ka WEB stranici.
// Sintaksa je vrlo slicna JavaScript objektima:

// const person = {
//     "firstName": "Asija",
//     "lastName": "Sijaric",
//     "age": 19
// }

const person = {
  firstName: "Asija",
  lastName: "Sijaric",
  age: 19,
};

// JSON.stringify() metoda koja neki JSON format pretavra u string.

const strJSON = JSON.stringify(person);
console.log(strJSON);
console.log(typeof strJSON);

// JSON.parse() metoda koja od nekog stringa pokusava dobiti objekat.

const obj = JSON.parse(strJSON);
console.log(obj);
console.log(typeof obj);

// Unutar postojeceg objekta dodati nova svojstva:
// 1. trenutnaBrzina: 0,
// 2. maksimalnaBrzina: 260,
// 3. povecanjeBrzine: (metoda koja uzima jedan argument),
// 4. smanjenjeBrzine: (metoda koja uzima jedan argument),
// 5. koci: (metoda koja dodeljuje 0 za vrednost trenutne brzine).

const myCar = {
  id: 1,
  marka: "Audi",
  model: "a4",
  boja: "Crvena",
  pogon: "prednji",
  menjac: "automatski",
  kontakt: ["0622222", "02033322"],
  servis: {
    datum: "04,maj",
    km: 23000,
    serviser: "Pasovic",
  },
  udaran: true,
};

myCar.trenutnabrzina = 0;
myCar.maksimalnabrzina = 260;

myCar.povecanjebrzine = function (vrednost) {
  if (this.trenutnabrzina + vrednost < this.maksimalnabrzina) {
    this.trenutnabrzina += vrednost;
    return "Ubrzanje je povecano";
  } else {
    return "Ne brze od zivota";
  }
};

myCar.smanjenjebrzine = function (vrednost) {
  if (this.trenutnabrzina - vrednost >= 0) {
    this.trenutnabrzina -= vrednost;
    return "Brzina je smanjena";
  } else {
    return "Nije moguce smanjiti brzinu";
  }
};

console.log(myCar.trenutnabrzina);
myCar.povecanjebrzine(80);
console.log(myCar.trenutnabrzina);
myCar.povecanjebrzine(100);
console.log(myCar.trenutnabrzina);
console.log(myCar.povecanjebrzine(100));
console.log(myCar.trenutnabrzina);

myCar.smanjenjebrzine(90);
console.log(myCar.trenutnabrzina);
console.log(myCar.smanjenjebrzine(100));
console.log(myCar.trenutnabrzina);
