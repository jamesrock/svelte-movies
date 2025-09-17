<script module>
	// module-level logic goes here
	// (you will rarely use this)
</script>

<script>
	// instance-level logic goes here
	const { genres } = $props();
</script>

<!-- markup (zero or more items) goes here -->
<div class="genres">
	{#each genres as genre}
		<a href={`/genre/${genre.id}`}>{genre.name}</a>
	{/each}
</div>

<style>
	/* styles go here */
</style>