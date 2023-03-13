/** Buat program untuk menampilkan prosentasi dari income*/

function getProsentase(start, end) {
  if (isNaN(start) || isNaN(end)) {
    return start + " or " + end + " Input harus dalam angka";
  }
  const diff = end - start;
  const percentage = (diff / start) * 100;

  if (percentage > 0) {
    return `Total kenaikan income ${percentage}%`;
  } else {
    return `Total penurunan income ${Math.ceil(percentage)}%`;
  }
}

console.log(getProsentase("abc", "bca")); //abc or bca harus dalam angka
console.log(getProsentase(600000.0, 750000.0)); //Total kenaikan income 25%
console.log(getProsentase(750000.0, 650000.0)); //Total penurunan income -14%
