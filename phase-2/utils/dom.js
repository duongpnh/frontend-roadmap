export function qs(selector, scope = document) {
	return scope.querySelector(selector);
}

export function qsa(selector, scope = document) {
	return Array.from(scope.querySelectorAll(selector));
}

export function createElement(tagName, props = {}, children = []) {
	const el = document.createElement(tagName);
	for (const [key, value] of Object.entries(props)) {
		if (key === 'class') {
			el.className = value;
		} else if (key in el) {
			el[key] = value;
		} else {
			el.setAttribute(key, String(value));
		}
	}
	for (const child of ([]).concat(children)) {
		if (child == null) continue;
		el.append(child.nodeType ? child : document.createTextNode(String(child)));
	}
	return el;
}


