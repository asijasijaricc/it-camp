// Domaci zadaci:
// 1.
// a=int(input('Unesite prvu potencijalnu stranicu pravougaonika: '))
// b=int(input('Unesite drugu potencijalnu stranicu pravougaonika: '))
// c=int(input('Unesite trecu potencijalnu stranicu pravougaonika: '))
// d=int(input('Unesite cetvrtu potencijalnu stranicu pravougaonika: '))

// 2. Unesite broj sekundi koji zelite pretvoriti u sate, minute i sekunde:

// 1 sat ima 60 minuta
// 1 sat ima 60*60 = 3600 sekundi
// 1 minut ima 60 sekundi

// 123

// 1. prvi nacin

function pravougaonik() {
  let a = +prompt("Unesite duzinu stranice a:");
  let b = +prompt("Unesite duzinu stranice b:");
  let c = +prompt("Unesite duzinu stranice c:");
  let d = +prompt("Unesite duzinu stranice d:");

  if (a === b && c === d) {
    return "Unete su validne duzine stranica za pravougaonik.";
  } else {
    return "Nisu unete velidne duzine stranica za pravougaonik";
  }
}

// console.log(pravougaonik());

// 1. drugi nacin

const first = () => {
  const a = +prompt("Unesite prvu potencijalnu stranicu pravougaonika: ");
  const b = +prompt("Unesite drugu potencijalnu stranicu pravougaonika: ");
  const c = +prompt("Unesite trecu potencijalnu stranicu pravougaonika: ");
  const d = +prompt("Unesite cetvrtu potencijalnu stranicu pravougaonika: ");

  if (
    ((a === b) === c) === d ||
    (a === b && c === d) ||
    (a === c && b === d) ||
    (a === d && b === c)
  ) {
    return "Moguce je formirati pravougaonik";
  } else {
    return "Nije moguce formirati pravougaonik";
  }
};

// console.log(first());

// 2.

const second = () => {
  const brojSekundi = +prompt("Unesite broj sekundi:");
  const sati = Math.floor(brojSekundi / 3600);
  const minuti = Math.floor((brojSekundi % 3600) / 60);
  const sekundi = brojSekundi % 60;
  return `${sati} h ${minuti} m ${sekundi} s`;
};

console.log(second());
