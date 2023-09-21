import { json } from '@sveltejs/kit';
import { updateWorkLog, updateWeeklySentences, moveAll } from '$lib/api/google-api';
import { redis } from '$lib/redis/redis';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { day7, week1 } = await request.json();

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
		redis.set('weekly', JSON.stringify(content), 'EX', 6000);
	} else if (action === 'updateWorkLog') {
		redis.set('worklog', JSON.stringify(content), 'EX', 6000);
		await updateWorkLog(changes);
	}
	return json(1 + 1);
}
