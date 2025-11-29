import { jsonFetch } from "../utils/net.js";
import { qs } from "../utils/dom.js";

console.log("Day 10 — Fetch API with abort and errors");

const btn = qs("#load");
const out = qs("#out");

let controller = null;

btn.addEventListener("click", async () => {
	try {
		if (controller) controller.abort();
		controller = new AbortController();
		out.textContent = "Loading...";
		const data = await jsonFetch("https://api.github.com/repos/octocat/hello-world", { signal: controller.signal }, { timeoutMs: 5000 });
		out.textContent = JSON.stringify({ name: data.name, stars: data.stargazers_count, forks: data.forks }, null, 2);
	} catch (err) {
		out.textContent = `Error: ${err.message || err}`;
	} finally {
		controller = null;
	}
});


