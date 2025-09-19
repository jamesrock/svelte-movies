<script>
	import { api, addProp, sortByProp, filterByMatch, media_type_name, media_type_profile_path, largest_size_map } from "$lib/api";
  import { Poster } from "$lib/components";
  
  let items = $state([]);
  let query = $state('');
  const cache = {};
  const runSearch = () => {
    if(query.length === 0) {
      clearSearch();
      return;
    };
    if(cache[query]) {
      items = cache[query];
      return;
    };
    api.search(query).then(data => {
      cache[query] = sortByProp(filterByMatch([...addProp(data[0].results, 'media_type', 'movie'), ...addProp(data[1].results, 'media_type', 'person')], query), 'popularity');
      items = cache[query];
    }).catch(error => console.log('Error:', error));
  };
  const clearSearch = () => {
    query = '';
    items = [];
  };
</script>

<div class="search">
	<div class="search-body">
		<input type="search" placeholder="Search film, actor, director" bind:value={query} oninput={() => runSearch()} />
		<div class="search-results">
			{#each items as item}
				<a href={`/${item.media_type}/${item.id}`} class="search-results-item" onclick={clearSearch}>
					<div class="poster-wrap">
						<Poster path={item[media_type_profile_path[item.media_type]]} size={largest_size_map[item.media_type]} />
					</div>
					<div>{item[media_type_name[item.media_type]]}</div>
				</a>
			{/each}
		</div>
	</div>
</div>
