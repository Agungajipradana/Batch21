/**
 * Hitung pajak dari total penjualan
 * function getSalesTax(price, tax)
 */

function getSalesTax(price, tax) {
  if (isNaN(price) && isNaN(tax)) {
    return "Price & Pajak harus dalam angka";
  } else if (isNaN(price)) {
    return "Price harus dalam angka";
  } else if (isNaN(tax)) {
    return "Pajak harus dalam angka";
  }

  const totalSales = price;
  const taxRate = tax / 10;
  const totalPrice = totalSales + taxRate;

  return `Total Sales : Rp.${totalSales}\nPajak : ${taxRate}\nTotalHarga+Pajak : Rp.${totalPrice}`;
}

console.log(getSalesTax("a", 1)); //Price harus dalam angka
console.log(getSalesTax(500, "pajak")); //Pajak harus dalam angka
console.log(getSalesTax("harga", "pajak")); //Price & Pajak harus dalam angka
console.log(getSalesTax(4500, 5));
/**
 Total Sales : Rp.4500
 Pajak : 0.5
 TotalHarga+Pajak : Rp.4505
 
*/
