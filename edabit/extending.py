"""
https://edabit.com/challenge/ycaiA3qTXJWyDz6Dq

Extending The String
Make two functions:

consonants(word) which returns the number of consonants in a word when called.
vowels(word) which returns the number of vowels in a word when called.
Examples
vowels('Jameel SAEB') ➞ 5

consonants('He|\o mY Fr*end') ➞ 7

consonants("Smithsonian") ➞ 7
vowels("Smithsonian") ➞ 4
Notes
Vowels are: a, e, i, o, u.
Spaces and special character do not count as consonants nor vowels.
Check Resources for more info.
"""

VOWEL_LETTERS = {
  "a": True,
  "e": True,
  "i": True,
  "o": True,
  "u": True,
}

def vowels(word):
  vowels_sum = 0
  for letter in list(word.lower()):
    if letter.isalpha() and letter in VOWEL_LETTERS:
      vowels_sum = vowels_sum + 1
  return vowels_sum

def consonants(word):
  consonants_sum = 0
  for letter in list(word.lower()):
    print("letterL ", letter)
    if letter.isalpha() and letter not in VOWEL_LETTERS:
      consonants_sum = consonants_sum + 1
  return consonants_sum


def consonants_2(word):
  return sum(1 for i in word if i.lower() not in 'aeiou' and i.isalpha())

def vowels_2(word):
  return sum(1 for i in word if i.lower() in 'aeiou')