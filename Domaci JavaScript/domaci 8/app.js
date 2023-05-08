// Domaci zadaci:
// 1. Napraviti funkciju koja vraca zbir kvadrata dva broja. Ako se izostavi drugi argument, funkcija ga racuna kao 0.

// 2. Napraviti funkciju koja vraca aritmeticku sredinu 3 broja. Sa defaultnim vrednostima.

// 3. Napraviti funkciju povrsina koja uzima dve vrednosti.
// Ako su te dve vrednosti jednake da vraca povrsinu kvadrata uz odredjenu poruku,
// dok ako su razlicite vrednosti da vraca povrsinu pravougaonika uz odredjenu poruku

// 1.

function zbirKvadrata(dr1, dr2) {
  if (dr2 === undefined) {
    return dr2 === 0;
  } else {
    return dr1 * dr1 + dr2 * dr2;
  }
}

console.log(zbirKvadrata(2));

// 2.

function aritmetickaSredina(br1, br2, br3) {
  return (br1 + br2 + br3) / 3;
}

console.log(aritmetickaSredina(2, 3, 4));

// 3.

function povrsina(vr1, vr2) {
  if (vr1 === vr2) {
    return vr1 * 2;
  } else {
    return vr1 * vr2;
  }
}

console.log(povrsina(2, 2));
