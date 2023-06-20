# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

# An input string is valid if:

# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
# Every close bracket has a corresponding open bracket of the same type.


# Example 1:

# Input: s = "()"
# Output: true
# Example 2:

# Input: s = "()[]{}"
# Output: true
# Example 3:

# Input: s = "(]"
# Output: false

class Solution:
    def isValid(self, brackets: str) -> bool:
        brackets_len = len(brackets)

        if brackets_len % 2 != 0:
            return False

        brackets_dict = {
            "(": ")",
            "{": "}",
            "[": "]",
        }

        open_brackets = []

        for index in range(brackets_len):
            current_bracket = brackets[index]

            if current_bracket in ("(", "{", "["):
                open_brackets.append(current_bracket)
            elif len(open_brackets) == 0:
                return False
            else:
                last_open_bracket = open_brackets.pop()

                if brackets_dict[last_open_bracket] != current_bracket:
                    return False

        return False if len(open_brackets) else True


class Solution_2:
    def isValid(self, s: str) -> bool:
        stack = []

        for i in s:
            if i == "{":
                stack.append("}")
            elif i == '[':
                stack.append("]")
            elif i == "(":
                stack.append(")")
            # accounts for empty stack if `i` is closing bracket before an opening one
            # verifies that popped stack element matches current closing bracket
            elif not stack or stack.pop() != i:
                return False
        return not stack


solution = Solution_2()

print(solution.isValid(")}"))
