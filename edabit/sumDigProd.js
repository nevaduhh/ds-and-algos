// Product of Digits of Sum
// Create a function that takes one, two or more numbers as arguments and adds them together to get a new number. The function then repeatedly multiplies the digits of the new number by each other, yielding a new number, until the product is only 1 digit long. Return the final product.

// Examples
// sumDigProd(16, 28) ➞ 6
// // 16 + 28 = 44
// // 4 * 4 =  16
// // 1 * 6 = 6

// sumDigProd(0) ➞ 0

// sumDigProd(1, 2, 3, 4, 5, 6) ➞ 2
// Notes
// The input of the function is at least one number.

function calculateProd(num) {
  return num.toString().split('').reduce((accum, curr) => accum *= curr, 1);
}

function sumDigProd(...nums) {
  const sum = nums.reduce((accum, curr) => accum += curr, 0);
  let product = calculateProd(sum)
  let productLength = product.toString().length;

  while (productLength > 1) {
    product = calculateProd(product);
    productLength = product.toString().length;
  }

  return product;
}


console.log(sumDigProd(16, 28))



function sumDigProd2() {
	let sum = [...arguments].reduce((accum, curr) => accum += curr, 0);

	while(sum > 9){
    sum = sum.toString().split('').reduce((accum, curr) => accum *= curr, 1);
  }

	return sum
}