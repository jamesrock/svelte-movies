<script>
  import Poster from '$lib/components/poster.svelte';
  import Filmography from '$lib/components/filmography.svelte';
  import { api } from '$lib/api.js';
  async function getPerson(id) {
		const fetch = await api.getPerson(id);
		return fetch;
	};
	const { data } = $props();
  const { id } = data;
	const fetcher = getPerson(id);
</script>

<main>
  {#await fetcher}
	  <p></p>
  {:then person}
    <div class="person">
      <h1>{person.name}</h1>
      <Poster path={person.profile_path} />
      <p class="bio">{person.biography}</p>
      <Filmography id={person.id} />
    </div>
  {:catch error}
    <p>{error.message}</p>
  {/await}
</main>