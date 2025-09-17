<script module>
	// module-level logic goes here
	// (you will rarely use this)
</script>

<script>
	// instance-level logic goes here
	import { api, genres, largest_size_map } from "$lib/api";
	import Poster from "./poster.svelte";
	const { id, tyoe = 'genre', name = 'name', sub = false } = $props();
	const films = [];
	const page = 0;
	const pages = 0;
	// const fetcher = getFilms(id);
	const loadMore = (target) => {
    // console.log('loadMore', target);
    api.getFilms(type, target, id).then(data => {
      // setFilms(dedupeFilms([...films, ...data.results]));
      // setPages(data.total_pages);
      // setPage(target);
      // console.log(data);
    }).catch(error => console.log('Error:', error));
  };
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
			<button onClick={() => loadMore(page + 1)}>Load more</button>
		</div>
	{/if}
</div>

<style>
	/* styles go here */
</style>