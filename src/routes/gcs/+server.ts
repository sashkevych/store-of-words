import { json } from '@sveltejs/kit';
import { updateSentences } from '$lib/api/google-api';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	console.log('QWEQWEQWEWQ');

	const { a, b } = await request.json();
	return json(a + b);
}



export async function PUT({ request }) {
	const { content } = await request.json();


	await updateSentences(content)

	console.log('content',content[0].sentences);
	
	
	return json(1 + 1);
}

