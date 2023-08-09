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
