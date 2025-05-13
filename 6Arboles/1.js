// Definición del nodo del árbol
class TreeNode {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

// Función para calcular la altura
function getHeight(root) {
	if (root === null) {
		return 0;
	}

	const leftHeight = getHeight(root.left);
	const rightHeight = getHeight(root.right);

	return 1 + Math.max(leftHeight, rightHeight);
}

// 🌳 Creamos este árbol:
//       1
//      / \
//     2   3
//    /
//   4

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);

console.log(getHeight(root)); // Output: 3

/**
PASO_1
getHeight(4)
↓
leftHeight = getHeight(null) = 0
rightHeight = getHeight(null) = 0
return 1 + Math.max(0, 0) = 1
 
PASO_2
getHeight(2)
↓
leftHeight = getHeight(4) = 1
rightHeight = getHeight(null) = 0
return 1 + Math.max(1, 0) = 2

PASO_3
getHeight(3)
↓
leftHeight = getHeight(null) = 0
rightHeight = getHeight(null) = 0
return 1 + Math.max(0, 0) = 1

PASO_FINAL
getHeight(1)
↓
leftHeight = getHeight(2) = 2
rightHeight = getHeight(3) = 1
return 1 + Math.max(2, 1) = 3
**/
