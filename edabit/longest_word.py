"""
https://edabit.com/challenge/Aw2QK8vHY7Xk8Keto

Longest Word
Write a function that finds the longest word in a sentence. If two or more words are found, return the first longest word. Characters such as apostophe, comma, period (and the like) count as part of the word (e.g. O'Connor is 8 characters long).

Examples
longest_word("Margaret's toy is a pretty doll.") ➞ "Margaret's"

longest_word("A thing of beauty is a joy forever.") ➞ "forever."
  
longest_word("Forgetfulness is by all means powerless!") ➞ "Forgetfulness"
Notes
A similar version of this challenge, which is to be implemented recursively, can be found in here.
"""

def longest_word(sentence):
  longest = ""

  for word in sentence.split(" "):
    if len(word) > len(longest):
      longest = word
  
  return longest

