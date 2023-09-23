<script>
	import { newData, isFocusDiv, onFocusDiv } from '../../../store';
	import './style.css';
	export let box;

	function isOnClickHandler(box_id, sentence_id) {
		console.log('isOnClickHandler');
		isFocusDiv.set({ event: true, box_id, sentence_id });
	}

	export let isWeekly = false;
	export let isAlsoToday = false;
	export let isWorkLog = false;

	const callHMR = () => newData.set($newData);
</script>

<div id="editor">
	<div class="editor-box">
		{#if isWeekly}
			<div class="headline-large on-surface-text">{box.repeat.label} repeat</div>
			<div id={box.box_id} class="distance">
				{#each box.sentences as { text, id }}
					<div
						role="button"
						tabindex="0"
						on:mousedown={() => isOnClickHandler(box.box_id, id)}
						class="sentence body-large on-surface-text"
					>
						<div>{id}.</div>
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<div
							{id}
							contenteditable="true"
							tabIndex="0"
							bind:innerHTML={text}
							on:input={callHMR}
							on:focus={() => onFocusDiv.set(true)}
							on:blur={() => onFocusDiv.set(false)}
						/>
					</div>
				{/each}
			</div>
		{/if}
		{#if isAlsoToday}
			<div class="headline-large on-surface-text">{box.repeat.date.value}</div>
			<div id={box.box_id} class="distance">
				{#each box.sentences as { text, id }}
					<div
						class="sentence body-large on-surface-text"
						role="button"
						tabindex="0"
						on:mousedown={() => isOnClickHandler(box.box_id, id)}
					>
						<div>{id}.</div>
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<div
							{id}
							contenteditable="true"
							bind:innerHTML={text}
							on:focus={() => onFocusDiv.set(true)}
							on:blur={() => onFocusDiv.set(false)}
						/>
					</div>
				{/each}
			</div>
		{/if}
		{#if isWorkLog}
			<div class="headline-large on-surface-text">Work log</div>
			<div id={box.box_id} class="distance">
				{#each box.sentences as { text, id }}
					<div
						class="sentence body-large on-surface-text"
						role="button"
						tabindex="0"
						on:mousedown={() => isOnClickHandler(box.box_id, id)}
					>
						<div>{id}.</div>
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<div
							{id}
							contenteditable="true"
							tabIndex="0"
							bind:innerHTML={text}
							on:focus={() => onFocusDiv.set(true)}
							on:blur={() => onFocusDiv.set(false)}
						/>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
	[contenteditable] {
		line-break: anywhere;
	}
</style>
