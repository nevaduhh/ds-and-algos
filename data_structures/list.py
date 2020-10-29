class List:
  def __init__(self):
    self.data = {}
    self.length = 0

  def append(self, element):
    self.data[self.length] = element
    self.length += 1

  def pop(self):
    self.length -= 1
    last_element = self.data[self.length]
    del self.data[self.length]

    return last_element

  def insert(self, index, element):
    if index > self.length:
      self.data[self.length] = element
      self.length += 1
    else:
      element_at_index = self.data[index]
      self.data[index] = element

  def clear(self):
    self.data = {}
    self.length = 0

  def copy(self):
    return self.data

  def count(self, element):
    count = 0

    for value in self.data.values():
      if value == element:
        count += 1

    return count

  def index(self, element):
    for key, value in self.data.items():
      if value == element:
        return key

    raise ValueError

  def remove(self, element):
    for key, value in self.data.items():
      if value == element:
        del self.data[key]
        self.length -= 1

    raise ValueError

  def reverse(self):
    reversed_data = {}
    original_length = self.length

    for key, value in self.data.items():
      original_length -= 1
      reversed_data[original_length] = value

    self.data = reversed_data
