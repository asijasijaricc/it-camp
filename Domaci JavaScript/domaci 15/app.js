// 1.	Izdvojiti N znakova sa desne strane (poslednjih N znakova) unetog stringa.
// Npr. za string 'Pera ima devojku' i N=5, dobija se 'vojku'.

function Nznak(string, N) {
  if (N >= string.length) {
    return string;
  } else {
    return string.slice(-N);
  }
}
let string2 = "Pera ima devojku";
let N = 5;
let nekiZnak = Nznak(string2, N);
console.log(nekiZnak);
