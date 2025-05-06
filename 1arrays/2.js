// Agregar un contador
// llenar un array con aquellos datos que tienen solo 1 valor en el array
// utilizar el contador para verificar si tiene más de 1 valor

function getFirstUniqueElements(arr) {
	count = {};
	for (const num of arr) {
		count[num] = (count[num] || 0) + 1;
	}

	result = [];
	for (const num of arr) {
		if (count[num] === 1) {
			result.push(num);
		}
	}

	return result;
}

console.log(getFirstUniqueElements([4, 5, 1, 2, 0, 4]));
console.log(getFirstUniqueElements([1, 2, 2, 1, 3]));
console.log(getFirstUniqueElements([7, 7, 7]));
console.log(getFirstUniqueElements([]));
