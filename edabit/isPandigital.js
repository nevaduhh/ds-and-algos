// Pandigital Numbers
// A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.

// Examples
// isPandigital(98140723568910) ➞ true

// isPandigital(90864523148909) ➞ false
// // 7 is missing.

// isPandigital(112233445566778899) ➞ false
// Notes
// Think about the properties of a pandigital number when all duplicates are removed.

function isPandigital(num) {
  const uniques = Array.from(new Set(num.toString())).sort();

  for (let i = 0; i < 10; i++) {
    const currentNumber = Number(uniques[i]);

    if (currentNumber !== i) {
      return false;
    }
  }

  return true;
}

function isPandigital2(num) {
  return new Set(num.toString()).size === 10;
}

const input = 112233445566778899;

console.log(isPandigital2(input))