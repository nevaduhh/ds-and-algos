/*
  Do You Like Chicken Curry?
  Create a function that takes three collections of arguments and returns the sum of the product of numbers.

  Examples
  product(1,2)(1,1)(2,3) ➞ 8
  // 1 * 1 * 2 + 2 * 1 * 3

  product(10,2)(5,0)(2,3) ➞ 100
  // 10 * 5 * 2 + 2 * 0 * 3

  product(1,2)(2,3)(3,4) ➞ 30
  // 1 * 2 * 3 + 2 * 3 * 4

  product(1,2)(0,3)(3,0) ➞ 0
  // 1 * 0 * 3 + 2 * 3 * 0
  Notes
  All test input is valid.
*/

const product = (n1, n2) => (
  (n3, n4) => (
    (n5, n6) => (
      (n1 * n3 * n5) + (n2 * n4 * n6)
    )
  )
);

const result = product(2,3)(4,5)(2,3)

console.log(result)