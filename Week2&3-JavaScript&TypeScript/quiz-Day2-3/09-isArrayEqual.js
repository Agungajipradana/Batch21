function isArraysEqual(arrayA, arrayB) {
  // Periksa apakah kedua array memiliki panjang yang sama
  if (arrayA.length !== arrayB.length) {
    return false;
  }

  //  Periksa apakah semua elemen dalam arrayA ada di arrayB
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  //   Jika semua kondisi terpenuhi, arraynya sama
  return true;
}

const fruitNamesA = ["rambutan", "durian", "jeruk", "nangka"];
const fruitNamesB = ["rambutan", "durian", "jeruk", "nangka"];
const fruitNamesC = ["anggur", "apel", "mangga", "alpukat"];
console.log(isArraysEqual(fruitNamesA, fruitNamesB)); // true
console.log(isArraysEqual(fruitNamesA, fruitNamesC)); // false
