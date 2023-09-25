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
</script>

<svelte:head>
	<script src="{$page.url.origin}/src/lib/scripts/theme/setTheme.js"></script>
	<title>RepeatApp</title>
</svelte:head>
<svelte:window on:beforeunload={() => close_event_handler($newData,$oldData,$workLog,$oldWorkLog)} on:click={clickHandler} />

<slot />
