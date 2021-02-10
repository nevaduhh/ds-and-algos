"""
https://edabit.com/challenge/2FR33kRmz87xRMZuq

Histogram Function
Build a function that creates histograms. Every bar needs to be on a new line and its length corresponds to the numbers in the list passed as an argument. The second argument of the function represents the character that needs to be used.

histogram(lst, char) -> str
Examples
histogram([1, 3, 4], "#") ➞ "#\n###\n####"

#
###
####

histogram([6, 2, 15, 3], "=") ➞ "======\n==\n===============\n==="

======
==
===============
===

histogram([1, 10], "+") ➞ "+\n++++++++++"

+
++++++++++
Notes
For better understanding try printing out the result.
"""

def histogram(lst, char):
  output = ""
  for idx, elem in enumerate(lst):
    for i in range(0, elem):
      output = output + char
    if idx != len(lst) - 1:
      output = output + "\n"
  return output

def histogram_2(lst, char):
  return "\n".join(char * elem for elem in lst)

