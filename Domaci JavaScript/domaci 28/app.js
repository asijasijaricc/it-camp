// Domaci:
// 1. Pomocu map() metode napraviti novi niz stringova ciji ce elementi da budu ispisani velikim slovima.

// 2. Napraviti novi niz koji sadrzi element na kubni stepen postojeceg niza:

// 3. Napraviti novi niz koji sadrzi kvadratne korene elemenata postojeceg niza.

// 4.
// const brojevi = [-5, 4, 3, 10, 14, -5];
// Napraviti novi niz koji ce sve negativne brojeve pomnoziti sa (-1), a pozitivne kvadrirati.

// 1.

const stringovi = ["apple", "strawberry", "pineapple", "mango"];

const stringovi2 = stringovi.map((string) => string.toUpperCase());

console.log(stringovi2);

// 2.

const arr = [1, 3, 4, 6, 7];

const arr2 = arr.map((num) => num ** 3);

console.log(arr2);

// 3.

const arr3 = arr.map((num) => +Math.sqrt(num).toFixed(2));

console.log(arr3);

// 4.

const brojevi = [-5, 4, 3, 10, 14, -5];

const brojevi2 = brojevi.map((num) => {
  if (num > 0) {
    return num ** 2;
  } else {
    return num * -1;
  }
});

console.log(brojevi2);

// Kreirati funkciju koja radi sledece:
// Koristeci prompt uneti 5 imena radnika, potom od njih napraviti niz i izvrsiti sledece:
// Najpre od postojecih imena kreirati email adrese, tako sto cete na ime dodati "@gmail.com", i
// te nove adrese smestiti u novi niz, a potom napraviti da se na svaki klik na dugme "Prikazi"
// prikazuje alert-a u kome je ispisana neka od adresa u nizu. Bitno: na svaki klik treba da izlazi
// drugacija adresa, to uraditi koristeci random generisanje.
// Funkcija se poziva odmah pri pokretanju programa.
