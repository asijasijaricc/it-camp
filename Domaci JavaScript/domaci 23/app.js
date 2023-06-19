// Write a JavaScript program to calculate age.

// 1. nacin

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

// 2. nacin

function countMyAge(birthDateString) {
  const birthDate = new Date(birthDateString);
  const currentDate = new Date();

  const birthMilli = Date.parse(birthDate);
  const currentTimeMilli = Date.parse(currentDate);

  const sub = currentTimeMilli - birthMilli;
  const year = new Date(sub).getFullYear() - 1970;

  return year;
}

console.log(countMyAge("2003-12-27"));
