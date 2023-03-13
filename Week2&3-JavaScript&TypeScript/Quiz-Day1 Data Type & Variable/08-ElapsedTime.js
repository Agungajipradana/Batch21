/**
 * hitung detik ke dalam day, hour, minute and seconds
 */

function getPeriodTimes(seconds) {
  if (isNaN(seconds)) {
    return seconds + " is not a number";
  }

  const SECONDS_IN_DAY = 86400;
  const SECONDS_IN_HOUR = 3600;
  const SECONDS_IN_MINUTE = 60;

  const days = Math.floor(seconds / SECONDS_IN_DAY);
  seconds -= days * SECONDS_IN_DAY;

  const hours = Math.floor(seconds / SECONDS_IN_HOUR);
  seconds -= hours * SECONDS_IN_HOUR;

  const minutes = Math.floor(seconds / SECONDS_IN_MINUTE);
  seconds -= minutes * SECONDS_IN_MINUTE;

  return days + " hari " + hours + " jam " + minutes + " menit " + seconds + " detik";
}

console.log(getPeriodTimes("700005A")); //700005A is not number
console.log(getPeriodTimes("700005")); //8 hari 2 jam 26 menit 45 detik
