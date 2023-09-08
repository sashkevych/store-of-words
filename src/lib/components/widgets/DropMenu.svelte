<script>
	import Boxes from '$lib/components/widgets/boxes.svelte';

    import { newData } from '../../../store';
</script>

<div id="drop-menu" class="surface-container">
	<Boxes weeklyRepeats={$newData} vertical={true} />
</div>


<style>
</style>