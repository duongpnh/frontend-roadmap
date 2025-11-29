export async function jsonFetch(input, init = {}, { timeoutMs } = {}) {
	const controller = new AbortController();
	const id = timeoutMs ? setTimeout(() => controller.abort(), timeoutMs) : null;
	try {
		const res = await fetch(input, { ...init, signal: controller.signal, headers: { 'Accept': 'application/json', ...(init.headers || {}) } });
		if (!res.ok) {
			const text = await res.text().catch(() => '');
			throw new Error(`HTTP ${res.status} ${res.statusText} — ${text.slice(0, 120)}`);
		}
		return await res.json();
	} finally {
		if (id) clearTimeout(id);
	}
}


