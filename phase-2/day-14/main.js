import { qs } from "../utils/dom.js";
import { jsonFetch } from "../utils/net.js";

console.log("Day 14 — Weather App using Open-Meteo APIs");

const input = qs("#city");
const btn = qs("#search");
const result = qs("#result");

let controller = null;

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

async function search() {
	try {
		if (controller) controller.abort();
		controller = new AbortController();
		result.textContent = "Loading...";
		const { name, lat, lon, country } = await geocodeCity(input.value.trim());
		const weather = await fetchForecast(lat, lon);
		result.innerHTML = `
			<p><strong>${name}, ${country}</strong></p>
			<p>Temperature: ${weather.temperature} °C</p>
			<p>Wind: ${weather.windspeed} km/h</p>
			<p>Time: ${weather.time}</p>
		`;
	} catch (err) {
		result.textContent = `Error: ${err.message || err}`;
	} finally {
		controller = null;
	}
}

btn.addEventListener("click", search);


