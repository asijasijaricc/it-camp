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
