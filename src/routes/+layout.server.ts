import { loadWeeklyRepeats } from '$lib/api/google-api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

  const data = await loadWeeklyRepeats()
      console.log('work work work');
      
  return {
    weeklyRepeats: JSON.stringify(data.sort((a,b) => a.repeat.count - b.repeat.count))
  };
}