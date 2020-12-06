"""
Designing Rugs
Write a function that accepts the width and height (m, n) and an optional proc s and generates a list with m elements. Each element is a string consisting of either:

The default character (hash #) repeating n times (if no proc is given).
The character passed in through the proc repeating n times.
Examples
make_rug(3, 5) ➞ [
  "#####",
  "#####",
  "#####"
]

make_rug(3, 5, '$')  ➞ [
  "$$$$$",
  "$$$$$",
  "$$$$$"
]

make_rug(2, 2, 'A')  ➞ [
  "AA"
  "AA"
]
Notes
You can set a value for the parameter when creating the function e.g. def func(x = 3)
"""

# ugly
def make_rug(row_num, column_num, key="#"):
  output = []
  for row_num in range(0, row_num):
    formatted_row = ""
    for column_num in range(column_num):
      formatted_row += key
    output.append(formatted_row)
  return output

# better
def make_rug_2(row_num, column_num, key="#"):
  return [column_num * key] * row_num