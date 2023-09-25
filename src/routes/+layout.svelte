<script>
	import { page } from '$app/stores';
	import '../app.css';
	import {
		mouseOver,
		mouseLeave,
		visible,
		alsoToday,
		newData,
		oldData,
		workLog,
		oldWorkLog,
		theme
	} from '../store';
	import { close_event_handler } from '$lib/scripts/close-event';
	import { addLabels } from '$lib/scripts/addLables';

	export let data;

	oldData.set(JSON.parse(data.weeklyRepeats));
	newData.set(addLabels(JSON.parse(data.weeklyRepeats)));
	alsoToday.set(JSON.parse(data.alsoTodayRepeats));
	workLog.set(JSON.parse(data.workLog));
	oldWorkLog.set(JSON.parse(data.workLog));

	function clickHandler() {
		if ($mouseLeave && !$mouseOver) {
			visible.set(false);
		}
	}
	function removeWhiteSpace(newArr) {
		const res = newArr.filter((box) => {
			const onlyWithText = box.sentences.filter((sentence, i, arr) => {
				const IsEmpty = sentence?.text.replace(/&nbsp;/g, '');

				sentence.text = IsEmpty;
				
				return {
					text: IsEmpty,
					id: sentence.id
				};
			});
			onlyWithText.forEach((sentence, index, arr) => {
				sentence.id = index + 1;
			});
			box.sentences = onlyWithText;

			return box;
		});
		return res;
	}
	function areThereAnyChanges(newArr, oldArr) {
		const changes = removeWhiteSpace(newArr).filter((el, i) => {
			const el1 = el.sentences;
			const el2 = oldArr[i].sentences;
			const isAnyChange = el1.some((el, i, arr) => {
				// if (!el2[i]?.text) return true;
				// if (!el.text) return true;
				if (el.text != el2[i].text) return true;
				if (el2[i + 1]?.text && !arr[i + 1]?.text) return true;
				return false;
			});

			if (isAnyChange) return el;
		});
		return changes;
	}
</script>

<svelte:head>
	<script src="{$page.url.origin}/src/lib/scripts/theme/setTheme.js"></script>
	<title>RepeatApp</title>
</svelte:head>
<svelte:window
	on:beforeunload={() => close_event_handler($newData, $oldData, $workLog, $oldWorkLog)}
	on:click={clickHandler}
/>
<button on:click={() => areThereAnyChanges($newData, $oldData)}>Compare</button>
<button on:click={() => console.log($newData)}>newData</button>
<slot />
