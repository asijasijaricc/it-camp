const isSunny = true;

if (isSunny) {
  console.log("Napolju je suncano.");
} else {
  console.log("Napolju nije suncano.");
}

// Postoji 8 FALSY vrednosti, to su:

// 1. false
// 2. ""
// 3. 0
// 4. -0
// 5. 0n
// 6. NaN
// 7. undefined
// 8. null

// 1. Napraviti funkciju gde se trazi unos od strane korisnika i vraca poruka da li je uneta vrednost TRUTHY ili FALSY vrednost.

function isTruthy() {
  const userInput = prompt("Unesite neku poruku: ");
  if (userInput) {
    return "Uneli ste truthy vrednost";
  } else {
    return "Uneli ste falsy vrednost";
  }
}

console.log(isTruthy());

// Ako korisnik unosi broj:

function isTruthyNumber() {
  const userInput = +prompt("Unesite nek broj: ");
  if (userInput) {
    return "Uneli ste truthy vrednost";
  } else {
    return "Uneli ste falsy vrednost";
  }
}

console.log(isTruthyNumber());

// Trazi se unos od strane korisnika sve dok ne unese bilo sta:
let recenica = "";
while (!recenica) {
  recenica = prompt("Unesite neku recenicu.");
}
