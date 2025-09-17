<script>
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/header.svelte';
	import '../globals.scss';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<Header />
{@render children?.()}
