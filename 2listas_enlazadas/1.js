// Estructura básica de la lista enlazada
// utilizar los 3 punteros
// recorrer la lista invirtiendo los valores de atrás hacia adelante

class ListNode {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

function reverseList(head) {
	let prev = null; // 1. Empezamos sin nodo anterior
	let current = head; // 2. Empezamos desde la cabeza de la lista

	// 3. Repetimos mientras queden nodos
	while (current !== null) {
		let next = current.next; // 4. Guardamos el siguiente nodo
		current.next = prev; // 5. Invertimos la dirección
		prev = current; // 6. Avanzamos el puntero "prev"
		current = next; // 7. Avanzamos el puntero "current"
	}

	return prev; // 8. Al final, prev es la nueva cabeza
}

// De array a lista
function arrayToList(arr) {
	let head = null;
	let current = null;

	for (let val of arr) {
		const node = new ListNode(val);
		if (!head) {
			head = node;
			current = node;
		} else {
			current.next = node;
			current = node;
		}
	}
	return head;
}

// De lista a array (para imprimir)
function listToArray(head) {
	const result = [];
	let current = head;

	while (current) {
		result.push(current.val);
		current = current.next;
	}

	return result;
}

const head = arrayToList([1, 2, 3, 4, 5]);
// console.log(head);
const reversed = reverseList(head);
console.log(listToArray(reversed)); // [5, 4, 3, 2, 1]

/**
next = current.next // guarda el 2
current.next = prev // 1 apunta a null
prev = current      // prev ahora es 1
current = next      // current ahora es 2

1 → null    ←  [invertido]
2 → 3 → null
-------------------------------------------

next = current.next // guarda el 3
current.next = prev // 2 apunta a 1
prev = current      // prev ahora es 2
current = next      // current ahora es 3

2 → 1 → null
3 → null
-------------------------------------------

next = current.next // guarda null
current.next = prev // 3 apunta a 2
prev = current      // prev ahora es 3
current = next      // current ahora es null (fin)

3 → 2 → 1 → null
*/
