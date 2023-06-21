// JavaSciprt Array methods //

// toString() i join() metode konvertuju niz u string.

const arr = [1, 2, 3, 4, 5];

console.log(arr.toString());
// join prihvata argument koji predstvalja karakter ( niza karaktera) koji ce se naci izmedju elemenata (u novodobijenom stringu)
console.log(arr.join("*"));

// push() metod dodaje novi element (vise elemenata na kraju niza) na kraju niza.

const fruits = ["strawberry", "pineapple", "orange"];

fruits.push("pear");
console.log(fruits);

fruits.push("mango", "apple", "banana");
console.log(fruits);

// console.log(fruits.push("mango", "apple", "banana")); // push predstavlja duzinu niza sa novim elementima.

// pop() brise poslednji element niza.

fruits.pop();
console.log(fruits);
console.log(fruits.pop());

// shift() metoda brise prvi element niza, svi ostalinelementi se vracaju za jedno mesto.

fruits.shift();
console.log(fruits);
console.log(fruits.shift()); // vrednost izbrisanog elementa.

// unshift() metoda dodaje elemente (vise elemenata) na pocetku niza.

fruits.unshift("peach");
console.log(fruits);
console.log(fruits.unshift("peach"));

// delete metoda brise odredjeni element niza.
// Koriscenjem delete metode mozemo izbrisati zeljeni element, niza, ali nije preporuka koristiti tu metodu vec pop() ili shift().
// delete metoda ostavlja prazna (undefiened) polja. Ne brise se element u potpunosti.

delete fruits[fruits.length - 1];
console.log(fruits);
