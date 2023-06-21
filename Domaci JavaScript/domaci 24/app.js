// Domaci:
// 1. Write a JavaScript function to check whether an `input` is an array or not.
// 2. Write a JavaScript function to clone an array.
// 3. Write a JavaScript function to get the first element of an array.
// Passing the parameter 'n' will return the first 'n' elements of the array.

// 1. prvi nacin

function jelNiz(niz) {
  if (Array.isArray(niz)) {
    return true;
  } else {
    return false;
  }
}

console.log(jelNiz([1, 2, 3]));
console.log(jelNiz("string"));

// 1. drugi nacin

function isArray(arr) {
  return Array.isArray(arr);
}

console.log(isArray([1, 2, 3, 4]));
console.log(isArray(1234));

// 2. prvi nacin

function klon(niz) {
  return niz.slice(0);
}

console.log(klon([1, 2, 3, 4]));
console.log(klon(["Audi", "Mercedes", "Porsche"]));

// 2. drugi nacin

const cloneArr = (arr) => {
  const arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
};

console.log(cloneArr([1, 2, 3, 4, 5, 6, 7, 8]));

// for petlja koja se koristi kod iterirajucih objekata (2. verzija)
//   for (let element of arr) {
//     arr2[i] = element; DIREKTNO IMAMO ELEMENT (NIJE NEOPHODNO PRISTUPITI PREKO INDEKSA)
//   }

// 3. prvi nacin

function prvo(niz) {
  return niz[0];
}

console.log(prvo([1, 2, 3, 4]));
console.log(prvo(["Audi", "Mercedes", "Porsche"]));

// 3. drugi nacin

const firstN = (arr, n = 1) => {
  // if (n === undefined) {
  //   return arr[0];
  // } else {
  //   return
  // }
};
