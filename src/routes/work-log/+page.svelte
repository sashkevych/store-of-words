<script>
	export let data;

	import SideBar from '$lib/components/side-bar/SideBar.svelte';
	import Data from '$lib/components/data/Data.svelte';
</script>

<div class="work-log">
	<SideBar />
	<Data />
	<div id="editor" />
	<div id="space" />
</div>
