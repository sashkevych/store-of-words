<script>
	export let small = false;
	import HomeDefault from './HomeDefault.svelte';
	import HomeSmall from './HomeSmall.svelte';
</script>

{#if small}
	<HomeSmall />
{:else}
	<HomeDefault />
{/if}