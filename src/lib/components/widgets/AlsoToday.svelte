<script>
	import './style.css';
	import Boxes from './boxes.svelte';
	import NothingYet from './NothingYet.svelte';
	import { alsoToday } from '../../../store';

	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	var ready = false;
	onMount(() => {
		ready = true;
	});
	let weeklyRepeats = [];
	alsoToday.subscribe((vl) => (weeklyRepeats = vl));

	const isAlsoToday = true;
</script>

{#if ready}
	<div id="also-today" transition:fly={{ y: 2, delay: 200 }}>
		{#if weeklyRepeats[0]}
			<Boxes {weeklyRepeats} label={'Also today'} horizontal={true} {isAlsoToday} />
		{:else}
			<NothingYet widget={true} />
		{/if}
	</div>
{/if}
