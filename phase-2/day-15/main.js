import { qs } from "../utils/dom.js";
import { jsonFetch } from "../utils/net.js";
import { debounce, cToF } from "../utils/misc.js";

console.log("Day 15 — Weather Polish: debounced search + °C/°F toggle");

const input = qs("#city");
const unit = qs("#unit");
const result = qs("#result");

async function geocodeCity(name) {
	const url = new URL("https://geocoding-api.open-meteo.com/v1/search");
	url.searchParams.set("name", name);
	url.searchParams.set("count", "1");
	const data = await jsonFetch(url.toString(), {}, { timeoutMs: 8000 });
	if (!data?.results?.length) throw new Error("City not found");
	const place = data.results[0];
	return { name: place.name, lat: place.latitude, lon: place.longitude, country: place.country_code };
}

async function fetchForecast(lat, lon) {
	const url = new URL("https://api.open-meteo.com/v1/forecast");
	url.searchParams.set("latitude", String(lat));
	url.searchParams.set("longitude", String(lon));
	url.searchParams.set("current_weather", "true");
	const data = await jsonFetch(url.toString(), {}, { timeoutMs: 8000 });
	return data.current_weather;
}

async function runSearch() {
	const q = input.value.trim();
	if (!q) { result.textContent = ""; return; }
	result.textContent = "Loading...";
	try {
		const { name, lat, lon, country } = await geocodeCity(q);
		const weather = await fetchForecast(lat, lon);
		let temp = weather.temperature;
		let suffix = "°C";
		if (unit.checked) {
			temp = Math.round(cToF(temp) * 10) / 10;
			suffix = "°F";
		}
		result.innerHTML = `
			<p><strong>${name}, ${country}</strong></p>
			<p>Temperature: ${temp} ${suffix}</p>
			<p>Wind: ${weather.windspeed} km/h</p>
			<p>Time: ${weather.time}</p>
		`;
	} catch (err) {
		result.textContent = `Error: ${err.message || err}`;
	}
}

const onInput = debounce(runSearch, 400);
input.addEventListener("input", onInput);
unit.addEventListener("change", runSearch);


