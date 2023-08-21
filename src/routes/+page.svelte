<script>
	/** @type {import('./$types').PageData} */
	export let data;

	let weeklyRepeats = JSON.parse(data.weeklyRepeats);

	async function areThereAnyChanges(bucket_1, bucket_2) {
		let res = bucket_1.some((el, i) => {
			let el1 = el.sentences;
			let el2 = bucket_2[i].sentences;

			let res = el1.some((el, i) => {
				if (!el2[i]?.text) {
					return true;
				}
				return el.text != el2[i].text;
			});

			if (res) {
				return res;
			}
		});
		return res;
	}

	async function createUpdatedData(bucket_1, bucket_2) {
		const new_data = bucket_2.filter((el, i) => {
			let el1 = el.sentences;
			let el2 = bucket_1[i]?.sentences;

			let res = el1.some((el, i) => {
				if (!el2[i]) {
					return true;
				}
				return el.text != el2[i].text;
			});

			if (res) return el;
		});

		return new_data;
	}

	async function sendPut(content) {
		await fetch('http://localhost:5173/gcp', {
			method: 'PUT',
			body: JSON.stringify({ content }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}

	async function close_event_function() {
		const NEW_CHANGES = await areThereAnyChanges(weeklyRepeats, JSON.parse(data.weeklyRepeats));
		if (NEW_CHANGES)
			await sendPut(await createUpdatedData(JSON.parse(data.weeklyRepeats), weeklyRepeats));

		return null;
	}

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
		data.find((box) => {
			if (box.box_id == box_id) {
				const newId = box.sentences[box.sentences.length - 1].id + 1;
				const newSentence = sentence;
				box.sentences.push({ text: newSentence, id: newId });
			}
		});
		newSentence = '';

	}

</script>

<svelte:window on:beforeunload={close_event_function} />

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#each weeklyRepeats as repeat}
	<div>
		<button on:click={() => openInputForSentence(isOnNewSentence, repeat.box_id)}
			>add sentence</button
		>
		{repeat.box_id} :
		{#each repeat.sentences as { id, text }}
			<input type="text" bind:value={text} />
		{/each}
		{#if isOnNewSentence.toggle && isOnNewSentence.id == repeat.box_id}
			<input type="text" bind:value={newSentence} />
			<button on:click={() => addNewSentence(weeklyRepeats, repeat.box_id, newSentence)}>OK</button>
		{/if}
	</div>
{/each}
