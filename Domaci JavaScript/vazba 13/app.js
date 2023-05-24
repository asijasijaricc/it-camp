// Domaci zadaci:
// 1. Napraviti funkciju koja ispituje argument.
// Ako se u recenici nadje rec "skola", neka se vrati pozicija prvog pojavljivanja date reci.
// Ako recenica pocinje sa recju "Automobil" neka se vrati boolean true;
// Ako je recenica parne duzine neka se vrati broj pojavljivanja reci "kuca".
// Inace vratiti duzinu datog stinga.

// 2. Prebrojati koliko ima malih slova u unetom stringu. Slova koja se koriste u stringu pripadaju isključivo engleskoj abecedi.

// 1.

function prvaFunc(recenica) {
  if (recenica.includes("skola")) {
    return `Pozicija prvog ponavljanja je: ${recenica.indexOf("skola")}`;
  } else if (recenica.startsWith("Autmobil")) {
    return true;
  } else if (recenica.length % 2 === 0) {
    return recenica.split("kuca").length - 1;
  } else {
    recenica.length;
  }
}

// console.log(prvaFunc("kuca kuca kuca"));

// 2.

function malaSlova(recenica1) {
  let brojac = 0;
  for (var i = 0; i < string.length; i++) {
    let slovo = recenica1[i];
    if (slovo >= "a" && slovo <= "z") {
      brojac++;
    }
  }
  return brojac;
}
