// Domaci:
// 1. Spajanje stringova
// Napiši funkciju koja prima dva stringa kao argumenta i vraća njihovu konkatenaciju.
// Na primer, za ulazne vrednosti "Hello" i "World!", funkcija treba da vrati "HelloWorld!".

// 2. Palindrom
// Napiši funkciju koja prima jedan string kao argument i proverava da li je taj string palindrom,
// tj. da li se čita isto i s leva na desno i s desna na levo.
// Funkcija treba da vrati true ako je string palindrom, inače false.
// Na primer, za ulazni string "radar" funkcija treba da vrati true, dok za ulazni string "hello" funkcija treba da vrati false.

// 1.

function spajanjeStringa(string1, string2) {
  return (string1 += string2);
}

const rezultat = spajanjeStringa("Hello", "World");
console.log(rezultat);

// 2.

function isPalindrom(string) {
  let obrnutiString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    obrnutiString += string[i];
  }
  if (string === obrnutiString) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrom("radar"));
console.log(isPalindrom("hello"));
