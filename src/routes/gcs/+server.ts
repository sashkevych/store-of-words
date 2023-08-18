import { json } from '@sveltejs/kit';
import {  } from '$lib/api/google-api.js';
import {  } from '../../../fs/app.js';

export async function POST({ request, cookies }) {
	console.log('POST FUNCTION ! ! ! !  !');
	

	return json({ res: '123' });
}
