<script>
	import Data from '$lib/components/data/Data.svelte';
	import SideBar from '$lib/components/side-bar/SideBar.svelte';
	import Editor from '$lib/components/widgets/Editor.svelte';
	import DropMenu from '$lib/components/widgets/DropMenu.svelte';

	import { oldData, newData, isFocusDiv, onFocusDiv } from '../../store';
	


	const isWeekly = true
</script>


<div class="weekly surface">
	<SideBar />
	<DropMenu dataArray={$newData} {isWeekly}/>
	<Data/>
	<div id="space" />
</div>

<style>
</style>
