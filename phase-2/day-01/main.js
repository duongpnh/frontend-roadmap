"use strict";

console.log("Day 1 — strict mode, let/const, types, operators");

// let/const vs var
let count = 0;
const appName = "Phase2";
count += 1;
console.log({ count, appName });

// Primitive types and typeof
const examples = [42, "str", true, null, undefined, Symbol("s"), 10n];
console.table(examples.map(v => ({ value: String(v), type: typeof v })));

// FizzBuzz with guard clauses
function fizzBuzz(n) {
	if (n <= 0 || !Number.isInteger(n)) return [];
	const result = [];
	for (let i = 1; i <= n; i += 1) {
		const fizz = i % 3 === 0;
		const buzz = i % 5 === 0;
		result.push(fizz && buzz ? "FizzBuzz" : fizz ? "Fizz" : buzz ? "Buzz" : String(i));
	}
	return result;
}
console.log("FizzBuzz(15):", fizzBuzz(15).join(", "));


