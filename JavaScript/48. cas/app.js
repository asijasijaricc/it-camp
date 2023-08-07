const person = {
  firstName: "Nedim",
  lastName: "Huseinovic",
  age: 18,
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.fullName());
