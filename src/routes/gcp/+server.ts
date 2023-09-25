import { json } from '@sveltejs/kit';
import { updateWorkLog, updateWeeklySentences, moveAll } from '$lib/api/google-api';
import { redisSet } from '$lib/redis/redis';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { day7, week1, newData } = await request.json();

	redisSet('weekly', newData);
	await moveAll(day7, week1);

	return json(1 + 1);
}

/** @type {import('./$types').RequestHandler} */
export async function PUT({ request, url }) {
	const { changes, content } = await request.json();

	const queryParams = new URLSearchParams(url.search);
	const action = queryParams.get('action');

	if (action === 'updateWeekly') {
		await updateWeeklySentences(changes);
		redisSet('weekly', content);
	} else if (action === 'updateWorkLog') {
		redisSet('worklog', content);
		await updateWorkLog(changes);
	}
	return json(1 + 1);
}
