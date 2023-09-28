function balancedArray(arr) {
  const arr1 = arr.slice(0, arr.length / 2);
  const arr1Sum = arr1.reduce((sum, currentNum) => sum += currentNum, 0);
  const arr2 = arr.slice(arr.length / 2, arr.length);
  const arr2Sum = arr2.reduce((sum, currentNum) => sum += currentNum, 0);

  if (arr1Sum > arr2Sum) {
    return arr1Sum - arr2Sum;
  }

  if (arr2Sum > arr1Sum) {
    return arr2Sum - arr1Sum;
  }

  return 0;
}

console.log(balancedArray([1, 2, 1, 2, 1, 3,]));

