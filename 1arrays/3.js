// recorrer ambos arrays comparando de ambos los valores
// el menor irá a un nuevo array para iniciar un nuevo orden
// si sobra en alguno de los array, se agrega de último
function mergeSortedArrays(arr1, arr2) {
	merged = [];
	let i = 0;
	let j = 0;

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			merged.push(arr1[i]);
			i++;
		} else {
			merged.push(arr2[j]);
			j++;
		}
	}

	while (i < arr1.length) {
		merged.push(arr1[i]);
		i++;
	}

	while (j < arr2.length) {
		merged.push(arr2[j]);
		j++;
	}

	return merged;
}
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
console.log(mergeSortedArrays([], [2, 4, 6]));
console.log(mergeSortedArrays([1, 2, 3], []));
console.log(mergeSortedArrays([1, 1, 1], [1, 1]));
console.log(mergeSortedArrays([1, 4, 7], [2, 6, 8, 10]));
