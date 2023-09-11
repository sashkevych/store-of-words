<script>
	import './style.css';
	import Boxes from './boxes.svelte';
	import { alsoToday } from '../../../store';

	let weeklyRepeats = [];
	alsoToday.subscribe((vl) => (weeklyRepeats = vl));
</script>

<div id="also-today">
	<Boxes {weeklyRepeats} label={'Also today'} horizontal={true} isWeekly={false} />
</div>
