// Domaci:
// 1. Write a JavaScript function to check whether an `input` is an array or not.
// 2. Write a JavaScript function to clone an array.
// 3. Write a JavaScript function to get the first element of an array.
// Passing the parameter 'n' will return the first 'n' elements of the array.

// 1.

function jelNiz(niz) {
  if (Array.isArray(niz)) {
    return true;
  } else {
    return false;
  }
}

console.log(jelNiz([1, 2, 3]));
console.log(jelNiz("string"));

// 2.

function klon(niz) {
  let kloniran = [];
  for (var i = 0; i < niz.length; i++) {
    kloniran.push(niz[i]);
  }
  return kloniran;
}

console.log(klon([1, 2, 3, 4]));

// 3.

function prvo(niz) {
  return niz[0];
}

console.log(prvo([1, 2, 3, 4]));
console.log(prvo(["Audi", "Mercedes", "Volvo"]));
