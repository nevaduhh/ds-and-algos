// Given a sentence, create a function which shifts the first letter of each word to the next word in the sentence (shifting right).

// Examples
// shiftSentence("create a function") ➞ "freate c aunction"

// [c, a, f]

// shiftSentence("it should shift the sentence") ➞ "st ihould shift she tentence"]

// shiftSentence("the output is not very legible") ➞ "lhe tutput os iot nery vegible"

// shiftSentence("edabit") ➞ "edabit"
// Notes
// The last word shifts its first letter to the first word in the sentence.
// All sentences will be given in lowercase.
// Note how single words remain untouched (example #4).

function shiftSentence(sentence) {
  const shiftedSentence = [];
  const split = sentence.split(' ')

  for (let i = split.length - 1; i >= 0; i--) {
    const currentWord = split[i];
    const splitCurrentWord = currentWord.split('')

    if (i === 0) {
      const firstLetterOfLastWord = split[split.length - 1][0];

      splitCurrentWord[0] = firstLetterOfLastWord;
      shiftedSentence.unshift(splitCurrentWord.join(''));

      break;
    }
    const firstLetterOfPrevWord = split[i - 1][0];

    splitCurrentWord[0] = firstLetterOfPrevWord;
    shiftedSentence.unshift(splitCurrentWord.join(''))
  }

  return shiftedSentence.join(' ');
}

function shiftSentence2(sentence) {
  const split = sentence.split(' ');
  const firstLetters = split.map((word) => word[0]);

  firstLetters.unshift(firstLetters.pop())

  return split.map((word, i) => firstLetters[i] + word.slice(1, word.length)).join(' ')
}

console.log(shiftSentence2('create a function'))