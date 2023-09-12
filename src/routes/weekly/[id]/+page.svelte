<script>
	/** @type {import('./$types').PageData} */
	export let data;

	import { newData, oldData, onFocusDiv, isFocusDiv } from '../../../store';

	import Data from '$lib/components/data/Data.svelte';
	import SideBar from '$lib/components/side-bar/SideBar.svelte';
	import Editor from '$lib/components/widgets/Editor.svelte';
	import DropMenu from '$lib/components/widgets/DropMenu.svelte';

	function deleteBoxIfEmpty(box_id, sentence_id, store) {
		let storeValue;
		store.subscribe((value) => (storeValue = value));

		const Text = storeValue
			.find((box) => box.box_id == box_id)
			.sentences.find((sen) => sen.id == sentence_id).text;
		if (!Text) {
			store.update((value) => {
				console.log('update');
				const box = value.find((box) => box.box_id == box_id);
				const newSentences = box.sentences.filter((sentence) => sentence.text);
				box.sentences = newSentences;
				return value;
			});
			setTimeout(() => focusOnNewElement(box_id, sentence_id), 0);
		}
	}
	function focusOnNewElement(box_id, sentence_id) {
		const parent = document.getElementById(box_id);
		var lastChild = parent.lastElementChild?.lastElementChild;
		isFocusDiv.set({ event: true, box_id, sentence_id });
		lastChild.focus();
	}
	async function key_down_handler(event, store) {
		const { key } = event;

		const { box_id, sentence_id } = $isFocusDiv;

		if (key == 'Enter') {
			event.preventDefault();
			if (!$onFocusDiv) return;
			let sentence_id;
			store.update((boxes) => {
				let box = boxes.find((box) => box.box_id == box_id);
				console.log(box);
				sentence_id = box.sentences.length + 1;
				box.sentences.push({ text: '', id: sentence_id });
				return boxes;
			});
			setTimeout(() => focusOnNewElement(box_id, sentence_id), 0);
		} else if (key == 'Backspace') {
			deleteBoxIfEmpty(box_id, sentence_id, store);
		}
	}

	$: box = $newData.find((box) => box.repeat.count == data.id);

	const isWeekly = true;
</script>

<svelte:window on:keydown={(e) => key_down_handler(e, newData)} />

<div class="weekly surface">
	<SideBar />
	<DropMenu dataArray={$newData} {isWeekly} />
	<Data />
	<Editor {box} {isWeekly} />
	<div id="space" />
</div>
