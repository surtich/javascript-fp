import { expect, test } from 'vitest';
import { add } from './functions.js';

test('add sin argumentos deberia de devolver 0', () => {
	expect(add()).toBe(0);
});

test('add con un solo argumento deberia devolver el valor de ese argumento', () => {
	expect(add(5)).toBe(5);
});

test('add con varios argumentos deberia de devolver la suma de esos argumentos', () => {
	expect(add(1, 2, 3, 4)).toBe(10);
});
