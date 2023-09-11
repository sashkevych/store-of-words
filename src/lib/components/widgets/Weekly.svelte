<script>
	import './style.css';
	import Boxes from './boxes.svelte';
	import { newData } from '../../../store';

	let weeklyRepeats = [];
	newData.subscribe((vl) => (weeklyRepeats = vl));

	const isWeekly = true
</script>

<div id="weekly">
	<Boxes {weeklyRepeats} label={'Weekly repeats'}  horizontal={true} {isWeekly}/>
</div>
