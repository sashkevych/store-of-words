import { json } from '@sveltejs/kit';
import { qwe } from '$lib/api/google-api.js';
import { asd } from '../../../fs/app.js';

export async function POST({ request, cookies }) {
	// const res = await qwe()
	// console.log(res);

    await asd()

	return json({ res: '123' });
}
