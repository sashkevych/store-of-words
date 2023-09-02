<script>
	import SideBar from '$lib/components/side-bar/SideBar.svelte';
	import Data from '$lib/components/data/Data.svelte';
	import Weekly from '$lib/components/weekly-repeats/Weekly.svelte';
	import AlsoToday from '$lib/components/also-today/AlsoToday.svelte';
	import WorkLog from '$lib/components/work-log/WorkLog.svelte';
</script>

<div class="container surface">
	<SideBar />
	<Data />
	<Weekly />
	<AlsoToday />
	<WorkLog />
	<div id="space" />
</div>
