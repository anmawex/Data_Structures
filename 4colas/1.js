class MyStack {
	constructor() {
		this.queue = [];
	}

	// Agrega un elemento como si fuera push()
	push(x) {
		this.queue.push(x);

		// Rotar todos menos el último al final
		let size = this.queue.length;
		while (size > 1) {
			this.queue.push(this.queue.shift());
			size--;
		}
	}

	// Quita el último elemento (el primero de la cola)
	pop() {
		return this.queue.shift();
	}

	// Devuelve el elemento del tope sin quitarlo
	top() {
		return this.queue[0];
	}

	// Verifica si la pila está vacía
	empty() {
		return this.queue.length === 0;
	}
}

const stack = new MyStack();
stack.push(1);
stack.push(2);
console.log(stack.top()); // 2
console.log(stack.pop()); // 2
console.log(stack.empty()); // false
console.log(stack.pop()); // 1
console.log(stack.empty()); // true
