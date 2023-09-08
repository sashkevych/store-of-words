<script>
	import './style.css';
	import Boxes from '$lib/components/widgets/boxes.svelte';

    import { newData } from '../../../store';
</script>

<div id="drop-menu" class="surface-container drop-menu-container">
	<Boxes weeklyRepeats={$newData} vertical={true} />
</div>

<style>
	.drop-menu-container {
		overflow:hidden;
		overflow-y: scroll;
	}
</style>