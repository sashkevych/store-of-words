/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	console.time('LOAD');

	let theme: string | null = null;

	const newTheme = event.url.searchParams.get('theme');
	const cookieTheme = event.cookies.get('colortheme');

	if (newTheme) {
		theme = newTheme;
	} else if (cookieTheme) {
		theme = cookieTheme;
	}

	event.locals.theme = theme
	if (theme) {
		console.log('theme');
        
		const response = await resolve(event, {
			transformPageChunk: ({ html }) => html.replace('data-theme=""', `data-theme="${theme}"`)
		});
		console.timeEnd('LOAD');
		return response
	}

	const response = await resolve(event);
	console.timeEnd('LOAD');
	return response;
}
