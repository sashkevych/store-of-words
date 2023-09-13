<script>
	import SideBar from '$lib/components/side-bar/SideBar.svelte';
	import Data from '$lib/components/data/Data.svelte';
	import Editor from '$lib/components/widgets/Editor.svelte';
	import { workLog, oldWorkLog, onFocusDiv, isFocusDiv } from '../../store.js';

	let box = [];
	workLog.subscribe((value) => (box = value[0]));

	const isWorkLog = true;

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

	async function areThereAnyChanges(newArr, oldArr) {
		const changes = removeWhiteSpace(newArr).filter((el, i) => {
			const el1 = el.sentences;
			const el2 = oldArr[i].sentences;

			const isAnyChange = el1.some((el, i, arr) => {
				if (!el2[i]?.text) return true;
				if (!el.text) return true;
				if (el2[i + 1]?.text && !arr[i + 1]?.text) return true;
				if (el.text != el2[i].text) return true;
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
	async function test() {
		const res = await areThereAnyChanges($workLog, $oldWorkLog)
		console.log(res);

	}
</script>

<svelte:window on:keydown={(e) => key_down_handler(e, workLog)} />
<button on:click={test}>Compare Work logs</button>
<button on:click={() => console.log($workLog)}>WorkLog</button>
<button on:click={() => console.log($oldWorkLog)}>oldWorkLog</button>
<div class="work-log">
	<SideBar />
	<Data />
	<Editor {box} {isWorkLog} />
	<div id="space" />
</div>
