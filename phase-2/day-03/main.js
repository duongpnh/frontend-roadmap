"use strict";

console.log("Day 3 — Arrays & Objects, Destructuring, Spread/Rest");

// Destructuring & defaults
const user = { id: 1, name: "Ada", role: "admin" };
const { id, name, email = null } = user;
console.log({ id, name, email });

// Spread to clone and merge
const u2 = { ...user, role: "editor" };
console.log("merged user:", u2);

// Rest pattern to omit fields
const { role, ...userWithoutRole } = u2;
console.log("omit role:", userWithoutRole);

// Utilities: pick and omit
const pick = (obj, keys) => keys.reduce((acc, k) => (k in obj ? (acc[k] = obj[k], acc) : acc), {});
const omit = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
console.log("pick:", pick(user, ["id", "name"]));
console.log("omit:", omit(user, ["role"]));

// Array cloning and immutably adding/removing
const arr = [1, 2, 3];
const arr2 = [...arr, 4];
const arr3 = arr2.filter(n => n !== 2);
console.log({ arr, arr2, arr3 });


