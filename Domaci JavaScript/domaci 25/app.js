// Domaci:
// Iz datog niza ispitati koliko elemenata je tipa string,
// koliko tipa number,
// koliko tipa boolean,
// koliko elemenata je zapravo niz?
const nizz = [
  "jagoda",
  25,
  true,
  "mandarina",
  [1, 2, 3],
  "ananas",
  49,
  694,
  "tresnja",
];

function tip(niz) {
  let stringovi = 0;
  let brojevi = 0;
  let boolean = 0;
  let nizici = 0;
  let nizovi = 0;

  for (let i = 0; i < niz.length; i++) {
    if (typeof niz[i] === "string") {
      stringovi++;
    } else if (typeof niz[i] === "number") {
      brojevi++;
    } else if (typeof niz[i] === "boolean") {
      boolean++;
    } else if (Array.isArray(niz[i])) {
      nizici++;
    }
    if (Array.isArray(niz)) {
      nizovi++;
    }
  }
  return `Broj string elemenata je ${stringovi}.
  Broj number elemenata je ${brojevi}.
  Broj boolean elemenata je ${boolean}.
  Broj array elemenata je ${nizici}
  Broj elemenata unutar niza je ${nizovi}`;
}

console.log(
  tip([
    "jagoda",
    25,
    true,
    "mandarina",
    [1, 2, 3],
    "ananas",
    49,
    694,
    "tresnja",
  ])
);
