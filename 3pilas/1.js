function evalRPN(tokens) {
	const stack = [];
	for (let token of tokens) {
		// Si es un número, lo convertimos y lo metemos en la pila
		if (!isNaN(token)) {
			stack.push(Number(token));
			// Si es un operador, sacamos los dos últimos números
		} else {
			const b = stack.pop(); // Segundo operando
			const a = stack.pop(); // Primer operando

			let result;

			if (token === "+") result = a + b;
			else if (token === "-") result = a - b;
			else if (token === "*") result = a * b;
			else if (token === "/") result = Math.trunc(a / b); // División entera

			stack.push(result);
		}
	}

	return stack[0];
}

const expression = ["2", "3", "+", "4", "*"];
const expression2 = ["4", "13", "5", "/", "+"];

console.log(evalRPN(expression)); // Output: 20
console.log(evalRPN(expression2)); // Output: 20
