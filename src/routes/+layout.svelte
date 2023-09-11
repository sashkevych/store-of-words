<script>
	import '../app.css';
	import { alsoToday, newData, oldData, workLog } from '../store';
	export let data;

	oldData.set(JSON.parse(data.weeklyRepeats));
	newData.set(JSON.parse(data.weeklyRepeats));
	alsoToday.set(JSON.parse(data.alsoTodayRepeats));
	workLog.set(JSON.parse(data.workLog));

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

	async function sendPut(content) {
		await fetch('http://localhost:5173/gcp', {
			method: 'PUT',
			body: JSON.stringify({ content }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
</script>

<svelte:window on:beforeunload={close_event_handler} />
<slot />
