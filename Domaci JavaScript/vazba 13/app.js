// Domaci zadaci:
// 1. Napraviti funkciju koja ispituje argument.
// Ako se u recenici nadje rec "skola", neka se vrati pozicija prvog pojavljivanja date reci.
// Ako recenica pocinje sa recju "Automobil" neka se vrati boolean true;
// Ako je recenica parne duzine neka se vrati broj pojavljivanja reci "kuca".
// Inace vratiti duzinu datog stinga.

// 2. Prebrojati koliko ima malih slova u unetom stringu. Slova koja se koriste u stringu pripadaju isključivo engleskoj abecedi.

// 1. prvi nacin

function prvaFunc(recenica) {
  if (recenica.includes("skola")) {
    return `Pozicija prvog ponavljanja je: ${recenica.indexOf("skola")}`;
  } else if (recenica.startsWith("Automobil")) {
    return true;
  } else if (recenica.length % 2 === 0) {
    return recenica.split("kuca").length - 1;
  } else {
    return recenica.length;
  }
}

console.log(prvaFunc("Automobil je crven"));

// 1. drugi nacin

const first = (recenica) => {
  if (recenica.includes("skola")) {
    return recenica.indexOf("skola");
  } else if (recenica.startsWith("Automobil")) {
    return true;
  } else if (recenica.length % 2 === 0) {
    if (recenica.match(/kuca/g) === null) {
      return 0;
    } else {
      return recenica.match(/kuca/g).length;
    }
  } else {
    return recenica.length;
  }
};

console.log(first("Koja se skola podrazumeva ?"));
console.log(first("Automobil na prodaju"));
console.log("Parna recenica kuca ");
console.log("parna recenica kuca");

// 2. prvi nacin

function malaSlova(recenica1) {
  let brojac = 0;
  for (let i = 0; i < recenica1.length; i++) {
    let slovo = recenica1[i];
    if (slovo >= "a" && slovo <= "z") {
      brojac++;
    }
  }
  return brojac;
}

console.log(malaSlova("Neki string recenica"));

// 2. drugi nacin

const second = (recenica) => {
  let brojac = 0;
  for (let i = 0; i < recenica.length; i++) {
    if (recenica[i] >= "a" && recenica[i] <= "z") {
      brojac++;
    }
  }
  return brojac;
};

console.log(second("Koliko ima MALIH SLOVA?"));

console.log("a");
console.log("b");

console.log("a" > "b");
console.log("a" < "b");

console.log("a" > "A");

// Prvo idu velika slova, pa onda mala.
console.log("a".charCodeAt(0));
console.log("Z".charCodeAt(0));
console.log("A".charCodeAt(0));
console.log("z".charCodeAt(0));
