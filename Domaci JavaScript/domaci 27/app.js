// Domaci:
// 1. Napraviti funkciju koja pravi novi niz, koji ce sadrzati samo elemente koji su se nalazili na parnim mestima unutar originalnog niza.
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// [2,4,6,8,10,12,14]
// 2. Iz nekog niza izdvojiti sve parne brojeve.(Napraviti novi niz)
// 3. Iz nekog niza izdvojiti sve neparne brojeve.(Napraviti novi niz)
// 4. Iz nekog niza izdvojiti sve pozitivne brojeve.(Napraviti novi niz)

// 5. Za dati niz izvrsiti:
// Sortiranje niza od najveceg ka najmanjem broju,
// Sortiranje niza od najmanjeg ka najvecem broju.

// 6. Write a simple JavaScript program to join all elements of the following array into a string where is * between elements

// 2.

function parni(niz) {
  let rezultat = [];

  for (let i = 0; i < niz.length; i++) {
    if (niz[i] % 2 === 0) {
      rezultat.push(niz[i]);
    }
  }
  return rezultat;
}

console.log(parni([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]));

// 3.

function neparni(niz) {
  let rezultat = [];

  for (let i = 0; i < niz.length; i++) {
    if (niz[i] % 2 !== 0) {
      rezultat.push(niz[i]);
    }
  }
  return rezultat;
}

console.log(neparni([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]));

// 4.

function pozitivni(niz) {
  let rezultat = [];

  for (let i = 0; i < niz.length; i++) {
    if (niz[i] > 0) {
      rezultat.push(niz[i]);
    }
  }
  return rezultat;
}

console.log(pozitivni([2, 3, -5, 4, -7, -5]));

// 5.

function sortiranje(niz) {
  return niz.sort(function (a, b) {
    return b - a;
  });
}

console.log(sortiranje([2, 5, 6, 9, 11]));

function sortiranjee(niz) {
  return niz.sort(function (a, b) {
    return a - b;
  });
}

console.log(sortiranjee([2, 5, 6, 9, 11]));

// 6.

function spoj(niz) {
  return niz.join("*");
}

console.log(spoj(["Audi", "Mercedes", "Porche"]));
