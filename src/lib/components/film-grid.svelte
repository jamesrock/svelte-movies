<script module>
	// module-level logic goes here
	// (you will rarely use this)
</script>

<script>
	// instance-level logic goes here
	import { api, genres, dedupeFilms, largest_size_map } from "$lib/api";
	import { onMount } from "svelte";
	import Poster from "./poster.svelte";
	
	const { id, type = 'genre', name = 'name', sub = false } = $props();
	let films = $state([]);
	let page = $state(0);
	let pages = $state(0);
	const loadMore = (target) => {
    api.getFilms(type, target, id).then(data => {
      films = dedupeFilms([...films, ...data.results]);
      pages = data.total_pages;
      page = target;
    }).catch(error => console.log('Error:', error));
  };
	onMount(() => {
		loadMore(1);
	});
</script>

<!-- markup (zero or more items) goes here -->
<div class="films">
	<div class="films-head">
		<h1>{name}</h1>
		{#if sub}<h2>{sub}</h2>{/if}
	</div>
	<div class="films-body">
	{#each films as film}
		<a href={`/movie/${film.id}`} class="category-item">
			<Poster path={film.poster_path} size={largest_size_map.movie} />
			<div class="desc">
				<div class="desc-name">{film.title}</div>
			</div>
		</a>
	{/each}
	</div>
	{#if page<pages}
		<div class="films-foot">
			<button onclick={() => loadMore(page + 1)}>Load more</button>
		</div>
	{/if}
</div>

<style>
	/* styles go here */
</style>