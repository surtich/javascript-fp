export function add(...numbers: number[]): number {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	return sum;
}

export function toUpperCase(...words: string[]) {
	return [];
}
