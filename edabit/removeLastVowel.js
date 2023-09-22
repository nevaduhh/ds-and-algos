// Remove the Last Vowel
// Write a function that removes the last vowel in each word in a sentence.

// Examples
// removeLastVowel("Those who dare to fail miserably can achieve greatly.")
// ➞ "Thos wh dar t fal miserbly cn achiev gretly."

// removeLastVowel("Love is a serious mental disease.")
// ➞ "Lov s  serios mentl diseas"

// removeLastVowel("Get busy living or get busy dying.")
// ➞ "Gt bsy livng r gt bsy dyng"
// Notes
// Vowels are: a, e, i, o, u (both upper and lowercase).


// NOTE: attempt 1
function removeLastVowel(sentence) {
  let newSentence = '';

  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  }

  sentence.split(' ').forEach((word) => {
    const charArray = word.split('');

    for (let i = word.length - 1; i >= 0; i--) {
      i
      const currentChar = charArray[i];

      if (vowels[currentChar.toLowerCase()]) {
        charArray.splice(i, 1);

        newSentence += `${charArray.join('')} `;

        return;
      }
    }
  });

  return newSentence.trim();
}

const sentence1 = 'Those who dare to fail miserably can achieve greatly';
const sentence2 = 'Love is a serious mental disease.';

console.log(removeLastVowel(sentence1));
console.log(removeLastVowel(sentence2));

// NOTE: refactor
function removeLastVowel2(sentence) {
  return sentence
    .split(' ')
    .map(word => word.replace(/[aeiou](?=[^aeiou]*\b)/i, ''))
    .join(' ');
}
