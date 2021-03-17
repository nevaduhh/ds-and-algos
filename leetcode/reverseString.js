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

/* 
  INPUT
    array of chars

  OUTPUT
    reversed array of chars

  APPROACH
    0. declare constant for reversed array
    1. iterate over the array from the end
      2. for each char push into reversed array
    3. return reversed array
    
*/

// ugly approach
const reverseString = (strArr) => {
  const reversedArr = [];

  for (let i = strArr.length - 1; i > -1; i--) {
    reversedArr.push(strArr[i]);
  }

  return reversedArr;
}
