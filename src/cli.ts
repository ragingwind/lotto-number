#!/usr/bin/env node

import {generateNumber, normalizeNumber} from '.';

const opts = process.argv.slice(2);
const draw: number = normalizeNumber(opts[0], 10, 6);
const ballcount: number = normalizeNumber(opts[1], 50, 45);

console.log(generateNumber(draw, ballcount).join(', '));
