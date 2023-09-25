<script>
	import SideBar from '$lib/components/side-bar/SideBar.svelte';
	import Data from '$lib/components/data/Data.svelte';
	import Editor from '$lib/components/widgets/Editor.svelte';
	import { isFocusDiv, onFocusDiv, workLog } from '../../store.js';

	import { key_down_handler } from '$lib/scripts/key-handler.js';

	let box = [];
	workLog.subscribe((value) => (box = value[0]));

	const isWorkLog = true;
</script>

<svelte:window on:keydown={(e) => key_down_handler(e, workLog, isFocusDiv, $onFocusDiv)} />

<div class="work-log surface">
	<SideBar />
	<Data />
	<Editor {box} {isWorkLog} />
	<div id="space" />
</div>
