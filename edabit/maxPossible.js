/*
Maximize the First Number
Write a function that makes the first number as large as possible by swapping out its digits for digits in the second number.

To illustrate:

maxPossible(9328, 456) ➞ 9658
// 9658 is the largest possible number built from swaps from 456.
// 3 replaced with 6 and 2 replaced with 5.
Examples
maxPossible(523, 76) ➞ 763

maxPossible(9132, 5564) ➞ 9655

maxPossible(8732, 91255) ➞ 9755
Notes
Each digit in the second number can only be used once.
Zero to all digits in the second number may be used.
*/

// n2 = [...''+n2].sort((a,b) => b-a);
// return +([...''+n1].map(v => v < n2[0] ? n2.shift() : v).join(''));

const maxPossible = (num1, num2) => {
  const num2Arr = [...num2.toString()].sort((a, b) => b - a);

  return +[...num1.toString()]
    .map(int => (
      int < num2Arr[0] ? num2Arr.shift() : int
  )).join('');
};

const result = maxPossible(9132, 5564);

console.log(result);

