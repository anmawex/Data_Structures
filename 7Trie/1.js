class TrieNode {
	constructor() {
		this.children = {}; // Claves: letras, Valores: TrieNode
		this.isEndOfWord = false; // Marca si es fin de palabra
	}
}

class Trie {
	constructor() {
		this.root = new TrieNode();
	}

	// Insertar palabra en el Trie
	insert(word) {
		let node = this.root; // 1. Empieza desde la raíz
		// 2. Recorre cada letra: 'c', 'a', 't'
		for (let char of word) {
			// 3. Si no existe ese nodo hijo...
			if (!node.children[char]) {
				node.children[char] = new TrieNode(); // ...lo crea
			}
			node = node.children[char]; // 4. Avanza al siguiente nodo
		}
		node.isEndOfWord = true; // 5. Marca que ahí termina una palabra
	}

	// Contar palabras en el Trie (función recursiva)
	countWords(node = this.root) {
		let count = 0;

		// Paso 1: ¿Es fin de palabra?
		if (node.isEndOfWord) {
			count += 1;
		}

		// Paso 2: Recorremos los hijos
		for (let child in node.children) {
			count += this.countWords(node.children[child]);
		}

		return count;
	}
}

const trie = new Trie();
trie.insert("car");
trie.insert("care");
trie.insert("cat");
trie.insert("dog");
console.log(trie.countWords()); // Output: 4

/**
 * VISUALIZACIÓN *
1. (root)
2. (root)
    └─ c
3. (root)
    └─ c
       └─ a
4. (root)
    └─ c
       └─ a
          └─ t
5. (root)
    └─ c
       └─ a
          └─ t ✔️
*/
