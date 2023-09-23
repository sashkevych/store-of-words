<script>
	import SideBar from '$lib/components/side-bar/SideBar.svelte';
	import Data from '$lib/components/data/Data.svelte';
	import Weekly from '$lib/components/widgets/Weekly.svelte';
	import AlsoToday from '$lib/components/widgets/AlsoToday.svelte';
	import WorkLog from '$lib/components/widgets/WorkLog.svelte';
</script>

<div class="container surface">
	<SideBar />
	<Data />
	<Weekly />
	<AlsoToday />
	<WorkLog />

	<div id="space" />
</div>
