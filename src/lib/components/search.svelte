<script module>
	// module-level logic goes here
	// (you will rarely use this)
</script>

<script>
	// instance-level logic goes here
	import { api, genres, media_type_name, media_type_profile_path } from "$lib/api";
	import Poster from "./poster.svelte";
	// const [list, setList] = useState([]);
  // const [query, setQuery] = useState('');
  const runSearch = (q) => {
    setQuery(q);
    if(q.length === 0) {
      clearSearch();
      return;
    };
    if(cache[q]) {
      setList(cache[q]);
      return;
    };
    api.search(q).then(data => {
      cache[q] = sortByProp(filterByMatch([...addProp(data[0].results, 'media_type', 'movie'), ...addProp(data[1].results, 'media_type', 'person')], q), 'popularity');
      setList(cache[q]);
      // console.log('combined', cache[q]);
    }).catch(error => console.log('Error:', error));
  };
  const clearSearch = () => {
    setQuery('');
    setList([]);
  };
  const items = [];
  const query = "";
</script>

<!-- markup (zero or more items) goes here -->
<div class="search">
	<div class="search-body">
		<input type="search" placeholder="Search film, actor, director" value={query} />
		<div class="search-results">
			{#each items as item}
				<a href={`/${item.media_type}/${item.id}`} class="search-results-item" onClick={clearSearch}>
					<div class="poster-wrap">
						<Poster path={item[media_type_profile_path[item.media_type]]} size={largest_size_map[item.media_type]} />
					</div>
					<div>{item[media_type_name[item.media_type]]}</div>
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
	/* styles go here */
</style>