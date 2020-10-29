"""
Buggy Uppercase Counting
In the Code tab is a function which is meant to return how many uppercase letters there are in a list of various words. Fix the list comprehension so that the code functions normally!

Examples
count_uppercase(["SOLO", "hello", "Tea", "wHat"]) ➞ 6

count_uppercase(["little", "lower", "down"]) ➞ 0

count_uppercase(["EDAbit", "Educate", "Coding"]) ➞ 5
Notes
Check the Resources for some helpful tutorials on list comprehensions.
"""

# Original Code
def count_uppercase(lst):
	return sum(letter.isupper() for letter in word for word in lst)

# Fixed Code
def count_uppercase_2(words):
  upper_sum = 0

  for word in words:
    for letter in word:
      if letter.isupper():
        upper_sum += 1
        
  return upper_sum

# Fixed Code (list comprehension with len())
def count_uppercase_3(words):
  return len([letter for word in words for letter in word if letter.isupper()])

# Fixed Code (list comprehension with sum)
def count_uppercase_4(words):
  return sum(letter.isupper() for word in words for letter in word)