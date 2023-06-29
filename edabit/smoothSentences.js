// Carlos is a huge fan of something he calls smooth sentences.

// A smooth sentence is one where the last letter of each word is identical to the first letter the following word (and not case sensitive, so "A" would be the same as "a").

// The following would be a smooth sentence "Carlos swam masterfully" because "Carlos" ends with an "s" and swam begins with an "s" and swam ends with an "m" and masterfully begins with an "m".

// Create a function that determines whether the input sentence is a smooth sentence, returning a boolean value true if it is, false if it is not.

function isSmooth(sentence) {
  const splitSentence = sentence.toLowerCase().split(' '); // O(n)

  for (let i = 0; i < splitSentence.length - 1; i++) { // O(n)
    const currentWord = splitSentence[i];
    const nextWord = splitSentence[i + 1];

    if (!currentWord.endsWith(nextWord[0])) {
      return false;
    }
  }

  return true;
}

const sentence = 'Rita asks Sam mean numbered dilemmas';
console.log(isSmooth(sentence))

// time complexity is O(2n)
// space complexity is O(n)