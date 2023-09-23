<script>
	import './style.css';
	import Boxes from './boxes.svelte';
	import { newData } from '../../../store';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	var ready = false;
	onMount(() => {
		ready = true;
	});
	let weeklyRepeats = [];
	newData.subscribe((vl) => (weeklyRepeats = vl));

	const isWeekly = true;
</script>

{#if ready}
	<div id="weekly" transition:fly={{ y: 2, delay: 200 }}>
		<Boxes {weeklyRepeats} label={'Weekly repeats'} horizontal={true} {isWeekly} />
	</div>
{/if}
