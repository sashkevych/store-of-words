<script>
	export let data;

	import SideBar from '$lib/components/side-bar/SideBar.svelte';
	import Data from '$lib/components/data/Data.svelte';
	import Editor from '$lib/components/widgets/Editor.svelte';
	import { workLog } from '../../store.js';

	let box = [];
	workLog.subscribe((value) => (box = value[0]));

	const isWorkLog = true
	console.log(box);
</script>

<div class="work-log">
	<SideBar />
	<Data />
	<Editor {box} {isWorkLog}/>
	<div id="space" />
</div>
