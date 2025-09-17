<script module>
	// module-level logic goes here
	// (you will rarely use this)
</script>

<script>
	// instance-level logic goes here
	import { api, genres } from "$lib/api";
	import Films from "./films.svelte";
	async function getFilms(id) {
		const fetch = await api.getComingSoon();
		return fetch.results;
	};
	const { id } = $props();
	const fetcher = getFilms(id);
</script>

<!-- markup (zero or more items) goes here -->
{#await fetcher}
	<p></p>
{:then films} 
	<Films films={films} name="Coming Soon" link="/coming" />
{:catch error} 
	<p>{error.message}</p>
{/await}

<style>
	/* styles go here */
</style>