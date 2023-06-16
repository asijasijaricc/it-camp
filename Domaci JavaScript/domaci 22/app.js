// Napraviti funkciju koja racuna razliku u danima izmedju sledeca dva datuma:
// "1999-05-24" i "2004-09-15"

function dani(datum1, datum2) {
  //   let datum1 = new Date(1999, 5, 24);
  //   let datum2 = new Date(2004, 9, 15);

  let brMs1 = Date.parse(datum1);
  let brMs2 = Date.parse(datum2);

  let razlika = datum2 - datum1;

  let dana = razlika / 1000 / 60 / 60 / 24;
  return dana;
}

console.log(dani(new Date(1999, 5, 24), new Date(2004, 9, 15)));
