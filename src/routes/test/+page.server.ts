import { loadWeeklyRepeats } from '$lib/api/google-api.js';

import { json } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

  const data = await loadWeeklyRepeats()
      
  return {
    weeklyRepeats: JSON.stringify(data.sort((a,b) => a.repeat.count - b.repeat.count))
  };
}