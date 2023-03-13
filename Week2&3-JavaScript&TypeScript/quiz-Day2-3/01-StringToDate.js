/** ubah value string ke date
 *  gunakan split
 *  inputan s = bulan/hari/tahun
 */

function strToDate(s) {
  const parts = s.split("/");
  if (parts.length !== 3) {
    return `${s} bad format date`;
  }
  const [month, day, year] = parts;
  const date = new Date(`${month}/${day}/${year}`);
  if (isNaN(date.getTime())) {
    return `${s} bad format date`;
  }
  return date;
}

console.log(strToDate("12/30/2021")); //Thu Dec 30 2021 00:00:00 GMT+0700 (Western Indonesia Time)
console.log(strToDate("12/aa/bb")); //12/aa/bb bad format date
