import { json } from '@sveltejs/kit';
import {  } from '$lib/api/google-api.js';
import {  } from '../../../fs/app.js';

export async function POST({ request, cookies }) {
	// const res = await qwe()
	// console.log(res);


	return json({ res: '123' });
}
