"""
https://edabit.com/challenge/2zKetgAJp4WRFXiDT

Create a function that takes a number num and returns its length.

Examples
number_length(10) ➞ 2

number_length(5000) ➞ 4

number_length(0) ➞ 1
Notes
DO NOT USE LEN() FOR THIS CHALLENGE
"""

def number_length(num):
  count = 0

  for num_str in list(str(num)):
    count += 1
  
  return count

def number_length_2(num):
  return sum([1 for num_str in str(num)])
