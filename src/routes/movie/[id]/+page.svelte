<script>
  import { CastAndCrew, Recommendations, Poster, Genres } from "$lib/components";
  import { toTime, getRatingClass, floorRating } from "$lib/api";
	const { data } = $props();
  const film = $derived(data.film);
</script>

<main>
  {#key film.id}
    <div class="film">
      <div class="film-head">
        <div class="film-head-top">
          <h1>{film.title}</h1>
          <div class="duration">{toTime(film.runtime)}</div>
          <Genres genres={film.genres} />
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
  {/key}
</main>