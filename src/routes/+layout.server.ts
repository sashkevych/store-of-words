import { loadWeeklyRepeats, loadAlsoTodayRepeats, loadWorkLog } from '$lib/api/google-api.js';
import { redisGet, redisSet } from '$lib/redis/redis';

import { alsoToday } from '$lib/scripts/data-for-test/also-today.js';
import { weekly } from '$lib/scripts/data-for-test/weekly.js';
import { work } from '$lib/scripts/data-for-test/work-log.js';

async function getData(key, apiCall) {
	const cached = redisGet(key);
	if (cached) return cached;

	const data = await apiCall();
	redisSet(key, data);

	return data;
}

/** @type {import('./$types').LayoutServerLoad} */
export async function load(event) {
	// const weeklyData = weekly;
	// const today = alsoToday;
	// const workLog = work;

	const today = await loadAlsoTodayRepeats();

	const weeklyData = await getData('weekly', loadWeeklyRepeats);
	const workLog = await getData('worklog', loadWorkLog);

	return {
		weeklyRepeats: JSON.stringify(weeklyData.sort((a, b) => a.repeat.count - b.repeat.count)),
		alsoTodayRepeats: JSON.stringify(today),
		workLog: JSON.stringify(workLog)
	};
}
