import test from 'ava';
import {generateNumber, normalizeNumber} from '.';

function isSorted(current: number, index: number, list: number[]) {
	const nextEl: number | undefined = list[index + 1];
	return typeof nextEl === "undefined" || current < nextEl;
}

test('generateNumber', async t => {
	const defaultLength = generateNumber();
	const longerNumbers = generateNumber(10);
	const lonegerNumbersWithLimit = generateNumber(10, 45);

	t.true(defaultLength.every(isSorted));
	t.is(defaultLength.length, 6);

	t.true(longerNumbers.every(isSorted));
	t.is(longerNumbers.length, 10);

	t.true(lonegerNumbersWithLimit.every(isSorted));
	t.is(lonegerNumbersWithLimit.length, 10);
});

test('normalizeNumber', async t => {
	t.is(normalizeNumber(NaN, 50, 6), 6);
	t.is(normalizeNumber('', 50, 7), 7);
	t.is(normalizeNumber(undefined, 50, 8), 8);
	t.is(normalizeNumber(null, 50, 9), 9);
	t.is(normalizeNumber('number', 50, 10), 10);
});
