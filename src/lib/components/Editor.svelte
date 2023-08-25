<script>
	import { newData, isFocusDiv } from '../../store';

	export let repeat;

	const { box_id, sentences } = repeat;


	function isOnClickHandler() {
		isFocusDiv.set(true)
	}
	
</script>


<div class="gap-3">
	<div>Day : {repeat.repeat.count}</div>
	<div>Box : {box_id}</div>
</div>
<div id={box_id} class="border-2 border-green-500 p-2">
	{#each sentences as { text, id }}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			{id}
			class="border"
			contenteditable="true"
			bind:textContent={text}
			on:mousedown={isOnClickHandler}
		/>
	{/each}
</div>
