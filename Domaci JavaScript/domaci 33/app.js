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

// 1. nacin

person.removelanguage = function (lang) {
  const position = this.language.indexOf(lang);
  if (position !== -1) {
    this.language.splice(position, 1);
  }
};

// person.removelanguage("English");

// 2. nacin

person.removelanguage = function (lang) {
  const newArr = this.language.filter((language) => language !== lang);
  this.language = newArr;
};

person.removelanguage("English");

person.setNickname = function () {
  let prvi = this.firstName.slice(0, 2).toLowerCase();
  let drugi = this.lastName.slice(0, 2).toLowerCase();
  let nickname = prvi + drugi;
  return nickname[0].toUpperCase() + nickname.slice(1);
};

console.log(person.setNickname());

console.log(person);
