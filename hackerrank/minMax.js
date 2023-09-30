// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example

// The minimum sum is  and the maximum sum is . The function prints

// 16 24
// Function Description

// Complete the miniMaxSum function in the editor below.

// miniMaxSum has the following parameter(s):

// arr: an array of  integers
// Print

// Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

// Input Format

// A single line of five space-separated integers.

// Constraints


// Output Format

// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)$a

const arr = [7, 69, 2, 221, 8974];

function calculateSum(nums) {
  return nums.reduce((sum, currNum) => sum += currNum, 0);
}

function minMax(nums) {
  let minSum = 0;
  let maxSum = 0;

  nums.forEach((_, index) => {
    const numsToSum = [...nums.slice(index + 1, nums.length), ...nums.slice(0, index)];
    const sum = calculateSum(numsToSum);

    if (!minSum || !maxSum) {
      minSum = sum;
      maxSum = sum;
    }

    if (sum < minSum) {
      minSum = sum;
    }

    if (sum > maxSum) {
      maxSum = sum;
    }
  });

  console.log(minSum, maxSum)
}

console.log(minMax([1,2,3,4,5]))