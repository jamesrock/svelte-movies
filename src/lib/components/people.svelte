<script>
	import { api, largest_size_map, getRole } from "$lib/api";
	import { Poster } from "$lib/components";
	const { people, name, type } = $props();
</script>

{#if people.length}
	<div class="category">
		<div class="category-head">
			<h2>{name}</h2>
		</div>
		<div class="category-items">
		{#each people as person}
			<a href={`/person/${person.id}`} class="category-item">
				<Poster path={person.profile_path} size={largest_size_map.person} />
				<div class="desc">
					<div class="desc-name">{person.name}</div>
					<div class="desc-role">{getRole(type, person)}</div>
				</div>
			</a>
		{/each}
		</div>
	</div>
{/if}
