// Domaci zadaci:
// 1. Prebrojavanje reči
// Napiši funkciju koja prima jedan string kao argument i vraća broj reči u tom stringu.
// Pretpostavi da su reči odvojene samo jednim razmakom. Na primer, za ulazni string "Ovo je primer." funkcija treba da vrati broj 3.

// 2. Obrtanje stringa
// Napiši funkciju koja prima jedan string kao argument i vraća taj string u obrnutom redosledu.
// Na primer, za ulazni string "hello" funkcija treba da vrati "olleh".

// 3. Prebrojati koliko ima znakova koji su cifre u unetom stringu.

// 1.

function prebrojavanjeReci(string) {
  string = string.trim();
  if (string === "") {
    return 0;
  }
  var reci = string.split(" ");
  return reci.length;
}

var string = "Ovo je primer.";
var brojReci = prebrojavanjeReci(string);
console.log(brojReci);

// 2.

function obrnutiRedosled(string) {
  var obrnutiString = "";

  for (var i = string.length - 1; i >= 0; i--) {
    obrnutiString += string[i];
  }
  return obrnutiString;
}

var string = "hello";
var obrnutiString = obrnutiRedosled(string);
console.log(obrnutiString);
