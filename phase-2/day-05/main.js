import { debounce } from "../utils/misc.js";
import { qs } from "../utils/dom.js";

console.log("Day 5 — ES Modules (imports/exports)");

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Type to see debounced log";
document.body.append(input);

const onType = debounce((value) => {
	console.log("Debounced value:", value);
}, 400);

input.addEventListener("input", (e) => onType(e.target.value));

console.log("qs('input') === input:", qs("input") === input);


