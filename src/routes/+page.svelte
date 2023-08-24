<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import { Box } from '$lib/scripts/newbox';
	import { create7DayRep } from '$lib/scripts/sevenrep';

	import Editor from '$lib/components/Editor.svelte';

	import { oldData, newData } from '../store';

	
	let weeklyRepeats = JSON.parse(data.weeklyRepeats);

	oldData.set(JSON.parse(data.weeklyRepeats))
	newData.set(JSON.parse(data.weeklyRepeats))


	async function areThereAnyChanges(newArr, oldArr) {
		const changes = newArr.filter((el, i) => {
			const el1 = el.sentences;
			const el2 = oldArr[i].sentences;

			const thereIsRemovedText = el1.some((el) => !el.text);

			if (thereIsRemovedText) {
				const onlyWithText = el1.filter((el) => el.text);
				el.sentences = onlyWithText;
				return el;
			}

			const thereIsUpdateOrNew = el1.some((el, i) => {
				if (!el2[i]?.text) {
					return true;
				}
				return el.text != el2[i].text;
			});

			if (thereIsUpdateOrNew) return el;
		});

		return changes;
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
			body: JSON.stringify(content),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
	async function close_event_function() {
		const changes = await areThereAnyChanges(weeklyRepeats, JSON.parse(data.weeklyRepeats));
		console.log(changes);
		if (changes[0]) await sendPut(changes);

		return null;
	}
	function moveAll(weeklyRepeats) {
		const lastBox = weeklyRepeats.find((el) => el.repeat.count == 7);
		let newWeeklyRepeats = weeklyRepeats.filter((el) => {
			if (el.repeat.count != 7) {
				el.repeat.count += 1;
				return el;
			}
		});

		const new7DayBox = create7DayRep(lastBox);
		const newBox = new Box();

		newWeeklyRepeats.unshift(newBox);
		weeklyRepeats = newWeeklyRepeats;

		sendPost({ day7: new7DayBox, week1: newBox });
	}
</script>

<svelte:window on:beforeunload={close_event_function} />
<button on:click={() => areThereAnyChanges(weeklyRepeats, JSON.parse(data.weeklyRepeats))}
	>Compare</button
>
<button class="border border-red-600 rounded-sm" on:click={() => moveAll(weeklyRepeats)}
	>Move all</button
>

{#each weeklyRepeats as repeat}
	<Editor {repeat} {weeklyRepeats} />
{/each}
