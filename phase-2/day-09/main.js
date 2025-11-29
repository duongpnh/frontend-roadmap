"use strict";

console.log("Day 9 — async/await with try/catch/finally, concurrent awaits");

const delay = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

async function run() {
	try {
		const a = await delay(100, "A");
		const b = await delay(50, a + "B");
		console.log({ a, b });
		const [x, y, z] = await Promise.all([delay(60, 1), delay(30, 2), delay(90, 3)]);
		console.log("concurrent:", x, y, z);
	} catch (err) {
		console.error("error:", err);
	} finally {
		console.log("done");
	}
}
run();


