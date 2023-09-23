<script>
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import './style.css';
	import Boxes from '$lib/components/widgets/boxes.svelte';
	import NothingYet from './NothingYet.svelte';
	import { onMount } from 'svelte';

	export let dataArray = [];

	export let isWeekly = false;
	export let isAlsoToday = false;

	var ready = false;
	onMount(() => {
		ready = true;
	});
</script>

{#if ready}
	<div
		id="drop-menu"
		class="surface-container drop-menu-container"
		transition:slide={{ delay: 200, duration: 400, easing: quintOut, axis: 'x' }}
	>
		{#if dataArray[0]}
			<Boxes weeklyRepeats={dataArray} vertical={true} {isWeekly} {isAlsoToday} />
		{:else}
			<NothingYet />
		{/if}
	</div>
{/if}

<style>
	.drop-menu-container {
		overflow: hidden;
		overflow-y: scroll;

		border-top-right-radius: 23px;
		border-bottom-right-radius: 23px;

		border-left: 1px solid var(--md-sys-color-outline-variant)
	}
</style>
