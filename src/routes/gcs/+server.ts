import { json } from '@sveltejs/kit';
import { qwe } from '$lib/api/google-api.js';
import { asd,writeSevenFiles,deleteSevenFiles } from '../../../fs/app.js';

export async function POST({ request, cookies }) {
	// const res = await qwe()
	// console.log(res);

	// await writeSevenFiles(['a','b','c','d','e','f','g'])
	await deleteSevenFiles(['a','b','c','d','e','f','g'])

	return json({ res: '123' });
}
