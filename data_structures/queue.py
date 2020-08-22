class Queue():
	def __init__(self):
		self.data = {};
		self.length = 0;

	def queue(self, element):
		self.data[self.length] = element
		self.length += 1

