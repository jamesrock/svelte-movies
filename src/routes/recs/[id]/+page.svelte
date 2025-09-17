<script>
	import FilmGrid from "$lib/components/film-grid.svelte";
	import { api } from "$lib/api";
	const { data } = $props();
	const { id } = data;
	async function getFilm(id) {
		const fetch = await api.getFilm(id);
		return fetch;
	};
	const fetcher = getFilm(id);
</script>

<main>
	{#await fetcher}
		<p></p>
	{:then film}
		<FilmGrid id={id} type="recs" name="Recommendations" sub={`based on ${film.title}`} />
	{:catch error} 
		<p>{error.message}</p>
	{/await}
</main>