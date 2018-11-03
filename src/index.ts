// code snippets borrows from https://stackoverflow.com/questions/33468028/lotto-generator-javascript
export function generateNumber(draw: number = 6, ballcount: number = 45): Array<number> {
	const arr = Array(ballcount).fill(0).map((_, i) => i + 1);
	const rand = (from, to) => Math.floor(Math.random() * (to - from + 1)) + from;

	for (let i = 0; i < draw; ++i) {
		const r = rand(i, arr.length - 1);
		[arr[r], arr[i]] = [arr[i], arr[r]];
	}

	return arr.slice(0, draw).sort((a, b) => a - b);
}

export function normalizeNumber (value: any, max: number, init: number): number {
	const number = Number.parseInt(value || init);
	return (isNaN(number) || number <= 0 || number > max) ? init : number;
}
