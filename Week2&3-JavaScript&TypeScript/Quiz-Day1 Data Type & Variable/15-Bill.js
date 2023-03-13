/** hitung total gaji karyawan */

function totalGaji(gaji1, gaji2, gaji3) {
  let total = 0;
  let emp1 = gaji1 + gaji1 * taxGaji(gaji1);
  let emp2 = gaji2 + gaji2 * taxGaji(gaji2);
  let emp3 = gaji3 + gaji3 * taxGaji(gaji3);
  total = emp1 + emp2 + emp3;
  return `Total gaji yang harus dibayar :  
  Emp1 : Rp.${emp1} + Pajak(${taxGaji(gaji1) * 100}%)=Rp.${emp1 + emp1 * taxGaji(gaji1)}
  Emp2 : Rp.${emp2} + Pajak(${taxGaji(gaji2) * 100}%)=Rp.${emp2 + emp2 * taxGaji(gaji2)}
  Emp3 : Rp.${emp3} + Pajak(${taxGaji(gaji3) * 100}%)=Rp.${emp3 + emp3 * taxGaji(gaji3)}
  Total : Rp.${total}`;
}

function taxGaji(gaji) {
  if (gaji >= 10000) {
    return (10 / 100).toFixed(2);
  } else if (gaji >= 1000 && gaji < 10000) {
    return (5 / 100).toFixed(2);
  } else if (gaji >= 100 && gaji < 1000) {
    return (2 / 100).toFixed(2);
  }
}

console.log(totalGaji(500, 2000, 12000));
/**
    Total gaji yang harus dibayar :  
    Emp1 : Rp.500 + Pajak(2%)=Rp.510
    Emp1 : Rp.2000 + Pajak(5%)=Rp.2100
    Emp1 : Rp.12000 + Pajak(10%)=Rp.13200
    Total : Rp.15810
 */
