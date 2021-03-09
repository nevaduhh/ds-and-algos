/*
  return n element in sequence

  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
*/

// iterative approach O(n)
const fibSequence = (n) => {
  let index = 1;
  let first = 0;
  let second = 1;
  let newSum = 0;

  while (index < n) {
    newSum = first + second;
    first = second;
    second = newSum;

    index++;
  }

  return newSum;
}

const result = fibSequence(6);

console.log(result);