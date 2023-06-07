// JavaScript Math Object //

// JavaScript Math objekat nam dozvoljava da izvrsavamo razlicite zadatke sa brojevima.

// Math Properties (Svojstva-Konstante)

// Bilo kojoj matematickoj konstanti mozemo pristupiti:
// Math.property_name

// JavaScript nam obezbedjuje 8 razlicitih matematickih konstanti, kojima jedino mozemo prisptupiti preko Math objekta:

Math.E;
Math.PI;
Math.SQRT2;
Math.SQRT1_2;
Math.LN2;
Math.LN10;
Math.LOG2E;
Math.LOG10E;

// Napraviti funkciju da pronadje od data tri broj najveci broj

function max(num1, num2, num3) {
  let maxNumber = num1;
  if (num2 >= num1 && num2 >= num3) {
    maxNumber = num2;
  } else if (num3 >= num1 && num3 >= num2) {
    maxNumber = num3;
  }
  return maxNumber;
}

console.log(max(2, 4, 6));
console.log(max(4, 8, 6));
console.log(max(10, 8, 6));
