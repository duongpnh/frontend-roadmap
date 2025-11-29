import { qs, createElement } from "../utils/dom.js";
import { getJson, setJson } from "../utils/storage.js";
import { ACTIONS, FILTERS, createTodo } from "../day-11/main.js";

console.log("Day 13 — Todo Polish with filters and localStorage");

const STORAGE_KEY = "phase2.todos";

const form = qs("#todo-form");
const input = qs("#todo-input");
const list = qs("#todo-list");
const filtersEl = qs("#filters");
const clearBtn = qs("#clear-completed");

/** @type {{ id: string, title: string, completed: boolean }[]} */
let todos = getJson(STORAGE_KEY, []);
/** @type {'all'|'active'|'completed'} */
let currentFilter = FILTERS.ALL;

function save() {
	setJson(STORAGE_KEY, todos);
}

function applyFilter(items) {
	switch (currentFilter) {
		case FILTERS.ACTIVE: return items.filter(t => !t.completed);
		case FILTERS.COMPLETED: return items.filter(t => t.completed);
		default: return items;
	}
}

function render() {
	list.innerHTML = "";
	for (const t of applyFilter(todos)) {
		const li = createElement("li", { "data-id": t.id, class: t.completed ? "done" : "" }, [
			createElement("input", { type: "checkbox", class: "toggle", checked: t.completed, "aria-label": "Toggle completed" }),
			" ",
			createElement("span", { class: "title" }, t.title),
			" ",
			createElement("button", { type: "button", class: "remove", "aria-label": "Delete todo" }, "Delete"),
		]);
		list.append(li);
	}
	// Update active filter button
	Array.from(filtersEl.querySelectorAll("button")).forEach(b => {
		b.classList.toggle("is-active", b.dataset.filter === currentFilter);
	});
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const title = input.value.trim();
	if (!title) return;
	todos.push(createTodo(title));
	input.value = "";
	save();
	render();
});

list.addEventListener("click", (e) => {
	const btn = e.target.closest("button.remove");
	if (!btn) return;
	const id = btn.closest("li").dataset.id;
	todos = todos.filter(t => t.id !== id);
	save();
	render();
});

list.addEventListener("change", (e) => {
	const box = e.target.closest("input.toggle");
	if (!box) return;
	const id = box.closest("li").dataset.id;
	const t = todos.find(t => t.id === id);
	if (t) t.completed = !!box.checked;
	save();
	render();
});

filtersEl.addEventListener("click", (e) => {
	const btn = e.target.closest("button[data-filter]");
	if (!btn) return;
	currentFilter = btn.dataset.filter;
	render();
});

clearBtn.addEventListener("click", () => {
	todos = todos.filter(t => !t.completed);
	save();
	render();
});

render();


