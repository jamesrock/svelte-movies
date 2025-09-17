import { api } from '$lib/api';

export async function load({ fetch, params }) {
	const { id } = params;
	const data = await fetch(api.getPersonPath(params.id), api.fetch_options);
	const person = await data.json();
	return {
		person
	};
}
