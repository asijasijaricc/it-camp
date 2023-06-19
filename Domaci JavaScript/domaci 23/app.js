// Write a JavaScript program to calculate age.

function godine(rodjendan) {
  let danas = new Date();
  let rodjendan2 = new Date(rodjendan);

  let godina = danas.getFullYear() - rodjendan2.getFullYear();

  if (
    danas.getMonth() < rodjendan2.getMonth() ||
    (danas.getMonth() === rodjendan2.getMonth() &&
      danas.getDate() < rodjendan2.getDate())
  ) {
    godina--;
  }

  return godina;
}

console.log(godine("2003-12-27"));
