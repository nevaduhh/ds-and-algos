class Array:
	def __init__(self):
		self.data = {}
		self.length = 0

	def push(self, element):
		self.data[self.length] = element
		self.length += 1
