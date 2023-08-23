<script>
	export let repeat;
	const { box_id, sentences } = repeat;

	let newSentence = '';

	let isOnNewSentence = {
		toggle: false,
		id: ''
	};

	function openInputForSentence(obj, box_id) {
		obj.id = box_id;
		obj.toggle = true;

		isOnNewSentence = obj;
	}
	function addNewSentence(data, box_id, sentence) {
		if (!sentence) return;
		data.find((box) => {
			if (box.box_id == box_id) {
				const Last_ID = box.sentences[box.sentences.length - 1]?.id;
				const newId = Last_ID ? Last_ID + 1 : 1;
				const newSentence = sentence;
				box.sentences.push({ text: newSentence, id: newId });
			}
		});
		newSentence = '';
	}
</script>

<div class="border-2 border-green-500 p-2">
	<div>repeat count : {repeat.repeat.count}</div>
	<div>box_id : {box_id}</div>
	{#each sentences as { id, text }}
		<div>id: {id} ; text: <input type="text" bind:value={text} /></div>
	{/each}
	<button class="border-2" on:click={() => openInputForSentence(isOnNewSentence, box_id)}
		>add sentence</button
	>
	{#if isOnNewSentence.toggle && isOnNewSentence.id == box_id}
		<input class="border-2" type="text" bind:value={newSentence} />
		<button on:click={() => addNewSentence(weeklyRepeats, box_id, newSentence)}>OK</button>
	{/if}
</div>
