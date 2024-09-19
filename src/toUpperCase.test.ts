import { expect, test } from 'vitest';
import { toUpperCase } from './functions.js';

test('toUpperCase sin argumentos deberia de devolver []', () => {
	expect(toUpperCase([])).toEqual([]);
});

test('toUpperCase de "Pepe"', () => {
	expect(toUpperCase(['Pepe'])).toEqual(['PEPE']);
});

test('toUpperCase de "Pepe", "Juan', () => {
	expect(toUpperCase(['Pepe', 'Juan'])).toEqual(['PEPE', 'JUAN']);
});
