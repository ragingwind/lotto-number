import test from 'ava'
import {generateNumber, normalizeNumber} from '.';

test(async t => {
	t.is(generateNumber().length, 6);
	t.is(generateNumber(10).length, 10);
	t.is(generateNumber(10, 45).length, 10);
});

test(async t => {
	t.is(normalizeNumber(NaN, 50, 6), 6);
	t.is(normalizeNumber('', 50, 7), 7);
	t.is(normalizeNumber(undefined, 50, 8), 8);
	t.is(normalizeNumber(null, 50, 9), 9);
	t.is(normalizeNumber('number', 50, 10), 10);
});
