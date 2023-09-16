import { loadWeeklyRepeats, loadAlsoTodayRepeats, loadWorkLog } from '$lib/api/google-api.js';

/** @type {import('./$types').LayoutServerLoad} */
export async function load(event) {
	const theme = event.locals.theme;

	const data = await loadWeeklyRepeats();
	const today = await loadAlsoTodayRepeats();
	const workLog = await loadWorkLog();
	return {
		theme,
		weeklyRepeats: JSON.stringify(data.sort((a, b) => a.repeat.count - b.repeat.count)),
		alsoTodayRepeats: JSON.stringify(today),
		workLog: JSON.stringify(workLog)
	};
}
