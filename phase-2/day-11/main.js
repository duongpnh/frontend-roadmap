export const ACTIONS = Object.freeze({
	ADD: "add",
	TOGGLE: "toggle",
	DELETE: "delete",
	CLEAR_COMPLETED: "clear-completed",
	SET_FILTER: "set-filter"
});

export const FILTERS = Object.freeze({
	ALL: "all",
	ACTIVE: "active",
	COMPLETED: "completed"
});

export function createTodo(title) {
	return { id: crypto.randomUUID(), title, completed: false };
}

console.log("Day 11 — Planned actions and state:", { ACTIONS, FILTERS });


