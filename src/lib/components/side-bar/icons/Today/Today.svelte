<script>
	import TodayDefault from './TodayDefault.svelte';
	import TodaySmall from './TodaySmall.svelte';

	export let small = false;
</script>

{#if small}
	<TodaySmall />
{:else}
	<TodayDefault />
{/if}
