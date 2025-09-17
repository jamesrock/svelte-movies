import { api } from '$lib/api';

export async function load({ fetch, params }) {
	const { id } = params;
	const data = await fetch(api.getFilmPath(params.id), api.fetch_options);
	const film = await data.json();
	return {
		film
	};
}

