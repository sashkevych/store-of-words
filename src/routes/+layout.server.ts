import { loadWeeklyRepeats } from '$lib/api/google-api.js';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ params }) {

  const data = await loadWeeklyRepeats()
      
  return {
    weeklyRepeats: JSON.stringify(data.sort((a,b) => a.repeat.count - b.repeat.count))
  };
}