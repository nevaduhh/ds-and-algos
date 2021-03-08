/*
Group in Order
Create a function that groups an array of numbers based on a size parameter. The size represents the maximum length of each sub-array.

[1, 2, 3, 4, 5, 6], 3
[[1, 3, 5], [2, 4, 6]]
// Divide array into groups of size 3.

[1, 2, 3, 4, 5, 6], 2
[[1, 4], [2, 5], [3, 6]]
// Divide array into groups of size 2.

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4
[[1, 4, 7, 10], [2, 5, 8, 11], [3, 6, 9]]
// "Leftover" arrays are okay.
Examples
group([1, 2, 3, 4], 2) ➞ [[1, 3], [2, 4]]

group([1, 2, 3, 4, 5, 6, 7], 4) ➞ [[1, 3, 5, 7], [2, 4, 6]]

group([1, 2, 3, 4, 5], 1) ➞ [[1], [2], [3], [4], [5]]

group([1, 2, 3, 4, 5, 6], 4) ➞ [[1, 3, 5], [2, 4, 6]]
Notes
The size parameter represents the maximum size for each sub-array (see ex.4). You should try to fill each sub-array evenly. In other words, ex.4 should be [[1, 3, 5], [2, 4, 6]], not [[1, 3, 5, 6], [2, 4]].
Keep the relative order of the numbers in each sub-array the same as the order in the original array.
*/

/* 
  INPUT:
    + array of numbers
    + max size for each sub array

  OUTPUT:
    + array of arrays

  EDGE CASES:
    + will array always have numbers?
    + can array be empty?
    + can size be greater than number of elements in array?

  APPROACH:
    + compare the length of the array to the size arg
      + if there isn't a remainder, then create subarrays at that size
      + if there is a remainder, check if that number subtracted by the size is only a difference of 1
        + then create subarrays at smaller size
        + otherwise, shrink down


  group([1, 2, 3, 4, 5, 6, 7], 4)
    ➞ [[1, 3, 5, 7], [2, 4, 6]]

  group([1, 2, 3, 4, 5, 6], 4)
    ➞ [[1, 3, 5], [2, 4, 6]]
*/

// ugly approach #1
const determineSize = (size, diff) => {
  if (diff === 0) {
    return size;
  }

  while (size - diff > 1) {
    size--;
  }

  return size;
}

const group = (arr, size) => {
  const diff = arr.length % size;
  const updatedSize = determineSize(size, diff);
  const numberOfSubArrays = Math.ceil(arr.length / updatedSize);
  const output = [];

  arr.forEach((num, i) => {
    const subArrayIndex = i % numberOfSubArrays;

    if (!output[subArrayIndex]) {
      output.push([]);
    }

    output[subArrayIndex].push(num);
  })

  return output;
};

const result = group([1, 2, 3, 4], 2)

console.log(result);
