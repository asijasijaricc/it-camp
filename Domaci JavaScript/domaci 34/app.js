// Domaci:
const automobil = {
  marka: "Audi",
  model: "Q7",
  boja: "Bela",
  pogon: "quattro",
  menjac: "Automatik",
  km: 240000,
  vlasnik: ["062321552", "063930630"],
  garaza: {
    parking: "JKP Servis",
    vikend: "od 17h free",
    satnaKarta: "50",
    dnevnaKarta: "200",
    mesecnaKarta: "2000",
    platiZa: function (datum1, datum2) {
      const dan = 24 * 60 * 6 * 1000;
      const od = new Date(datum1);
      const doo = new Date(datum2);
      const dani = Math.round((doo - od) / dan);
      const ukupno = this.garaza.dnevnaKarta * dani;
      return ukupno;
    },
  },
};

const od = "2023-12-20";
const doo = "2023-12-27";
const iznos = automobil.garaza.platiZa(od, doo);
console.log("Ukupan iznos za parking:", iznos);

//  2. Write a JavaScript program to sort an array of JavaScript objects:

const library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

function covert(a, b) {}
