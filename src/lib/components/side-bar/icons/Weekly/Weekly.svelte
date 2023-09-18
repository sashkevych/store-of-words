<script>
	export let small = false;
	import WeeklyDefault from './WeeklyDefault.svelte';
	import WeeklySmall from './WeeklySmall.svelte';
</script>

{#if small}
	<WeeklySmall />
{:else}
	<WeeklyDefault />
{/if}
