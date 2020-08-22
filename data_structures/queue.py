class Queue():
	def __init__(self):
		self.data = {};
		self.length = 0;

	def queue(self, element):
		self.data[self.length] = element
		self.length += 1

	def dequeue(self):
		new_data = {}
		first_element = self.data[0]
		del self.data[0]

		for key, value in self.data.items():
			new_key = int(key) - 1
			new_data[new_key] = value

		self.data = new_data
		self.length -= 1

		return first_element
