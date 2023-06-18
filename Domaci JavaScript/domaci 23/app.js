// Write a JavaScript program to calculate age.

function godine(rodjendan) {
  let datum = new Date();
  let rodjendan2 = new Date(rodjendan);

  let godina = datum.getFullYear() - rodjendan2.getFullYear();

  if (
    datum.getMonth() < rodjendan2.getMonth() ||
    (datum.getMonth() === rodjendan2.getMonth() &&
      datum.getDate() < rodjendan2.getDate())
  ) {
    godina--;
  }

  return godina;
}

console.log(godine("2003-12-27"));
