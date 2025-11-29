"use strict";

console.log("Day 4 — map, filter, reduce, some/every, chaining");

const users = [
	{ id: 1, name: "Ada", active: true, tags: ["admin", "founder"] },
	{ id: 2, name: "Grace", active: false, tags: ["editor"] },
	{ id: 3, name: "Linus", active: true, tags: ["engineer"] },
];

// groupBy active
const groupBy = (arr, key) => arr.reduce((acc, item) => {
	const k = typeof key === "function" ? key(item) : item[key];
	(acc[k] ||= []).push(item);
	return acc;
}, {});

console.log("groupBy active:", groupBy(users, "active"));

// unique tags
const unique = arr => [...new Set(arr)];
console.log("unique tags:", unique(users.flatMap(u => u.tags)));

// pipeline
const activeNames = users.filter(u => u.active).map(u => u.name).sort();
console.log("activeNames:", activeNames);


