const zbirKvadrata = function (a, b) {
  if (a === b) {
    return "Povrsina kvadrata iznosi " + a * b;
  } else {
    return "Povrsina pravougaonika iznosi " + a * b;
  }
};

console.log(zbirKvadrata(2, 2)); // 2, 2 su argumenti
console.log(zbirKvadrata(2, 3));

// Arrow function:

const kvadratBroja = (a) => {
  return a ** 2;
};

console.log(kvadratBroja(4));

// Ako arrow function ima samo jedan parametar, nije neophodno stavljati ga u zagradama.
// Ako funkcija vraca neki jednostavan izraz (prethodno nije bilo dodatnog koda) mozemo izostaviti viticaste zagrade i return keyword.

const kvadratBroja2 = (a) => a ** 2;

// 1.

// let broj = +prompt("Unesite neki broj");

// const nekiBroj = (broj) => {
//   if (broj > 0) {
//     return "Uneli ste pozitivan broj";
//   } else if (broj < 0) {
//     return "Uneli ste negativan broj";
//   } else if (broj === 0) {
//     return "Uneli ste nulu.";
//   } else {
//     return "Uneta vrednost nije broj ";
//   }
// };

// console.log(nekiBroj(broj));

function newFunc() {
  const broj = +prompt("Unesite neki broj");
  if (isNaN(broj)) {
    return "Niste uneli korektan broj";
  } else if (broj > 0) {
    return "Uneli ste pozitivan broj";
  } else if (broj < 0) {
    return "Uneli ste negativan broj";
  } else {
    return "Uneli ste nulu";
  }
}

newFunc(); // takodje se izvrsava
console.log(newFunc()); // ispisujemo u konzoli radi provere

// 2.

const radnoVreme = function (sat, minut) {
  if (sat >= 9 && sat < 17 && minut >= 0 && minut < 60) {
    return "Mejl je stigao na vreme";
  } else {
    return "Mejl nije stigao na vreme";
  }
};

console.log(radnoVreme(17, 0));
