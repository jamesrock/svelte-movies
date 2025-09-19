<script>
	const { genres } = $props();
</script>

<div class="genres">
	{#each genres as genre}
		<a href={`/genre/${genre.id}`}>{genre.name}</a>
	{/each}
</div>
