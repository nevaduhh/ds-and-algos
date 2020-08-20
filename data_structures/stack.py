class Stack():
	def __init__(self):
		self.data = {}
		self.length = 0

	def push(self, element):
		self.data[self.length] = element
		self.length += 1

	def pop(self):
		self.length -= 1
		last_element = self.data[self.length]
		del self.data[self.length]

		return last_element
