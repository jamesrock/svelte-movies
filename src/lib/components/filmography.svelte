<script>
	import { api, genres, dedupe } from "$lib/api";
	import { Films } from "$lib/components";
	async function getFilms(id) {
		const fetch = await api.getFilmography(id);
		return fetch;
	};
	const { id } = $props();
	const fetcher = getFilms(id);
</script>

{#await fetcher}
	<p></p>
{:then films}
	<div class="cast-and-crew">
		<Films films={dedupe(films.cast, 'cast')} name="Cast" credits="cast" />
		<Films films={dedupe(films.crew, 'crew')} name="Crew" credits="crew" />
	</div>
{:catch error} 
	<p>{error.message}</p>
{/await}
