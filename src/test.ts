import test from 'ava';
import {generateNumber, normalizeNumber} from '.';

function isSorted(current: number, index: number, list: number[]) {
	const next: number | undefined = list[index + 1];
	return typeof next === "undefined" || current < next;
}

test('Generated numbers should be sorted in ascending order', async t => {
	t.true(generateNumber().every(isSorted));
	t.true(generateNumber(10).every(isSorted));
	t.true(generateNumber(10, 45).every(isSorted));
});

test('Generated numbers should have correct length by the first argument', async t => {
	t.is(generateNumber().length, 6);
	t.is(generateNumber(10).length, 10);
	t.is(generateNumber(10, 45).length, 10);
});

test('normalizeNumber', async t => {
	t.is(normalizeNumber(NaN, 50, 6), 6);
	t.is(normalizeNumber('', 50, 7), 7);
	t.is(normalizeNumber(undefined, 50, 8), 8);
	t.is(normalizeNumber(null, 50, 9), 9);
	t.is(normalizeNumber('number', 50, 10), 10);
});
