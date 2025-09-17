<script module>
	// module-level logic goes here
	// (you will rarely use this)
</script>

<script>
	// instance-level logic goes here
	import { api } from "$lib/api";
  const { path, size = 'original' } = $props();
</script>

<!-- markup (zero or more items) goes here -->
<div class="poster-crop">
  <img class="poster" src={api.getPosterPath(path, size)} alt="" />
</div>

<style>
	/* styles go here */
</style>