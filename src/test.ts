import test from 'ava'
import {generateNumber, normalizeNumber} from '.';

function isSortedList(list: number[]) {
  const recursiveSortCheck = (head: number, rest: number[]) => {
    if (rest.length === 0) return true;
    if (head > rest[0]) return false;

    const [nextHead, ...nextRest] = rest;
    return recursiveSortCheck(nextHead, nextRest);
  }

  const [head, ...rest] = list;
  return recursiveSortCheck(head, rest);
}

test('isSortedList', async t => {
  const sortedList = [1, 2, 3, 4, 5, 6]
  const notSortedList = [7, 10, 2, 58, 1, 40]

  t.is(isSortedList(sortedList), true);
  t.is(isSortedList(notSortedList), false);
})


test('generateNumber', async t => {
  const defaultLength = generateNumber();
  const longerNumbers = generateNumber(10);
  const lonegerNumbersWithLimit = generateNumber(10, 45);

  t.is(isSortedList(defaultLength), true);
  t.is(isSortedList(longerNumbers), true);
  t.is(isSortedList(lonegerNumbersWithLimit), true);

	t.is(defaultLength.length, 6);
	t.is(longerNumbers.length, 10);
	t.is(lonegerNumbersWithLimit.length, 10);
});

test('normalizeNumber', async t => {
	t.is(normalizeNumber(NaN, 50, 6), 6);
	t.is(normalizeNumber('', 50, 7), 7);
	t.is(normalizeNumber(undefined, 50, 8), 8);
	t.is(normalizeNumber(null, 50, 9), 9);
	t.is(normalizeNumber('number', 50, 10), 10);
});
