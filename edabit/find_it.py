"""
https://edabit.com/challenge/2wQPKcSipXmK4idwD

Burglary Series (03): Is It Gone?
Your spouse is not concerned with the loss of material possessions but rather with his/her favorite pet. Is it gone?!

Given a dictionary of the stolen items and a string in lower cases representing the name of the pet (e.g. "rambo"), return:

"Rambo is gone..." if the name is on the list.
"Rambo is here!" if the name is not on the list.
Note that the first letter of the name in the return statement is capitalized.

Examples
  items = {
  "tv": 30,
  "timmy": 20,
  "stereo": 50,
} ➞ "Timmy is gone..."
# Timmy is in the dictionary.


  items = {
  "tv": 30,
  "stereo": 50,
} ➞ "Timmy is here!"
# Timmy is not in the  dictionary.


items = { } ➞ "Timmy is here!"
# Timmy is not in the dictionary.
Notes
N/A
"""

# lame
def find_it(items, name):
  for key, value in items.items():
    if name == key:
      return "{} is gone...".format(name.capitalize())
  return "{} is here!".format(name.capitalize())

# much simpler...
def find_it_2(items, name):
  return '{} is {}'.format(name.title(), 'gone...' if name in items else "here!")