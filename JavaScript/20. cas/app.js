// includes() metoda vraca boolean(true ili false) u zavisnosti od toga da li se argument
// nalazi u stringu na kojem se primenjuju metoda ili ne
// Opciono, drugi argument predstavlja poziciju od koje cemo traziti dati argument u stringu.

const recenica = "Dobar dan!";
console.log(recenica.includes("vece")); // false
console.log(recenica.includes("dan")); // true

// match() metoda vraca niz. U zavisnosti od toga u kom obliku smo poslali argument, dobijamo razlicite nizove.

const recenica2 = "Na koliko ste casova bili danas u skoli";

console.log(recenica2.match("a")); // niz sa informacijama vezano za argument i string na koji smo primenili metodu
console.log(recenica2.match(/a/g)); // niz sa elementima iste vrednosti (ima ih onoliko koliko se arguemnt pojavljuje u stringu)
console.log(recenica2.match(/adfv/g)); // Ako posaljemo argument koji se ne nalazi u stringu dobijamo null.

// Napraviti funkciju koja na osnovu parametra ispituje pojavljivanje reci "ko osvaja"
// Ako se pojavljuje vise puta dati string, vratiti poziciju prvog i poslednjeg pojavljivanja, ako se pojavljuje jednom,
// vratiti poziciju pojavljivanja, dok ako se ne pojavljuje dati string vratiti poruku:
// "Nismo pronasli string"

// function funkc(string) {
//   var string = "ko osvaja";
// }

// Ponasanje match metode:
// console.log("ko osvaja je rec koju trazimo.".match(/ko osvaja/g));
// console.log(
//   "ko osvaja je rec koju trazimo. Dakle, ko osvaja".match(/ko osvaja/g)
// );
// console.log("Dobro vece".match(/ko osvaja/g));

const zadatak = (recenica) => {
  if (!recenica.match(/ko osvaja/g)) {
    return "Nismo pronasli dati string";
  } else if (!recenica.match(/ko osvaja/g) === 1) {
    return recenica.indexOf("ko osvaja");
  } else {
    return `Pozicija prvog pojavljivanja: ${recenica.indexOf(
      "ko osvaja"
    )}; \n Pozicija poslednjeg pojavljivanja: ${recenica.lastIndexOf(
      "ko osvaja"
    )}.`;
  }
};

console.log(zadatak("ko osvaja ligu sampiona?"));
console.log(zadatak("Ko osvaja ligu sampiona?"));
console.log(zadatak("ko osvaja ligu sampiona? ko osvaja? ko osvaja?"));
