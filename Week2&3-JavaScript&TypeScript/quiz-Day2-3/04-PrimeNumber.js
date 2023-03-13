function showPrimeNumber(n) {
  let primeNumbers = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }

  let output = "";
  let index = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (index >= primeNumbers.length) {
        break;
      }
      output += primeNumbers[index] + "\t";
      index++;
    }
    output += "\n";
  }
  return output;
}

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(showPrimeNumber(100));
/**

2	3	5	7	11
13	17	19	23	29
31	37	41	43	47
53	59	61	67	71
73	79	83	89	97

 */

/**
Notes:
("\t") = karakter tab 
("\n") = karakter newline 
 */
