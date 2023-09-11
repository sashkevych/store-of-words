<script>
	/** @type {import('./$types').PageData} */
	export let data;

	import { newData, oldData } from '../../../store';

	import Data from '$lib/components/data/Data.svelte';
	import SideBar from '$lib/components/side-bar/SideBar.svelte';
	import Editor from '$lib/components/widgets/Editor.svelte';
	import DropMenu from '$lib/components/widgets/DropMenu.svelte';

	$: box = $newData.find((box) => box.repeat.count == data.id);

	const isWeekly = true
</script>

<div class="weekly surface">
	<SideBar />
	<DropMenu dataArray={$newData} {isWeekly}/>
	<Data />
	<Editor {box} {isWeekly}/>
	<div id="space" />
</div>
