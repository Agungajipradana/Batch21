/** berapa banyak tahun kabisat antara tahun1 ke tahun2 */

function howManyKabisat(year1, year2) {
  let kabisatCount = 0;

  // jika year1 lebih besar dari year2, tukar nilai year1 dan year2
  if (year1 > year2) {
    [year1, year2] = [year2, year1];
  }

  // memeriksa setiap tahun dari year1 ke year2
  for (let year = year1; year <= year2; year++) {
    if (isKabisat(year)) {
      kabisatCount++;
    }
  }

  return kabisatCount;
}

function isKabisat(year) {
  if (year % 4 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  if (year % 400 === 0) {
    return true;
  }

  return false;
}

console.log(howManyKabisat(1997, 2021));
