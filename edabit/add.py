"""
Create a function that takes two number strings and returns their sum as a string.

Examples
add("111", "111") ➞ "222"

add("10", "80") ➞ "90"

add("", "20") ➞ "Invalid Operation"
Notes
If any input is "" or None, return "Invalid Operation".
"""

# ugly approach
def add(str_1, str_2):
  if str_1 is "":
    return "Invalid Operation"
  if str_2 is None:
    return "Invalid Operation"
  if str_1 is None:
    return "Invalid Operation"
  if str_2 is "":
    return "Invalid Operation"
  else:
    return str(int(str_1) + int(str_2))

# much better
def add_2(str_1, str_2):
  try:
    return str(int(str_1) + int(str_2))
  except:
    return "Invalid Operation"
