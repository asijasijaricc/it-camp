// Domaci:
// 1.
// Napraviti funkciju koja izracunava povrsinu kruga, gde
//  precnik predstavlja argument funkcije.

// 2.
// Napraviti funkciju za pretvaranje radijana u stepene.

// 1.

function povrsina(r) {
  return Math.PI * r ** 2;
}

console.log(povrsina(3));

// 2.

function stepen(radijan) {
  return (radijan * 180) / 2;
}

let radijan = Math.PI / 2;

console.log(stepen(3));
