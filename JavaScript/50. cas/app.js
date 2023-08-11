// Promise (obecanje) je JavaSript obejekat koji predstavlja mesto za rezulatate asinhrone funkcije sve dok traje izvrsavanje asinhrone operacije.

const obecanje = new Promise((resolve, rejecet) => {
  const response = 200;
  if (response === 200) {
    resolve();
  } else {
    rejecet();
  }
});

// then metoda predstavlja mesto za izvrsenje funkcije u slucaju resolve()
// catch metoda predstavlja mesto za izvrsenje funkcije u slucaju reject()

obecanje
  .then(() => {
    console.log("Uspesno dobijeni podaci.");
  })
  .catch(() => {
    console.log("Nisu dobijeni podaci.");
  })
  .finally(() => {
    console.log("Izvrsava se u svakom slucaju.");
  });

// 1.

// Napraviti promise koji proverava da li je neki objekat ispunio uslov da je njegov propery godine veci od 17 ili nije.
// U slucaju da je osoba punoletna then() funkcija vraca poruku "Vi ste punoletni"
// U slucaju da osoba nije punoletna catch() vraca broj godina osobe.

const pinky = new Promise((resolve, rejecet) => {
  let person = {
    name: "Asija",
    lastName: "Sijaric",
    age: 19,
  };

  const res = person.age;

  if (res >= 18) {
    resolve();
  } else {
    rejecet(person.age);
  }
});

pinky
  .then(() => {
    console.log("Punoletni ste");
  })
  .catch((year) => {
    console.log(year);
  });

const chain = new Promise((resolve, rejecet) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, -2, -4, -6, -8];
  if (arr.every((num) => typeof num === "number")) {
    resolve(arr);
  } else {
    const error = "Dobijeni niz ima vrednosti koje nisu brojevi";
    rejecet(error);
  }
});

chain
  .then((finish) => {
    console.log(`Dobijeni niz je ${finish}`);
    return finish;
  })
  .then((arrg) => {
    const parni = arrg.filter((num) => num % 2 === 0);
    console.log(`Niz parnih brojeva je ${parni}`);
  })
  .catch((poruka) => {
    console.log(poruka);
  });
