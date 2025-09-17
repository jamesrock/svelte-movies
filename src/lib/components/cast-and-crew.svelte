<script module>
	// module-level logic goes here
	// (you will rarely use this)
</script>

<script>
	// instance-level logic goes here
	import { api, genres, dedupe, sortByPriority } from "$lib/api";
	import People from "./people.svelte";
	async function getCredits(id) {
		const fetch = await api.getCredits(id);
		return fetch;
	};
	const { id } = $props();
	const fetcher = getCredits(id);
</script>

<!-- markup (zero or more items) goes here -->
{#await fetcher}
	<p></p>
{:then people}
	<div class="cast-and-crew">
		<People people={dedupe(people.cast, 'cast')} name="Cast" type="cast" />
		<People people={dedupe(sortByPriority(people.crew, 'job'), 'crew')} name="Crew" type="crew" />
	</div>
{:catch error} 
	<p>{error.message}</p>
{/await}

<style>
	/* styles go here */
</style>