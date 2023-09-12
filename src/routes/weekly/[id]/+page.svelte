<script>
	/** @type {import('./$types').PageData} */
	export let data;

	import { newData, oldData, onFocusDiv, isFocusDiv } from '../../../store';

	import Data from '$lib/components/data/Data.svelte';
	import SideBar from '$lib/components/side-bar/SideBar.svelte';
	import Editor from '$lib/components/widgets/Editor.svelte';
	import DropMenu from '$lib/components/widgets/DropMenu.svelte';

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
			console.log('1');
			if (!$onFocusDiv) return;
			console.log('2');
			newData.update((boxes) => {
				let box = boxes.find((box) => {
					console.log(box.box_id == box_id);
					console.log('ID 1',box.box_id, 'ID 2',box_id);
					return box.box_id == box_id;
				});
				const length = box.sentences.length;
				box.sentences.push({ text: '', id: length + 1 });
				console.log('Box after update :',box);
				return boxes;
			});
		} else if (key == 'Backspace') {
			console.log('backspace');
			deleteBoxIfEmpty(box_id, sentence_id);
		}
	}

	$: box = $newData.find((box) => box.repeat.count == data.id);

	const isWeekly = true;
</script>

<svelte:window on:keydown={(e) => key_down_handler(e)} />

<div class="weekly surface">
	<SideBar />
	<DropMenu dataArray={$newData} {isWeekly} />
	<Data />
	<Editor {box} {isWeekly} />
	<div id="space" />
</div>
