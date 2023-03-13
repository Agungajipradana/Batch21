/**
 * hitung orang yg memiliki berat badan paling tinggi
 */

function getHeavier(w1, wg2, wg3) {
  let maxWeight = w1;

  if (wg2 > maxWeight) {
    maxWeight = wg2;
  }

  if (wg3 > maxWeight) {
    maxWeight = wg3;
  }

  return maxWeight;
}

console.log(getHeavier(12, 45, 70)); //70
