// organizar los positivos y negativos en un array cada grupo
// concatenar los arrays, primero los positivos y luego los negativos
function reorderBySign(arr) {
	let positives = [];
	let negatives = [];

	for (const num of arr) {
		if (num > 0) {
			positives.push(num);
		} else {
			negatives.push(num);
		}
	}

	return [...positives, ...negatives];
}
console.log(reorderBySign([1, -2, 3, -4, 5, -6])); // [1, 3, 5, -2, -4, -6]
console.log(reorderBySign([-1, -2, -3, 4])); // [4, -1, -2, -3]
console.log(reorderBySign([0, -1, 2, -3])); // [0, 2, -1, -3]
console.log(reorderBySign([]));
