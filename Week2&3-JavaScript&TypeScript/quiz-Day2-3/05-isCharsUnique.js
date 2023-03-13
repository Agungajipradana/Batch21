function isCharsUnique(string) {
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(isCharsUnique("abcdefg")); //true
console.log(isCharsUnique("abcdefga")); //false
