<script module>
	// module-level logic goes here
	// (you will rarely use this)
</script>

<script>
	// instance-level logic goes here
	import Search from "./search.svelte";
	import Navigation from "./navigation.svelte";
</script>

<!-- markup (zero or more items) goes here -->
<header>
	<div class="header-inner container">
		<Search />
		<Navigation />
	</div>
</header>

<style>
	/* styles go here */
</style>