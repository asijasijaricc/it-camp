const person = {
  name: "Hana",
  lastName: "Plojovic",
  age: 12,
};

console.log(person);

// Svi objekti u JavaScriptu su povezani sa nekim prototype objektom, pa mozemo reci da svaki obejkat ima prototype.
// Prototype objekat sadrzi odredjena svojstva i metode.

// Construktor funkcija za pravljenje objekata:

function User(firstName, lastName, score) {
  this.firstName = firstName;
  this.lasttName = lastName;
  this.score = score;
}

User.prototype.incrementScore = function () {
  this.score++;
};

const ilhan = new User("Ilhan", "Buhic", 5);
const asija = new User("Asija", "Sijaric", 5);
const ajla = new User("Ajla", "Lomnicanin", 5);
const emir = new User("Emir", "Marukic", 5);
const merjem = new User("Merjem", "Sinanovic", 5);
const hana = new User("Hana", "Plojovic", 5);

console.log(ilhan);

ilhan.incrementScore();

console.log(ilhan);

setTimeout(() => {
  console.log("1");
}, 2000);

setTimeout(() => {
  console.log("2");
}, 1000);

setTimeout(() => {
  console.log("3");
}, 1000);

console.log("4");
console.log("5");
console.log("6");
console.log("7");
console.log("8");
console.log("9");
console.log("10");
console.log("11");
console.log("12");
console.log("13");
console.log("14");
console.log("15");
console.log("16");
console.log("17");
console.log("18");
console.log("19");
console.log("20");
console.log("21");
console.log("22");
console.log("23");
console.log("24");
console.log("25");

setTimeout(() => {
  console.log(26);
}, 950);
