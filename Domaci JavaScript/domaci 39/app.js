// Napraviti funkciju koja sadrzi Promise koji proverava da li poslati argument funkcije ima vise od 10 samoglasnika.
// Ako argument ima vise od 10 samoglasnika neka se uspesno izvrsi obecanje sa porukom "String zadovoljava uslov";
// ako argument ima manje od 11 samoglasnika neka se reject_a obecanje uz poruku "String ne zadovoljava uslov";
// U svakom slucaju neka stoji poruka "Funkcija je izvrsena".

const samoglas = new Promise((resolve, reject) => {
  const str = "Neki string koji ima mnogo samoglasnika";
  let brojac = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      brojac++;
    }
  }
  if (brojac > 10) {
    resolve("String zadovoljava uslov");
  } else {
    reject("String ne zadovoljava uslov");
  }
});

samoglas
  .then((mess) => console.log(mess))
  .catch((messg) => console.log(messg))
  .finally(() => console.log("Funkcija je izvrsena"));
