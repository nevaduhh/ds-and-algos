// Layers in a Rug
// Write a function that counts how many concentric layers a rug has.

// Examples
// countLayers([
//   "AAAA",
//   "ABBA",
//   "AAAA"
// ]) ➞ 2

// countLayers([
//   "AAAAAAAAA",
//   "ABBBBBBBA",
//   "ABBAAABBA",
//   "ABBBBBBBA",
//   "AAAAAAAAA"
// ]) ➞ 3

// countLayers([
//   "AAAAAAAAAAA",
//   "AABBBBBBBAA",
//   "AABCCCCCBAA",
//   "AABCAAACBAA",
//   "AABCADACBAA",
//   "AABCAAACBAA",
//   "AABCCCCCBAA",
//   "AABBBBBBBAA",
//   "AAAAAAAAAAA"
// ]) ➞ 5
// Notes
// Multiple layers can share the same component so count them separately (example #2).
// Layers will be horizontally and vertically symmetric.
// There will be at least one layer for each rug.

function countLayers(rug) {
  const midpoint = Math.floor(rug.length / 2);
  const centerLayer = rug[midpoint];
  const centerLayerMidpoint = Math.ceil(centerLayer.length / 2);
  let uniquesCount = 1;
  let uniqueLayer = centerLayer[0];

  for (let i = 1; i < centerLayerMidpoint; i++) {
    const currentLayer = centerLayer[i];

    if (uniqueLayer !== currentLayer) {
      uniquesCount++;
      uniqueLayer = currentLayer;
    }
  }

  return uniquesCount;
}

function countLayers2(rug) {
  return new Set(rug).size;
}

console.log(countLayers2([
  "AAAAAAAAAAA",
  "AABBBBBBBAA",
  "AABCCCCCBAA",
  "AABCAAACBAA",
  "AABCADACBAA",
  "AABCAAACBAA",
  "AABCCCCCBAA",
  "AABBBBBBBAA",
  "AAAAAAAAAAA"]));
