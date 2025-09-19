<script>
	import { api, genres, dedupe, sortByPriority } from "$lib/api";
	import { People } from "$lib/components";
	async function getCredits(id) {
		const fetch = await api.getCredits(id);
		return fetch;
	};
	const { id } = $props();
	const fetcher = getCredits(id);
</script>

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
