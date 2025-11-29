"use strict";

console.log("Day 8 — Promises: delay, chaining, all/any/race");

const delay = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

delay(200, "A")
	.then(v => (console.log("then1:", v), v + "!"))
	.then(v => delay(100, v + "?"))
	.then(v => console.log("then2:", v))
	.catch(err => console.error("caught:", err))
	.finally(() => console.log("finally: chain complete"));

Promise.all([delay(100, 1), delay(200, 2), delay(50, 3)]).then(values => {
	console.log("Promise.all:", values);
});

Promise.race([delay(120, "first"), delay(200, "second")]).then(v => {
	console.log("Promise.race:", v);
});

Promise.any([Promise.reject("x"), delay(60, "ok"), delay(30, "fast")]).then(v => {
	console.log("Promise.any:", v);
});


