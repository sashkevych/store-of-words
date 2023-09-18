<script>
	import WorkLogDefault from './WorkLogDefault.svelte';
	import WorkLogSmall from './WorkLogSmall.svelte';
	export let small = false;
</script>

{#if small}
	<WorkLogSmall />
{:else}
	<WorkLogDefault />
{/if}