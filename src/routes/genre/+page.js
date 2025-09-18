import { api } from '$lib/api';

export async function load({ fetch, params }) {
	const data = await fetch(api.getGenresPath(), api.fetch_options);
	const genres = await data.json();
	return {
		genres: genres.genres
	};
}
