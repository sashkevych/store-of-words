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

<style>
	.devider {
		padding-left: 16px;
		padding-right: 16px;

		padding-top: 10px;
		padding-bottom: 10px;
	}
</style>
