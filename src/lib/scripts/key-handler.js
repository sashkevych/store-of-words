function fixIds(sentences) {
	return sentences.map((el, i) => {
		el.id = i + 1;

		return el;
	});
}
function deleteBoxIfEmpty(box_id, sentence_id, store, focusdDiv) {
	console.log(box_id, sentence_id);
	let storeValue;
	store.subscribe((value) => (storeValue = value));

	const Text = storeValue
		.find((box) => box.box_id == box_id)
		.sentences.find((sen) => sen.id == sentence_id)?.text;
	if (!Text) {
		store.update((value) => {
			const box = value.find((box) => box.box_id == box_id);
			if (box.sentences.length == 1) return value;
			const newSentences = box.sentences.filter((sentence) => sentence.text);

			box.sentences = fixIds(newSentences);
			return value;
		});

		setTimeout(() => focusOnNewElement(box_id, sentence_id, focusdDiv), 0);
	}
}
function setFocusToEnd(element) {
	element.focus();

	var range = document.createRange();
	range.selectNodeContents(element);
	range.collapse(false);

	var selection = window.getSelection();
	selection.removeAllRanges();
	selection.addRange(range);
}
function focusOnNewElement(box_id, sentence_id, focusdDiv) {
	const parent = document.getElementById(box_id);
	var lastChild = parent.lastElementChild?.lastElementChild;

	focusdDiv.set({ event: true, box_id, sentence_id: sentence_id - 1 });
	setFocusToEnd(lastChild);
}
export async function key_down_handler(event, store, focusdDiv, onFocusDiv) {
	let focusdDivStore;
	focusdDiv.subscribe((vl) => (focusdDivStore = vl));

	const { key } = event;

	const { box_id, sentence_id } = focusdDivStore;

	if (key == 'Enter') {
		event.preventDefault();
		if (!onFocusDiv) return;
		let sentence_id;
		store.update((boxes) => {
			let box = boxes.find((box) => box.box_id == box_id);
			sentence_id = box.sentences.length + 1;
			box.sentences.push({ text: '', id: sentence_id });
			return boxes;
		});
		focusdDiv.set({ event: true, box_id, sentence_id });
		console.log(focusdDivStore);
		setTimeout(() => focusOnNewElement(box_id, sentence_id, focusdDiv), 0);
	} else if (key == 'Backspace') {
		deleteBoxIfEmpty(box_id, sentence_id, store, focusdDiv);
	}
}
