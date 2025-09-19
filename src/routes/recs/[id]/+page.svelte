<script>
	import { FilmGrid } from "$lib/components";
	const { data } = $props();
	const { film } = data;
</script>

<main>
	<FilmGrid id={film.id} type="recs" name="Recommendations" sub={`based on ${film.title}`} />
</main>