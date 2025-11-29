export function debounce(fn, waitMs = 300) {
	let t = null;
	return function debounced(...args) {
		clearTimeout(t);
		t = setTimeout(() => fn.apply(this, args), waitMs);
	};
}

export function cToF(c) {
	return (c * 9) / 5 + 32;
}


