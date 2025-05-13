// bfs

class Node {
	constructor(value) {
		(this.value = value), (this.left = null);
		this.right = null;
	}
}

function bfs(root) {
	if (!root) return;

	const queue = [root];

	while (queue.length > 0) {
		const node = queue.shift(); // saca el primero
		console.log(node.value); // lo procesa

		if (node.left) queue.push(node.left);
		if (node.right) queue.push(node.right);
	}
}

function dfs(root) {
	if (!root) return;

	console.log(root.value); // raíz
	dfs(root.left); // izquierda
	dfs(root.right); // derecha
}

function dfsInOrder(node) {
	if (!node) return;

	dfsInOrder(node.left); // izquierda
	console.log(node.value); // raíz
	dfsInOrder(node.right); // derecha
}

function dfsPostOrder(node) {
	if (!node) return;

	dfsPostOrder(node.left); // izquierda
	dfsPostOrder(node.right); // derecha
	console.log(node.value); // raíz
}

// Crear árbol
const root = new Node("A");
root.left = new Node("B");
root.right = new Node("C");
root.left.left = new Node("D");
root.left.right = new Node("E");
root.right.right = new Node("F");

// BFS
console.log("BFS:");
bfs(root); // A, B, C, D, E, F

// DFS
console.log("DFS (Preorden):");
dfs(root); // A, B, D, E, C, F

console.log("DFS (Inorden):");
dfsInOrder(root); // D, B, E, A, C, F

console.log("DFS (Postorden):");
dfsPostOrder(root); // D, E, B, F, C, A
