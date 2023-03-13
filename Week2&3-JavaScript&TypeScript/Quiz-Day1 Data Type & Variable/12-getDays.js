/** Display year is kabisat and display month */

function getDays(month, year) {
  if ((isNaN(month) || month < 1 || month > 12) && (isNaN(year) || year.toString().length !== 4)) {
    return "inputan bulan & tahun harus dalam integer";
  } else if (isNaN(month) || month < 1 || month > 12) {
    return "inputan bulan harus dalam integer";
  } else if (isNaN(year) || year.toString().length !== 4) {
    return "inputan tahun harus dalam integer";
  }

  let daysInMonth = [
    31, // Januari
    28, // Februari
    31, // Maret
    30, // April
    31, // Mei
    30, // Juni
    31, // Juli
    31, // Agustus
    30, // September
    31, // Oktober
    30, // November
    31, // Desember
  ];

  let days = daysInMonth[month - 1];

  if (month === 2 && isLeapYear(year)) {
    return "This month has 29 days, " + year + " adalah tahun kabisat";
  } else {
    return "This month has " + days + " hari";
  }
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(getDays("a", 2021)); //inputan bulan harus dalam integer
console.log(getDays("2", "year")); //inputan tahun harus dalam integer
console.log(getDays("m", "year")); //inputan bulan & tahun harus dalam integer
console.log(getDays(2, 2000)); //This month has 29 days, 2000 adalah tahun kabisat
console.log(getDays(8, 2021)); //This month has 31 hari
