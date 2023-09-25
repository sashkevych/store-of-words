<script>
	/** @type {import('./$types').PageData} */
	export let data;

	import { isFocusDiv, newData, onFocusDiv } from '../../../store';

	import { key_down_handler } from '$lib/scripts/key-handler';

	import Data from '$lib/components/data/Data.svelte';
	import SideBar from '$lib/components/side-bar/SideBar.svelte';
	import Editor from '$lib/components/widgets/Editor.svelte';
	import DropMenu from '$lib/components/widgets/DropMenu.svelte';

	$: box = $newData.find((box) => box.repeat.label.toLowerCase() == data.id);

	const isWeekly = true;
</script>

<svelte:window on:keydown={(e) => key_down_handler(e, newData, isFocusDiv, $onFocusDiv)} />

<div class="weekly surface">
	<SideBar />
	<DropMenu dataArray={$newData} {isWeekly} />
	<Data />
	<Editor {box} {isWeekly} />
	<div id="space" />
</div>
