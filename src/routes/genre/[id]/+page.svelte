<script>
	import { FilmGrid } from "$lib/components";
	import { genres } from "$lib/api";
	const { data } = $props();
	const { id } = data;
</script>

<main>
  <FilmGrid id={id} name={genres[id]} />
</main>