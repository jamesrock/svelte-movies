<script>
  import Poster from '$lib/components/poster.svelte';
  import Filmography from '$lib/components/filmography.svelte';
	const { data } = $props();
  const { person } = data;
</script>

<main>
  <div class="person">
    <h1>{person.name}</h1>
    <Poster path={person.profile_path} />
    <p class="bio">{person.biography}</p>
    <Filmography id={person.id} />
  </div>
</main>