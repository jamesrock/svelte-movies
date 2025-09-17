<script>
  import CastAndCrew from "$lib/components/cast-and-crew.svelte";
  import Recommendations from "$lib/components/recommendations.svelte";
  import Poster from "$lib/components/poster.svelte";
  import Genres from "$lib/components/genres.svelte";
  import { api, toTime, getRatingClass, floorRating } from "$lib/api";

  async function getFilm(id) {
		const fetch = await api.getFilm(id);
		return fetch;
	};
	const { data } = $props();
  const { id } = data;
	const fetcher = getFilm(id);
  // console.log(data);
</script>

<main>
  {#await fetcher}
	  <p></p>
  {:then film}
    <div class="film">
      <div class="film-head">
        <div class="film-head-top">
          <h1>{film.title}</h1>
          <div class="duration">{toTime(film.runtime)}</div>
          <Genres genres={film?.genres} />
        </div>
        <div class="film-head-bottom">
          <div class={`rating ${getRatingClass(film.vote_average ?? 0)}`}>{floorRating(film.vote_average)}</div>
        </div>
      </div>
      <Poster path={film.poster_path} />
      <p class="plot">{film.overview}</p>
      <CastAndCrew id={film.id} />
      <Recommendations id={film.id} />
    </div>
  {:catch error} 
    <p>{error.message}</p>
  {/await}
</main>