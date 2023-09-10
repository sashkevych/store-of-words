import { loadWeeklyRepeats, loadAlsoTodayRepeats } from '$lib/api/google-api.js';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ params }) {
	const data = await loadWeeklyRepeats();
	const today = await loadAlsoTodayRepeats();

	return {
		weeklyRepeats: JSON.stringify(data.sort((a, b) => a.repeat.count - b.repeat.count)),
		alsoTodayRepeats: JSON.stringify(today)
	};
}
