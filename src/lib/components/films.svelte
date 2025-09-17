<script module>
	// module-level logic goes here
	// (you will rarely use this)
</script>

<script>
	// instance-level logic goes here
	import { getRole, largest_size_map } from "$lib/api";
	import Poster from "./poster.svelte";
	const { films, link, credits, name } = $props();
</script>

<!-- markup (zero or more items) goes here -->
{#if films.length }
	<div class="category">
		<div class="category-head">
			<h2>{name}</h2>
			{#if link}<a href={link}>view all</a>{/if}
		</div>
		<div class="category-items">
		{#each films as film}
			<a href={`/movie/${film.id}`} class="category-item">
				<Poster path={film.poster_path} size={largest_size_map.movie} />
				<div class="desc">
					<div class="desc-name">{film.title}</div>
					{#if credits}<div class="desc-role">{getRole(credits, film)}</div>{/if}
				</div>
			</a>
		{/each}
		</div>
	</div>
{/if}

<style>
	/* styles go here */
</style>