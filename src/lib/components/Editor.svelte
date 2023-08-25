<script>
	import { newData, isFocusDiv } from '../../store';

	export let repeat;

	const { box_id, sentences } = repeat;


	function isOnClickHandler(box_id,sentence_id) {

		isFocusDiv.set({event:true,box_id,sentence_id})
	}
	


</script>

<button on:click={() => console.log($newData)}>log</button>
<div class="gap-3">
	<div>Day : {repeat.repeat.count}</div>
	<div>Box : {box_id}</div>
</div>
<div id={box_id} class="border-2 border-green-500 p-2">
	{#each sentences as { text, id }}
	<div>{id}</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			{id}
			class="border"
			contenteditable="true"
			bind:textContent={text}
			on:mousedown={() => isOnClickHandler(box_id,id)}
		/>
	{/each}
</div>
