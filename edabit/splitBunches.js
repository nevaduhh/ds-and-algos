// You bought a few bunches of fruit over the weekend. Create a function that splits a bunch into singular objects inside an array.

// Examples
// splitBunches([
//   { name: "grapes", quantity: 2 }
// ]) ➞ [
//   { name: "grapes", quantity: 1 },
//   { name: "grapes", quantity: 1 }
// ]


// splitBunches([
//   { name: "currants", quantity: 1 },
//   { name: "grapes", quantity: 2 },
//   { name: "bananas", quantity: 2 }
// ]) ➞ [
//   { name: "currants", quantity: 1},
//   { name: "grapes", quantity: 1 },
//   { name: "grapes", quantity: 1 },
//   { name: "bananas", quantity: 1 },
//   { name: "bananas", quantity: 1 }
// ]
// Notes
// The input array will never be empty.
// Objects will always have a name and quantity over 0.
// The returned object should have each fruit in the same order as the original.

function splitBunches(bunches) {
  const result = [];

  bunches.map(({ name, quantity }) => {
    if (quantity > 1) {
      const split = [];

      for (let i = 0; i < quantity; i++) {
        split.push({ name, quantity : 1 })
      }

      result.push(...split);
    } else {
      result.push({ name, quantity })
    }
  });

  return result;
}

const bunches = [
  { name: "currants", quantity: 1 },
  { name: "grapes", quantity: 2 },
  { name: "bananas", quantity: 2 }
]

console.log(splitBunches(bunches));
