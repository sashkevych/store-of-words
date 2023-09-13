import { json } from '@sveltejs/kit';
import { updateWorkLog, updateWeeklySentences, moveAll } from '$lib/api/google-api';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { day7, week1 } = await request.json();

	await moveAll(day7, week1);

	return json(1 + 1);
}

/** @type {import('./$types').RequestHandler} */
export async function PUT({ request, url }) {
	const { content } = await request.json();

	const queryParams = new URLSearchParams(url.search);
	const action = queryParams.get('action');

	if (action === 'updateWeekly') {
		await updateWeeklySentences(content);
	} else if (action === 'updateWorkLog') {
		await updateWorkLog(content);
	}
	return json(1 + 1);
}
