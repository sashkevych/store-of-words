<script>
	import Data from '$lib/components/data/Data.svelte';
	import SideBar from '$lib/components/side-bar/SideBar.svelte';
	import Editor from '$lib/components/Editor.svelte';
	import DropMenu from '$lib/components/widgets/DropMenu.svelte';

	import { oldData, newData, isFocusDiv } from '../../store';
</script>

<div class="weekly surface">
	<SideBar />
	<DropMenu />
	<Data />
	<div id="editor">
		{#key $newData}
			{#each $newData as repeat}
				<Editor {repeat} />
			{/each}
		{/key}
	</div>
	<div id="space" />
</div>
