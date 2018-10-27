#!/usr/bin/env node

import * as meow from 'meow';
import lotto from '.';

const cli = meow(`
	Usage
		$ lotto-number [draw-count, default is 6] [ball-count, default is 45]

	Examples
		$ lotto-number
		1 2 3 4 5 6
		$ lotto-number 7
		1 2 3 4 5 6 7
		$ lotto-number 7 50
		1 2 3 4 5 6 7
`)

const normalizeNumber = (value: any, max: number, init: number) => {
	const number = Number.parseInt(value || init);
	return (number == NaN || number <= 0 || number > max) ? init : number;
}

const draw: number = normalizeNumber(cli.input[0], 10, 6);
const ballcount: number = normalizeNumber(cli.input[1], 50, 45);

console.log(lotto(draw, ballcount).join(', '));
