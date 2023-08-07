// Domaci:
// 1.  Iz 2 poslata niza vratiti 3. niz koji ce sadrzati one elemente iz oba niza koji nisu sadrzani u onom drugom nizu.
const niz1 = [1, 3, 4, 5, 6, 7, 9];
const niz2 = [2, 4, 5, 6, 8, 10];

function nizovi(niz1, niz2) {
  const newArr = [];

  for (const el of niz1) {
    if (!niz2.includes(el)) {
      newArr.push(el);
    }
  }

  for (const el of niz2) {
    if (!niz1.includes(el)) {
      newArr.push(el);
    }
  }

  return newArr;
}

console.log(nizovi(niz1, niz2));
