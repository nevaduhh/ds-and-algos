// Balanced Words
// We can assign a value to each character in a word, based on their position in the alphabet (a = 1, b = 2, ... , z = 26). A balanced word is one where the sum of values on the left-hand side of the word equals the sum of values on the right-hand side. For odd length words, the middle character (balance point) is ignored.

// Write a function that returns true if the word is balanced, and false if it's not.

// Examples
// balanced("zips") ➞ true
// // "zips" = "zi|ps" = 26+9|16+19 = 35|35 = true

// balanced("brake") ➞ false
// // "brake" = "br|ke" = 2+18|11+5 = 20|16 = false
// Notes
// All words will be lowercase, and have a minimum of 2 characters.
// Palindromic words will always be balanced.

const balanced = (word) => {
  const upperCaseWord = word.toUpperCase();
  let first = 0;
  let second = 0;

  for (let i = 0; i < Math.floor(upperCaseWord.length / 2); i++) {
    first += upperCaseWord[i].charCodeAt(0) - 64;
  }

  for (let i = upperCaseWord.length - 1; i >= upperCaseWord.length / 2; i--) {
    second += upperCaseWord[i].charCodeAt(0) - 64;
  }

  return (first === second);
};

const result = balanced('seasoning');
console.log(result);
