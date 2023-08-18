import { loadWeeklyRepeats } from '$lib/api/google-api.js';

import { json } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

  const res = await loadWeeklyRepeats()
  
  return {
    data: JSON.stringify(res)
  };
}