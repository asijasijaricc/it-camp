// Domaci:
// Napraviti objekat sa sledecim svojstvima:
// 1. firstName,
// 2. lastName,
// 3. language,
// 4. setLanguage - metoda za setovanje jezika,
// 5. setNickName - metoda (svaka osoba ima nadimak sastavljen od prva dva slova
// imena i prva dva slova prezimena)

let person = {
  firstName: "Asija",
  lastName: "Sijaric",
  lenguage: ["Serbian", "English"],
};

// person.setlenguage = function (lenguage) {
//   this.language.push(language);
// };

// console.log(person.setlenguage("German"));

person.setNickname = function () {
  let prvi = this.firstName.slice(0, 2);
  let drugi = this.lastName.slice(0, 2);
  let nickname = prvi + drugi;
  return nickname;
};

console.log(person.nickname);
