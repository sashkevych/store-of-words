import { json } from '@sveltejs/kit';
import { updateSentences, moveAll } from '$lib/api/google-api';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { day7, week1 } = await request.json();

	await moveAll(day7,week1);

	return json(1 + 1);
}

export async function PUT({ request }) {
	const { content } = await request.json();

	await updateSentences(content);

	return json(1 + 1);
}
