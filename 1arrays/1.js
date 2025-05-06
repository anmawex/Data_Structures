function findSecondMin(arr) {
	if (arr.length < 2) return null;

	let min1 = Infinity;
	let min2 = Infinity;

	for (const num of arr) {
		if (num < min1) {
			min2 = min1;
			min1 = num;
		} else if (num > min1 && num < min2) {
			min2 = num;
		}
	}

	return min2 === Infinity ? null : min2;
}

console.log(findSecondMin([4, 2, 1, 5, 3]));
console.log(findSecondMin([1, 1, 2]));
console.log(findSecondMin([1, 1, 1]));
console.log(findSecondMin([2]));

// 1. recorrer el array con una variable auxiliar que almacenará los valores del array<
// 2. seleccionar el primer elemento como número mínimo #1<
// 3. el número mínimo #2 pasa a ser el número mínimo #1<
// 4. si la variable auxiliar es mayor que #1 y menor que #2 está entre ellos<?
// 5. si no hay un segundo número menor, es null<
