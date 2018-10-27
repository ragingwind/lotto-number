// code snippets borrows from https://stackoverflow.com/questions/33468028/lotto-generator-javascript
export default function (draw: number = 6, ballcount: number = 45) {
	const arr = Array(ballcount).fill(0).map((_, i) => i);
	const rand = (from, to) => Math.floor(Math.random() * (to - from + 1)) + from;

	for (let i = 0; i < draw; ++i) {
		const r = rand(i, arr.length - 1);
		[arr[r], arr[i]] = [arr[i], arr[r]];
	}

	return arr.slice(0, draw);
}
