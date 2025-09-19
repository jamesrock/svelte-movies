<script>
	import { api, genres } from "$lib/api";
	import { Films } from "$lib/components";
	async function getFilms(id) {
		const fetch = await api.getComingSoon();
		return fetch.results;
	};
	const { id } = $props();
	const fetcher = getFilms(id);
</script>

{#await fetcher}
	<p></p>
{:then films} 
	<Films films={films} name="Coming Soon" link="/coming" />
{:catch error} 
	<p>{error.message}</p>
{/await}
