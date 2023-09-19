import { loadWeeklyRepeats, loadAlsoTodayRepeats, loadWorkLog } from '$lib/api/google-api.js';
import { alsoToday } from '$lib/scripts/data-for-test/also-today.js';
import { weekly } from '$lib/scripts/data-for-test/weekly.js';
import { work } from '$lib/scripts/data-for-test/work-log.js';

/** @type {import('./$types').LayoutServerLoad} */
export async function load(event) {
	const theme = event.locals.theme;
	// const data = await loadWeeklyRepeats();
	// const today = await loadAlsoTodayRepeats();
	// const workLog = await loadWorkLog();

	const data = weekly;
	const today = alsoToday;
	const workLog = work;
	return {
		theme,
		weeklyRepeats: JSON.stringify(data.sort((a, b) => a.repeat.count - b.repeat.count)),
		alsoTodayRepeats: JSON.stringify(today),
		workLog: JSON.stringify(workLog)
	};
}
