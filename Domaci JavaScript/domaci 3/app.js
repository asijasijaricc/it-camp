// Domaci:
// 1.
// Ispisati neparne brojeve od 1 do 20 na dva nacina.
// 2.
// Ispisati sve brojeve od 50 do 100 koji su deljivi sa 5.
// 3.
// Suma neparnih prirodnih brojeva od 10 do 20.

//1.

for (let i = 1; i < 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//2.

for (let j = 50; j <= 100; j++) {
  if (j % 5 === 0) {
    console.log(j);
  }
}

//3.

for (let i = 10; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
