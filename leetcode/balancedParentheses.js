// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false




'[{}]'
'['

'[{)]'
'[{)'


/*
  assumptions:
    - can we assume that input str will always contain brackets
    - could str be an empty string
    - could str be a single open bracket

*/

function isValid(str) {
  const BRACKETS = {
    '}': '{',
    ']': '[',
    ')': '('
  };

  const OPEN_BRACKETS = ['(', '{', '['];

  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const currentBracket = str[i];

    if (OPEN_BRACKETS.includes(currentBracket)) {
      stack.push(currentBracket);

      continue;
    }

    const lastElement = stack.pop();

    if (lastElement !== BRACKETS[currentBracket]) {
      return false;
    }
  }

  return !stack.length;
}

const a = '()[){}'

console.log(isValid(a))