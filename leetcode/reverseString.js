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

console.log(reverseString(TEST_INPUT));

// declarative approach (but still requires new array)
const reverseStringReduceRight = (strArr) => {
  return strArr.reduceRight((reversedArr, currVal) => {
    reversedArr.push(currVal);

    return reversedArr;
  }, []);
};

console.log(reverseStringReduceRight(TEST_INPUT));

/* 
  APPROACH
    1. iterate over array
      2. swap curr val relative from beginning of array with val relative to end
*/

// best approach: O(1) memory and O(n/2) time
const reverseStringBest = (strArr) => {
  for (let i = 0; i < Math.floor(strArr.length / 2); i++) {
    const currVal = strArr[i];
    const endIndex = strArr.length - i - 1;
    const endVal = strArr[endIndex];

    strArr[i] = endVal;
    strArr[endIndex] = currVal;
  }

  return strArr;
}

console.log(reverseStringBest(TEST_INPUT));
