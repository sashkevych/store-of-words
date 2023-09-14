<script>
	import '../app.css';
	import {
		mouseOver,
		mouseLeave,
		visible,
		alsoToday,
		newData,
		oldData,
		workLog,
		oldWorkLog
	} from '../store';
	export let data;

	function label(count) {
		if (count == 1) return 'First';
		if (count == 2) return 'Second';
		if (count == 3) return 'Third';
		if (count == 4) return 'Fourth';
		if (count == 5) return 'Fifth';
		if (count == 6) return 'Sixth';
		if (count == 7) return 'Seventh';
	}
	function addLabels(boxes) {
		return boxes.map((box) => {
			box.repeat.label = label(box.repeat.count);
			return box;
		});
	}

	oldData.set(JSON.parse(data.weeklyRepeats));
	newData.set(addLabels(JSON.parse(data.weeklyRepeats)));
	alsoToday.set(JSON.parse(data.alsoTodayRepeats));
	workLog.set(JSON.parse(data.workLog));
	oldWorkLog.set(JSON.parse(data.workLog));

	async function close_event_handler() {
		const changes = await areThereAnyChanges($newData, $oldData);
		const workLogChanges = await areThereAnyChanges($workLog, $oldWorkLog);
		if (changes[0]) await sendPut(changes, 'updateWeekly');
		if (workLogChanges[0]) await sendPut(workLogChanges, 'updateWorkLog');

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

	async function sendPut(content, action) {
		await fetch(`http://localhost:5173/gcp/?action=${action}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ content })
		});
	}

	function clickHandler() {
		if ($mouseLeave && !$mouseOver) {
			visible.set(false);
		}
	}
</script>

<svelte:window on:beforeunload={close_event_handler} on:click={clickHandler} />
<slot />
