"use strict";

console.log("Day 2 — Functions & Arrow Functions");

// Function declarations vs expressions vs arrows
function add(a = 0, b = 0) { return a + b; }
const multiply = function(a = 1, b = 1) { return a * b; };
const divide = (a, b) => {
	if (b === 0) throw new Error("Divide by zero");
	return a / b;
};
console.log(add(2, 3), multiply(2, 3), divide(6, 3));

// Rest params and default params
const sum = (...nums) => nums.reduce((acc, n) => acc + n, 0);
console.log("sum:", sum(1, 2, 3, 4, 5));

// this in arrows vs normal functions
const counter = {
	value: 0,
	inc() { this.value += 1; },
	incDelayed() {
		setTimeout(() => { // arrow keeps lexical this
			this.value += 1;
			console.log("incDelayed value:", this.value);
		}, 10);
	}
};
counter.inc();
counter.incDelayed();
console.log("counter value:", counter.value);


