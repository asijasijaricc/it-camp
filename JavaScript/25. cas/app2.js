// number metode:

// toString() metoda vraca string (broj tipa string).
// Ova metoda se moze primeniti na bilo koji tip podataka.

let x = 144;
let y = x.toString();
console.log(y);
console.log(typeof y);

console.log(y + 5);

// toFixed() metoda vraca broj zaokruzen na onoliko decimala koliki je argument posalt metodi.
// Dobijena vredonst je tipa string.

z = 122.7344493237;
console.log(z);
let broj = z.toFixed(2);
console.log(broj);
console.log(typeof +broj);

// toPrecision() metoda vraca broj sa ukupnim brojem cifara koliki je argument poslat metodi.
// Dobijena vrednost je tipa string.

let broj2 = z.toPrecision(4);
console.log(broj2);
console.log(typeof broj2);

// Bolji u dve discipline:

// function bolji(mat1, pro1, mat2, pro2) {
//   if (mat1 > mat2 && pro1 > pro2) {
//     return "Pobednik je prvi takmicar";
//   } else if (mat2 > mat1 && pro2 > pro1) {
//     return "Pobednik je drugi takmicar";
//   } else if (mat1 === mat2 && pro1 > pro2) {
//     return "Pobednik je prvi takmicar";
//   } else if (mat1 === mat2 && pro1 < pro2) {
//     return "Pobednik je drugi takmicar";
//   }
// }

// console.log(bolji(16, 17, 16, 15));

function bolji(mat1, pro1, mat2, pro2) {
  let poeni1 = mat1 + pro1;
  let poeni2 = mat2 + pro2;
  if (poeni1 < poeni2) {
    return "Pobedio je drugi takmicar.";
  } else if (poeni1 === poeni2) {
    if (pro1 < pro2) {
      return "Pobedio je drugi takmicar";
    } else {
      return "Pobedio je prvi takmicar";
    }
  } else {
    return "Pobedio je prvi takmicar";
  }
}

console.log(bolji(34, 40, 45, 45));
console.log(bolji(50, 50, 45, 45));
console.log(bolji(50, 50, 50, 50));
console.log(bolji(23, 32, 32, 23));
