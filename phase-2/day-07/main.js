import { qs } from "../utils/dom.js";

console.log("Day 7 — DOM templating and DocumentFragment");

const btn = qs("#add-10");
const list = qs("#list");
const tpl = qs("#row-tpl");

btn.addEventListener("click", () => {
	const frag = document.createDocumentFragment();
	for (let i = 1; i <= 10; i++) {
		const clone = tpl.content.cloneNode(true);
		clone.querySelector(".label").textContent = `Item ${list.children.length + i}`;
		frag.append(clone);
	}
	list.append(frag);
});

list.addEventListener("click", (e) => {
	const btn = e.target.closest(".remove");
	if (btn) btn.closest("li").remove();
});


