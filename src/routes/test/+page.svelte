<script>
	/** @type {import('./$types').PageData} */
	import { createBox } from '$lib/scripts/newbox';
	import { create7DayRep } from '$lib/scripts/sevenrep';

	import Editor from '$lib/components/widgets/Editor.svelte';

	import { oldData, newData, isFocusDiv } from '../../store';



	function removeWhiteSpace(newArr) {
		const res = newArr.filter((box) => {
			// i need to fix a ID's
			const onlyWithText = box.sentences.filter((sentence) => {
				sentence.text = sentence.text.trim();

				return sentence.text.trim();
			});
			box.sentences = onlyWithText;

			return box;
		});

		return res;
	}
	async function areThereAnyChanges(newArr, oldArr) {
		const changes = removeWhiteSpace(newArr).filter((el, i) => {
			const el1 = el.sentences;
			const el2 = oldArr[i].sentences;

			const thereIsRemovedText = el1.some((el, i) => {
				if (el2[i]?.text && !el?.text) {
					return true;
				}
			});
			console.log('thereIsRemovedText', thereIsRemovedText);
			if (thereIsRemovedText) return el;

			const thereIsUpdateOrNew = el1.some((el, i) => {
				if (!el2[i]?.text) {
					return true;
				}
				return el.text != el2[i].text;
			});
			console.log('thereIsUpdateOrNew', thereIsUpdateOrNew);
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
	async function close_event_handler() {
		// whiteSpaceFilter($newData,$oldData)
		const changes = await areThereAnyChanges($newData, $oldData);
		console.log(changes);
		if (changes[0]) await sendPut(changes);

		return null;
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
		// const sentenceById = box.sentences.find(sen => sen.id == sentence_id)

		if (!Text) {
			console.log('!Text', !Text);
			newData.update((value) => {
				console.log('update');
				const box = value.find((box) => box.box_id == box_id);
				const newSentences = box.sentences.filter((sentence) => sentence.text);
				box.sentences = newSentences;
				return value;
			});
			console.log('newData ', $newData, '$oldData', $oldData);
		}
	}
	function key_down_handler(event) {
		const { key, target } = event;

		const { box_id, sentence_id } = $isFocusDiv;
		if (key == 'Enter') {
			if (!$isFocusDiv.event) return;
			const newDiv = document.createElement('div');
			const newContent = document.createTextNode('Hi there and greetings!');
			newDiv.appendChild(newContent);

			target.after(newDiv);

			addNewSentence(box_id, sentence_id);
		} else if (key == 'Backspace') {
			console.log('backspace');
			deleteBoxIfEmpty(box_id, sentence_id);
		}
	}
</script>

<svelte:window on:beforeunload={close_event_handler} on:keydown={(e) => key_down_handler(e)} />
<button on:click={() => areThereAnyChanges($newData, $oldData)}>Compare</button>
<button class="border border-red-600 rounded-sm" on:click={() => moveAll($newData)}>Move all</button
>
<button on:click={() => {
	document.execCommand('bold')
	console.log($newData);
	
}}>Bold</button>


{#key $newData}
	{#each $newData as repeat}
		<Editor {repeat} />
	{/each}
{/key}
