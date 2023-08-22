<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import { Box } from '$lib/scripts/newbox';
	import { create7DayRep } from '$lib/scripts/sevenrep';

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
	async function sendPost(content) {
		await fetch('http://localhost:5173/gcp', {
			method: 'POST',
			body: JSON.stringify( content ),
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


	// Add new sentences logic
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
				const newId = box.sentences[box.sentences.length - 1].id + 1;
				const newSentence = sentence;
				box.sentences.push({ text: newSentence, id: newId });
			}
		});
		newSentence = '';
	}
	// end


	 function moveAll(weeklyRepeats) {
		const lastBox = weeklyRepeats.find(el => el.repeat.count == 7)
		const newWeeklyRepeats = weeklyRepeats.filter((el) => {
			if (el.repeat.count != 7) {
				el.repeat.count += 1;
				return el;
			}
		});
		
		console.log('lastBox',lastBox);
		const new7DayBox = create7DayRep(lastBox)

		const newInstance =  new Box()

		newWeeklyRepeats.unshift(new Box());

		weeklyRepeats = newWeeklyRepeats


		// console.log('weeklyRepeats', weeklyRepeats);
		console.log('newBox', new7DayBox.repeat);
		
		sendPost({day7: new7DayBox,week1:newInstance})
	}
</script>

<svelte:window on:beforeunload={close_event_function} />

<div class="flex">
	{#each weeklyRepeats as repeat}
		<div class="border-2 border-green-500 p-2">
			<div>repeat count : {repeat.repeat.count}</div>
			<div>box_id : {repeat.box_id}</div>
			{#each repeat.sentences as { id, text }}
				<div>id: {id} ; text: <input type="text" bind:value={text} /></div>
			{/each}
			<button class="border-2" on:click={() => openInputForSentence(isOnNewSentence, repeat.box_id)}
				>add sentence</button
			>
			{#if isOnNewSentence.toggle && isOnNewSentence.id == repeat.box_id}
				<input class="border-2" type="text" bind:value={newSentence} />
				<button on:click={() => addNewSentence(weeklyRepeats, repeat.box_id, newSentence)}
					>OK</button
				>
			{/if}
		</div>
	{/each}
</div>

<button class="border border-red-600 rounded-sm" on:click={() => moveAll(weeklyRepeats)}
	>Move all</button
>
