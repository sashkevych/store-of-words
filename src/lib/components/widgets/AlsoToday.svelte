<script>
	import './style.css';
	import Boxes from './boxes.svelte';
	import NothingYet from './NothingYet.svelte';
	import { alsoToday } from '../../../store';

	let weeklyRepeats = [];
	alsoToday.subscribe((vl) => (weeklyRepeats = vl));

	const isAlsoToday = true;
</script>

<div id="also-today">
	{#if weeklyRepeats[0]}
		<Boxes {weeklyRepeats} label={'Also today'} horizontal={true} {isAlsoToday} />
	{:else}
		<NothingYet widget={true}/>
	{/if}
</div>
