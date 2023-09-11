<script>
	import './style.css';
	import Boxes from './boxes.svelte';
	import { alsoToday } from '../../../store';

	let weeklyRepeats = [];
	alsoToday.subscribe((vl) => (weeklyRepeats = vl));

	const isAlsoToday = true;
</script>

<div id="also-today">
	<Boxes {weeklyRepeats} label={'Also today'} horizontal={true} {isAlsoToday} />
</div>
