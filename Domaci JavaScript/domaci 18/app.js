// Domaci:
// 1.
// a) pretvara m u km
// b) pretvara inch u cm

// 2. Napraviti funkciju koja prima jedan argument (broj) i vraca poruku da li je
// dati argument palindrom.

// 3. Napraviti funkciju koja ocekuje trocifren broj, a vraca dvocifren (iskljuci cifru desetice).

// 1. a)

function mtokm(m) {
  return m / 1000;
}

// console.log(mtokm(2500));

// b)

function inci(inch) {
  return inch * 2.54;
}

// console.log(inci(10));

// 2.

// function palindrom(broj) {
//   let palibroj = " ";

//   for (let i = broj.length - 1; i >= 0; i--) {
//     palibroj += broj[i];
//   }
//   if (broj == palibroj) {
//     return "Broj je palindrom";
//   } else {
//     return "Broj nije palindrom";
//   }
// }

// console.log(palindrom(10201));

// console.log(palindrom(4234));

// 3. moj nacin /

// function trocifreni(broj) {
//   if (broj > 100 && broj < 999) {
//     return broj / 10;
//   } else {
//     return "Unesite trocifren broj";
//   }
// }

// console.log(trocifreni(123));

// 2. nacin

function vratiBroj(broj) {
  if (!isNaN(broj) && broj >= 100 && broj <= 999) {
    const stotina = Math.floor(broj / 100);
    const jedinica = broj % 10;
    const noviBroj = Number(`${stotina}${jedinica}`);
    return noviBroj;
  } else {
    return "Argument nije trazeni broj iz opsega";
  }
}

console.log(vratiBroj(123));
console.log(vratiBroj(976));
