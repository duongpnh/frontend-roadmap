import { qs, createElement } from "../utils/dom.js";
import { createTodo } from "../day-11/main.js";

console.log("Day 12 — Todo Build");

const form = qs("#todo-form");
const input = qs("#todo-input");
const list = qs("#todo-list");

/** @type {{ id: string, title: string, completed: boolean }[]} */
let todos = [];

function render() {
	list.innerHTML = "";
	for (const t of todos) {
		const li = createElement("li", { "data-id": t.id, class: t.completed ? "done" : "" }, [
			createElement("input", { type: "checkbox", class: "toggle", checked: t.completed, "aria-label": "Toggle completed" }),
			" ",
			createElement("span", { class: "title" }, t.title),
			" ",
			createElement("button", { type: "button", class: "remove", "aria-label": "Delete todo" }, "Delete"),
		]);
		list.append(li);
	}
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const title = input.value.trim();
	if (!title) return;
	todos.push(createTodo(title));
	input.value = "";
	render();
});

list.addEventListener("click", (e) => {
	const btn = e.target.closest("button.remove");
	if (!btn) return;
	const id = btn.closest("li").dataset.id;
	todos = todos.filter(t => t.id !== id);
	render();
});

list.addEventListener("change", (e) => {
	const box = e.target.closest("input.toggle");
	if (!box) return;
	const id = box.closest("li").dataset.id;
	const t = todos.find(t => t.id === id);
	if (t) t.completed = !!box.checked;
	render();
});

render();


