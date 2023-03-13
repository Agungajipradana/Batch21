/**
 * hitung sales discount plus tax rate
 * function getSalesDiscount
 */

function getSalesDiscount(price, tax, discount) {
  if (isNaN(price) && isNaN(tax) && isNaN(discount)) {
    return "Price, Tax & Discount harus dalam angka";
  } else if (isNaN(price)) {
    return "Price harus dalam angka";
  } else if (isNaN(tax)) {
    return "Pajak harus dalam angka";
  }

  let totalSales = price;
  let discountAmount = (price * discount) / 100;
  let priceAfterDiscount = price - discountAmount;
  let taxAmount = (priceAfterDiscount * tax) / 100;
  let totalPayment = priceAfterDiscount + taxAmount;

  return (
    "Total Sales: Rp." +
    totalSales.toFixed(0) +
    "\nDiscount (" +
    discount +
    "%):\tRp." +
    discountAmount.toFixed(0) +
    "\nPrice After Discount:\tRp." +
    priceAfterDiscount.toFixed(0) +
    "\nTax (" +
    tax +
    "%):\t\tRp." +
    taxAmount.toFixed(1) +
    "\n----------------------------------\nTotal Payment:\t\tRp." +
    totalPayment.toFixed(1)
  );
}

console.log(getSalesDiscount("a", 1, 5)); //Price harus dalam angka
console.log(getSalesDiscount(500, "pajak", 5)); //Pajak harus dalam angka
console.log(getSalesDiscount("harga", "pajak", "discount")); //Price, Tax & Discount harus dalam angkaa
console.log(getSalesDiscount(4500, 10, 5));
/**
    Total Sales 	: Rp.4500 
    Discount (5%) 	: Rp.225
    PriceAfterDiscount 	: Rp.4275
    Pajak (10%) 	: Rp.427.5
    ----------------------------------
    TotalPayment 	: Rp.4702.5
 */
