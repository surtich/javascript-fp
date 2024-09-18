function add(...numbers: number[]): number {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	return sum;
}

const x = [1, 2, 6];
const y = [...x];

console.log(x, y);

console.log(add(1, 5, 6));
