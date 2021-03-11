/*
  return n element in sequence

  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
*/

// iterative approach O(n)
const fibSequence = (n) => {
  let first = 0;
  let second = 1;
  let temp = 0;

  while (n >= 0) {
    temp = first;
    first = first + second;
    second = temp;

    n--;
  }

  return second;
}

const result = fibSequence(6);

console.log(result)

// memoized approach
const fibSequence2 = (n, index = 0, cache = {}) => {
  if (n === 0 || n === 1) {
    return n;
  }

  return fibSequence2(n - 1) + fibSequence2(n - 2);
}

const result2 = fibSequence2(6);

console.log(result2);

const fibSequence3 = (n, cache = {}) => {
  if (cache[n]) {
    return cache[n]
  }

  if (n <= 1) {
    return n;
  }

  const newNum = fibSequence3(n - 1, cache) + fibSequence3(n - 2, cache);

  cache[n] = newNum;

  return newNum;
}

const result3 = fibSequence3(6);

console.log(result3);
