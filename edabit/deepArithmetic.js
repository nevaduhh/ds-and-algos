/*
  Deep Arithmetic
  Write a function that takes an array of strings of arbitrary dimensionality ([], [][], [][][], etc.) and returns the sum of every separate number in each string in the array.

  Examples
  sum(["1", "five", "2wenty", "thr33"]) ➞ 36

  sum([["1X2", "t3n"],["1024", "5", "64"]]) ➞ 1099

  sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]]) ➞ 759
  Notes
  Numbers in strings can be negative, but will all be base-10 integers.
  Negative numbers may directly follow another number.
  The hyphen or minus character ("-") does not only occur in numbers.
  Arrays may be ragged or empty.
*/

/* 
  INPUT
    array of strings, multidimensional subarrays of strings
  
  OUTPUT
    number

  EDGE CASES
    - numbers can be negative
    - arrays may be empty

  APPROACH/PSEDUOCODE
    - create function for getting value from deeply nested array
    - declare variable for sum
    - iterate over input array
      - for each element, convert array to string, add any numerical value to sum variable
        - check for negative hyphen preceding numbers
    - return sum

*/

const isNumeric = (value) => {
  return /^-?\d+$/.test(value);
}

const flatten = (elem, flattened = []) => {
  elem.forEach(elem => {
    if (Array.isArray(elem)) {
      flatten(elem, flattened);
    } else {
      flattened.push(elem);
    }
  })

  return flattened;
};

const getNumber = (str) => {
  let sum = 0;
  let tempStrNum = '';

  [...str].forEach((char, index) => {
    const isCurrCharNumber = isNumeric(char);
    const nextChar = str[index + 1];
    const isNextCharAsNumber = isNumeric(nextChar);

    if (isCurrCharNumber || char === '-' && isNextCharAsNumber) {
      tempStrNum += char;
    }

    if (tempStrNum) {
      if (!isNextCharAsNumber) {
        sum += Number(tempStrNum);
        tempStrNum = '';
      }
    }
  })

  return sum;
}

const sum = (arr) => {
  const flatArray = flatten(arr);

  return flatArray.reduce((sum, curr) => {
    const num = getNumber(curr);

    sum += num;

    return sum;
  }, 0);
};

const exampleInput1 = [ '1X2', 't3n', '1024', '5', '64' ]
const result =   sum(["1", "five", "2wenty", "thr33"])

console.log(result)

// console.log(result);
