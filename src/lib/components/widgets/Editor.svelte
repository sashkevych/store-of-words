<script>
	import { newData, isFocusDiv, onFocusDiv } from '../../../store';
	export let box;

	function isOnClickHandler(box_id, sentence_id) {
		console.log('isOnClickHandler');
		isFocusDiv.set({ event: true, box_id, sentence_id });
	}

	export let isWeekly = true;
</script>

<div id="editor">
	<div class="editor-box">
		<div class="headline-large on-surface-text header-text">First repeat</div>
		<div id={box.box_id} class="distance">
			{#each box.sentences as { text, id }}
				<div class="sentence body-large on-surface-text">
					<div>{id}.</div>
					{#if isWeekly}
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
					{:else}
						<div>{text}</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
</style>
