// Domaci:
// Napraviti objekat student koji ce da ima vrednosti (po zelji), svojstava:
// ime, prezime, broj indeksa, ocene (niz svih ocena koje student ima u
// trenutnoj godini), prosekOcena (funckija koja na osnovu ocene vraca prosek
// datih ocena).

const student = {
  name: "Asija",
  surname: "Sijaric",
  index: "035017",
  grade: [6, 10, 7, 9, 8, 8, 6, 7],
  averr: function () {
    return this.grade.reduce((prev, curr) => prev + curr) / this.grade.length;
  },
};

console.log(student.averr());
