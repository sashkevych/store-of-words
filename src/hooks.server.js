/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    console.time("LOAD")
    const response = await resolve(event);
    console.timeEnd("LOAD")
    return response;
}