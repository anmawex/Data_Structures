function findSymmetricPairs(pairs) {
	const seen = new Set();
	const result = [];

	for (let [a, b] of pairs) {
		const key = `${a},${b}`;
		const reverseKey = `${b},${a}`;

		if (seen.has(reverseKey)) {
			result.push([a, b]);
		} else {
			seen.add(key);
		}
	}

	return result;
}

const input = [
	[1, 2],
	[3, 4],
	[5, 2],
	[2, 5],
	[4, 3],
	[2, 1],
];

console.log(findSymmetricPairs(input));
// Output esperado: [ [2, 5], [4, 3], [2, 1] ]
