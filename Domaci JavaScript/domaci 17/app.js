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

// 1.

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

console.log(pravougaonik());
