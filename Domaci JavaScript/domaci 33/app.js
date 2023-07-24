// Domaci:
// Napraviti objekat sa sledecim svojstvima:
// 1. firstName,
// 2. lastName,
// 3. language,
// 4. addLanguage - metoda za setovanje jezika,
// 5. setNickName - metoda (svaka osoba ima nadimak sastavljen od prva dva slova
// imena i prva dva slova prezimena)

let person = {
  firstName: "Asija",
  lastName: "Sijaric",
  language: ["Serbian", "English"],
};

person.addlenguage = function (lang) {
  this.language.push(lang);
};

person.addlenguage("German");

person.setNickname = function () {
  let prvi = this.firstName.slice(0, 2).toLowerCase();
  let drugi = this.lastName.slice(0, 2).toLowerCase();
  let nickname = prvi + drugi;
  return nickname[0].toUpperCase() + nickname.slice(1);
};

console.log(person.setNickname());

console.log(person);
