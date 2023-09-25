// Mutations Only: Zeroes to the End
// Write a function that moves all the zeroes to the end of an array. Do this without returning a copy of the input array.

// Examples
// zeroesToEnd([1, 2, 0, 0, 4, 0, 5]) ➞ [1, 2, 4, 5, 0, 0, 0]

// zeroesToEnd([0, 0, 2, 0, 5]) ➞ [2, 5, 0, 0, 0]

// zeroesToEnd([4, 4, 5]) ➞ [4, 4, 5]

// zeroesToEnd([0, 0]) ➞ [0, 0]
// Notes
// You must mutate the original array.
// Keep the relative order of the non-zero elements the same.

function zeroesToEnd(nums) {
  const originalLength = nums.length;
  let timesShifted = 0

  for (let i = 0; i < originalLength; i++) {
    const currentNum = nums[i - timesShifted];

    if (currentNum === 0) {
      nums.splice(i - timesShifted, 1)
      nums.push(0)

      timesShifted++
    }
  }

  return nums;
}

console.log(zeroesToEnd([1, 2, 0, 0, 4, 0, 5]))