<script>
	import './style.css';
	import Boxes from './boxes.svelte';
	import { newData } from '../../../store';

	let weeklyRepeats = [];
	newData.subscribe((vl) => (weeklyRepeats = vl));
</script>

<div id="also-today">
	<Boxes {weeklyRepeats} label={'Also today'} />
</div>

