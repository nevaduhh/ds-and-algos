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

