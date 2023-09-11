<script>
	/** @type {import('./$types').PageData} */
	export let data;

	import { alsoToday, newData, oldData } from '../../../store';

	import Data from '$lib/components/data/Data.svelte';
	import SideBar from '$lib/components/side-bar/SideBar.svelte';
	import Editor from '$lib/components/widgets/Editor.svelte';
	import DropMenu from '$lib/components/widgets/DropMenu.svelte';

	$: box = $alsoToday.find((box) => box.box_id == data.id);

	const isAlsoToday = true
</script>

<div class="weekly surface">
	<SideBar />
	<DropMenu dataArray={$alsoToday} {isAlsoToday}/>
	<Data />
	<Editor {box} {isAlsoToday}/>
	<div id="space" />
</div>
