// Domaci zadaci:
// 1. Zavrsiti zadatak za racunanje duzine ograde fudbalskog terena;

// 2.
// Korisnik unosi broj iz intervala [12,16).
// Na osnovu unetog broja, iteracija se vrsi od njega do 1(ukljucujuci).
// Ispisati svaki broj iz iteracije, njegov kvadrat i vrednost broja umanjenu za 25.

// 2.

// let broj1 = +prompt("Unesite broj od 12-16");

// if (broj1 >= 12 && broj1 <= 16) {
//   while (broj1 >= 1) {
//     console.log(broj1 ** 2 - 25);
//     broj1--;
//   }
// } else {
//   console.log("Uneli ste pogresnu vrednost");
// }

const broj = +prompt("Unesite neki broj");

if (isNaN(broj) || broj < 12 || broj >= 16) {
  console.log("Niste uneli korektan broj");
} else {
  for (let i = broj; i >= 1; i--) {
    //   console.log(i);
    //   console.log(i ** 2);
    //   console.log(i - 25);
    console.log(i, i ** 2, i - 25);
  }
}
