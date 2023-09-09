<script>
	import { newData, isFocusDiv, onFocusDiv } from '../../../store';
	export let box;

	function isOnClickHandler(box_id, sentence_id) {
		console.log('isOnClickHandler');
		isFocusDiv.set({ event: true, box_id, sentence_id });
	}

</script>

<div id="editor">
	{#key $newData}
		<div>
			<div>Day : {box.repeat.count}</div>
			<div>Box : {box.box_id}</div>
		</div>
		<div id={box.box_id} class="border-2 border-green-500 p-2">
			{#each box.sentences as { text, id }}
				<div class="bold">{id}</div>
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					{id}
					class="test"
					contenteditable="true"
					bind:textContent={text}
					on:mousedown={() => isOnClickHandler(box.box_id, id)}
					on:focus={() => onFocusDiv.set(true)}
					on:blur={() => onFocusDiv.set(false)}
				/>
			{/each}
		</div>
	{/key}
</div>

<style>
	.test {
		border: 1px solid seagreen;
	}
	.bold {
		font-weight: bold;
	}
</style>
