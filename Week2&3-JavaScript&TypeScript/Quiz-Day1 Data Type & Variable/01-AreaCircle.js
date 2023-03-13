/** 
  Diketahui rumus area = pi * radius * radius dimana pi = 3.14159, r = radius buat function dengan nama getAreaCircle(r)
  Output Contraint : 
  getAreaCircle('-1'); //return radius -1 <= 0, try higher
  getAreaCircle('a');  //return Inputan harus dalam angka
  getAreaCircle(5);    //retun 78.53975
 */

function getAreaCircle(r) {
  const pi = 3.14159;

  // cek apakah input merupakan angka yang valid
  if (isNaN(r)) {
    return "Inputan harus dalam angka";
  }

  // cek apakah radius lebih besar dari 0
  if (r <= 0) {
    return "radius " + r + " <= 0, try higher";
  }

  // hitung luas lingkaran
  const area = pi * r * r;

  // kembalikan nilai area dengan maksimal 5 angka di belakang koma
  return area.toFixed(5);
}

console.log(getAreaCircle("-1")); //return radius -1 <= 0, try higher
console.log(getAreaCircle("a")); //return Inputan harus dalam angka
console.log(getAreaCircle(5)); //retun 78.53975
