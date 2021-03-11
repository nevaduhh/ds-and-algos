// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

/* 
  INPUT:
    nums[]
    target num
  
  OUTPUT:
    indices of two numbers that add up to the array
  
  EDGE CASES/NOTES:
    only one solution per input
    same element cant be used twice
    will there always be a solution?
    do I need to validate the nums elements to ensure type

  PSEUDOCODE
    0. create the output array
    1. iterate over nums
      2. for each num, iterate over remaining elements in the array
        3. check if the difference between target and current number is equal to new num in nested loop
        4. if no difference, push index of both nums to output
    5. return output array

  EXAMPLE
    nums = [2,7,11,15], target = 9
    output = [0, 1]

  TIME COMPLEXITY
    O(n^2)

*/

const twoSum = (nums, target) => {
  // 1. iterate over nums
  for (let i = 0; i <= nums.length; i++) {
    const firstNum = nums[i];

    // 2. for each num, iterate over remaining elements in the array
    for (let j = i + 1; j < nums.length; j++) {
      const secondNum = nums[j];

      // 3. check if the difference between target and current number is equal to new num in nested loop
      if (firstNum + secondNum === target) {
        // 4. if no difference, push index of both nums to output
        return [i, j];
      }
    }
  }
};

const result = twoSum([2,7,11,15], 9);

console.log(result);

/* ------------------------------------------------------------------------------------------------ */

/* 
  APPROACH
    0. create cache constant
    1. iterate over nums array
    2. get the difference of target and current num
    3. if difference is keyed on the cache obj, return [current loop index, index of keyed property]
    4. assign key of current num with value of current index

  TIME COMPLEXITY
    O(n)
*/

const twoSum2 = (nums, target) => {
  const cache = {};

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    const difference = target - currNum;

    if (cache.hasOwnProperty(difference)) {
      return [cache[difference], i]
    }

    cache[currNum] = i;
  }
};

const result2 = twoSum2([2,7,11,15], 9);

console.log(result2);
