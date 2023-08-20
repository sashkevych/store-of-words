import { loadWeeklyRepeats } from '$lib/api/google-api.js';

import { json } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

  const res = await loadWeeklyRepeats()
    console.log('res : ',JSON.stringify(res));
    
  return {
    weeklyRepeats: JSON.stringify(res)
  };
}