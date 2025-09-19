<script>
	import { api } from "$lib/api";
  const { path, size = 'original' } = $props();
</script>

<div class="poster-crop">
  <img class="poster" src={api.getPosterPath(path, size)} alt="" />
</div>
