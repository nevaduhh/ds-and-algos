class Array {
	constructor() {
		this.data = {};
		this.length = 0;
	}

	push(element) {
		this.data[this.length] = element;
		this.length++;
	}

	pop() {
		const element = this.data[this.length - 1];

		delete this.data[this.length - 1];
		this.length--;

		return element;
	}

	shift() {
		const element = this.data[0];
		const values = Object.values(this.data);

		this.data = values.reduce((newData, currentElement, index) => {
			if (index === 0) {
				return newData;
			}

			newData[index - 1] = currentElement;
			return newData;
		}, {});

		this.length--;

		return element;
	}

	unshift(element) {
		const newData = {};

		this.length++;

		for (let i = 0; i < this.length; i++) {
			if (i === 0) {
				newData[i] = element;
			} else {
				newData[i] = this.data[i - 1]
			}
		}

		this.data = newData;

		return this.length;
	}

	find(callback) {
		const values = Object.values(this.data);

		for (let element of values) {
			if (callback(element)) {
				return element;
			}
		}
	}

	map(callback) {
		const values = Object.values(this.data);
		const mappedData = values.reduce((newData, currentElement, index) => {
			newData[index] = callback(currentElement);

			return newData;
		}, {});

		return mappedData;
	}
}
