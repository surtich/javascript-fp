export function add(...numbers: number[]): number {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	return sum;
}

export function toUpperCase(words: string[]) {
	const upperWords: string[] = [];
	for (let i = 0; i < words.length; i++) {
		upperWords[i] = words[i].toUpperCase();
	}
	return upperWords;
}

// inc([1,4,5]) -> [2,5,6]
