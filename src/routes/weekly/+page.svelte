<script>
	import Data from '$lib/components/data/Data.svelte';
	import SideBar from '$lib/components/side-bar/SideBar.svelte';
	import Editor from '$lib/components/widgets/Editor.svelte';
	import DropMenu from '$lib/components/widgets/DropMenu.svelte';

	import { oldData, newData, isFocusDiv, onFocusDiv } from '../../store';

	import { createBox } from '$lib/scripts/newbox';
	import { create7DayRep } from '$lib/scripts/sevenrep';

	async function close_event_handler() {
		// whiteSpaceFilter($newData,$oldData)
		const changes = await areThereAnyChanges($newData, $oldData);
		console.log(changes);
		if (changes[0]) await sendPut(changes);

		return null;
	}
	async function areThereAnyChanges(newArr, oldArr) {
		const changes = removeWhiteSpace(newArr).filter((el, i) => {
			const el1 = el.sentences;
			const el2 = oldArr[i].sentences;

			// const thereIsRemovedText = el1.some((el, i) => {
			// 	// console.log(el2[i]?.text, !el?.text ? !el?.text : 'dick');
			// 	if (el2[i]?.text && !el?.text) {
			// 		console.log('If statement TRUE');
			// 		return true;
			// 	}
			// });
			// console.log('thereIsRemovedText', thereIsRemovedText);
			// if (thereIsRemovedText) return el;

			const isAnyChange = el1.some((el, i, arr) => {
				if (!el2[i]?.text) {
					console.log('1');
					return true;
				}
				if (!el.text) {
					console.log('2');
					return true;
				}
				if (el2[i + 1]?.text && !arr[i + 1]?.text) {
					console.log('3');
					return true;
				}
				if (el.text != el2[i].text) {
					console.log('4');
					return true;
				}
				return false;
			});

			if (isAnyChange) return el;
		});

		return changes;
	}

	function removeWhiteSpace(newArr) {
		const res = newArr.filter((box) => {
			const onlyWithText = box.sentences.filter((sentence, i, arr) => {
				// fix id
				const IsEmpty = sentence.text.trim();

				sentence.text = IsEmpty;
				return IsEmpty;
			});
			onlyWithText.forEach((sentence, index, arr) => {
				sentence.id = index + 1;
			});
			box.sentences = onlyWithText;

			return box;
		});
		console.log('white space', res);
		return res;
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
	function moveAll(weeklyRepeats) {
		const lastBox = weeklyRepeats.find((el) => el.repeat.count == 7);
		let newWeeklyRepeats = weeklyRepeats.filter((el) => {
			if (el.repeat.count != 7) {
				el.repeat.count += 1;
				return el;
			}
		});
		const new7DayBox = create7DayRep(lastBox);

		const newBox = createBox();
		newWeeklyRepeats.unshift(newBox);

		newData.set(newWeeklyRepeats);

		sendPost({ day7: new7DayBox, week1: newBox });
	}

	function addNewSentence(box_id, sentence_id) {
		newData.update((arr) => {
			const box = arr.find((box) => box.box_id == box_id);

			const Length = box.sentences.length;
			const LastSentence = box.sentences[Length - 1];

			box.sentences.push({ text: '', id: LastSentence.id ? LastSentence.id + 1 : LastSentence.id });

			return arr;
		});
	}
	function deleteBoxIfEmpty(box_id, sentence_id) {
		const Text = $newData
			.find((box) => box.box_id == box_id)
			.sentences.find((sen) => sen.id == sentence_id).text;

		if (!Text) {
			newData.update((value) => {
				console.log('update');
				const box = value.find((box) => box.box_id == box_id);
				const newSentences = box.sentences.filter((sentence) => sentence.text);
				box.sentences = newSentences;
				return value;
			});
		}
	}
	function key_down_handler(event) {
		const { key } = event;
		const { box_id, sentence_id } = $isFocusDiv;

		if (key == 'Enter') {
			if (!$onFocusDiv) return;
			newData.update((boxes) => {
				let box = boxes.find((box) => box.box_id == box_id);
				const length = box.sentences.length;
				box.sentences.push({ text: '', id: length + 1 });
				return boxes;
			});
		} else if (key == 'Backspace') {
			console.log('backspace');
			deleteBoxIfEmpty(box_id, sentence_id);
		}
	}
</script>

<svelte:window on:beforeunload={close_event_handler} on:keydown={(e) => key_down_handler(e)} />

<div class="weekly surface">
	<SideBar />
	<DropMenu />
	<Data />
	<div id="editor">
		<button on:click={() => areThereAnyChanges($newData, $oldData)}>Compare</button>
		<button class="border border-red-600 rounded-sm" on:click={() => moveAll($newData)}
			>Move all</button
		>
		<button
			on:click={() => {
				document.execCommand('bold');
				console.log($newData);
			}}>Bold</button
		>
		<button on:click={() => console.log($newData)}>log</button>
		{#key $newData}
			{#each $newData as repeat}
				<Editor {repeat} />
			{/each}
		{/key}
	</div>
	<div id="space" />
</div>

<style>
</style>
