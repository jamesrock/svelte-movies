<script>
  import NowPlaying from "$lib/components/now-playing.svelte";
  import ComingSoon from "$lib/components/coming-soon.svelte";
  import Category from "$lib/components/category.svelte";
	let { data } = $props();
</script>
<main>
  <div class="categories">
    <NowPlaying />
    <ComingSoon />
    <Category id="35" />
    <Category id="28" />
    <Category id="10751" />
    <Category id="18" />
    <Category id="27" />
    <Category id="878" />
    <div class="categories-foot">
      <a href="/genre" class="button">View all genres</a>
    </div>
  </div>
</main>