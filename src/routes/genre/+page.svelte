<script>
	const { data } = $props();
	const { genres } = data;
</script>

<main>
  <div class="all-genres">
		{#each genres as genre}
			<div><a href={`/genre/${genre.id}`}>{genre.name}</a></div>
		{/each}
	</div>
</main>