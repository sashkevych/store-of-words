<script>
	import './style.css';
	import Boxes from '$lib/components/widgets/boxes.svelte';
	import NothingYet from './NothingYet.svelte';

	export let dataArray = [];

	export let isWeekly = false;
	export let isAlsoToday = false;
</script>

<div id="drop-menu" class="surface-container drop-menu-container">
	{#if dataArray[0]}
		<Boxes weeklyRepeats={dataArray} vertical={true} {isWeekly} {isAlsoToday} />
	{:else}
		<NothingYet />
	{/if}
</div>

<style>
	.drop-menu-container {
		overflow: hidden;
		overflow-y: scroll;

		border-top-right-radius: 23px;
		border-bottom-right-radius: 23px;
	}
</style>
