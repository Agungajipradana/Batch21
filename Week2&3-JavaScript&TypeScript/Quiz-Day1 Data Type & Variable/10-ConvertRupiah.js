/**
 * Convert rupiah to other currency
 */

function convertToRupiah(money, type) {
  const currencyRate = {
    yen: 130.12,
    usd: 14382.5,
    euro: 16000,
  };

  const rate = currencyRate[type];
  if (!rate) {
    return "no match type currency";
  }

  const converted = money * currencyRate[type];

  return `${money} ${type} = Rp.${converted.toLocaleString("id")}`;
}

console.log(convertToRupiah(1000, "yen")); //1000 yen  = Rp.130.120
console.log(convertToRupiah(100, "usd")); //100 dollar  = Rp.1.438.250
console.log(convertToRupiah(100, "euro")); //100 dollar  = Rp.1.600.000
console.log(convertToRupiah(100, "")); //no match type currency
