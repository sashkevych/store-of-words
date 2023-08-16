import { json } from '@sveltejs/kit';
import { qwe } from "$lib/api/google-api.js";
import { ID,KEY,EMAIL } from '$env/static/private';

export async function POST({ request, cookies }) {
    
    
    const res = await qwe()
    // console.log(res);
    
	return json({res:res});
}
