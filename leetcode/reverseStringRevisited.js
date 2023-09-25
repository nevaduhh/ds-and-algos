// Write a function that reverses a string. The input string is given as an array of characters s.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// Constraints:
// 1 <= s.length <= 105
// s[i] is a printable ascii character.

// Follow up: Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

const TEST_INPUT = ['h', 'e', 'l', 'l', 'o'];

function reverseString(strArray) {
  const output = [];

  for (let i = strArray.length - 1; i >= 0; i--) {
    output.push(strArray[i])
  }

  return output;
}

function reverseString2(strArray) {
  const midpoint = Math.floor(strArray.length / 2);

  for (let i = 0, j = strArray.length - 1; i <= midpoint; i++, j--) {
    const first = strArray[i];
    const last = strArray[j];

    strArray[i] = last;
    strArray[j] = first;
  }

  return strArray;
}

console.log(reverseString2(TEST_INPUT));
