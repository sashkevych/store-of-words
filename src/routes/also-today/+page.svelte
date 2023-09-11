<script>
	import Data from '$lib/components/data/Data.svelte';
	import SideBar from '$lib/components/side-bar/SideBar.svelte';
	import DropMenu from '$lib/components/widgets/DropMenu.svelte';

    import { alsoToday } from '../../store';

</script>


<div class="weekly surface">
	<SideBar />
	<DropMenu dataArray={$alsoToday} isWeekly={false}/>
	<Data />
	<div id="space" />
</div>

<style>
</style>
