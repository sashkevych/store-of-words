<script>
	import './style.css';
	import Boxes from '$lib/components/widgets/boxes.svelte';

    export let dataArray = []

	export let isWeekly = true
</script>

<div id="drop-menu" class="surface-container drop-menu-container">
	<Boxes weeklyRepeats={dataArray} vertical={true} {isWeekly}/>
</div>

<style>
	.drop-menu-container {
		overflow:hidden;
		overflow-y: scroll;
	}
</style>