// 1. Write a JavaScript function to get the greatest common divisor (NZD) of two integers.

const nzd = (br1, br2) => {
  const manji = br1 > br2 ? br2 : br1;
  let nzd = 1;
  for (let i = manji; i >= 1; i--) {
    if (br1 % i === 0 && br2 % i === 0) {
      nzd = i;
      break;
    }
  }
  return nzd;
};

console.log(nzd(6, 4));
console.log(nzd(3, 4));
console.log(nzd(8, 12));

// 2. Write a JavaScript function to get the least common divisor (NZS) of two integers.

const nzs = (br1, br2) => {
  const veci = br1 > br2 ? br1 : br2;
  let nzs = veci;
  let i = veci;

  while (true) {
    if (i % br1 === 0 && i % br2 === 0) {
      nzs = i;
      break;
    }
    i++;
  }
  return nzs;
};

console.log(nzs(3, 4));
console.log(nzs(6, 8));
