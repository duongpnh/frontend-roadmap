import { qs, createElement } from "../utils/dom.js";

console.log("Day 6 — DOM selection, classList, events with delegation");

const form = qs("#todo-form");
const input = qs("#todo-input");
const list = qs("#todo-list");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const text = input.value.trim();
	if (!text) return;
	const li = createElement("li", {}, [
		createElement("button", { type: "button", class: "toggle", "aria-pressed": "false" }, "○"),
		" ",
		createElement("span", { class: "text" }, text),
		" ",
		createElement("button", { type: "button", class: "remove" }, "Delete"),
	]);
	list.append(li);
	input.value = "";
});

list.addEventListener("click", (e) => {
	const btn = e.target.closest("button");
	if (!btn) return;
	const li = btn.closest("li");
	if (btn.classList.contains("toggle")) {
		const pressed = btn.getAttribute("aria-pressed") === "true";
		btn.setAttribute("aria-pressed", String(!pressed));
		btn.textContent = pressed ? "○" : "✓";
		li.classList.toggle("done", !pressed);
	} else if (btn.classList.contains("remove")) {
		li.remove();
	}
});


