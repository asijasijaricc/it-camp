// 1. Svaki karakter neke recenice neka se ispise jedan ispod drugog

// const recenica =
//   "U ponedeljak je neradni dan, to znaci da je sledeci cas u sredu.";

// for (let i = 0; i < recenica.length; i++) {
//   console.log(recenica[i]);
// }

// 2. Na osnovu unete recenice od strane korisnika ispisati recenicu tako da svaki karakter ide jedan ispod drugog.
// Dok ako je neki karakter = "a", nek se ispise broj 5
// A u slucaju da je karakter s nek se ne ispise nista

// const recenica1 = prompt("Unesite neku recenicu");
// const duzina = recenica1.length;

// for (let i = 0; i < duzina; i++) {
//   if (recenica1[i] === "a") {
//     console.log(5);
//   } else if (recenica1[i] === "s") {
//     continue;
//   } else {
//     console.log(recenica1[i]);
//   }
// }

// Metoda toLowerCase() pretvara ce0 string u mala slova:

console.log("NEKI STRING ZA PRETVARANJE U MALA SLOVA".toLowerCase());

// Metoda toUpperCase() pretvara ceo string u velika slova:

console.log("neki string za pretvaranje u velika slova".toUpperCase());

const recenica0 =
  "Zelimo DATu reCENIcu prikAzaTI MALIM, isto taKo i VELIkim slovima";

console.log(recenica0.toLowerCase());
console.log(recenica0.toUpperCase());

// 3. Ispisati recenicu gde ce svaka rec pocinjati velikim slovom

const recenica3 =
  "treba nam nova recenica gde svaka rec pocinje velikim slovom";

let recenica4 = "";

for (let i = 0; i < recenica3.length; i++) {
  if (i === 0) {
    recenica4 += recenica3[i].toUpperCase();
  } else if (recenica3[i - 1] === " ") {
    recenica4 += recenica3[i].toUpperCase();
  } else {
    recenica4 += recenica3[i];
  }
}
console.log(recenica4);
