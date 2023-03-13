function isPalindrome(word) {
  // Hapus karakter non-abjad dan ubah menjadi huruf kecil
  const cleanWord = word.replace(/[^a-zA-Z]/g, "").toLowerCase();
  //  membalikkan string
  const reversedWord = cleanWord.split("").reverse().join("");
  // membandingkan string asli dengan string terbalik
  return cleanWord === reversedWord;
}

console.log(isPalindrome("kasur ini rUsak")); //true
