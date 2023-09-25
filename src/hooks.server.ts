/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {

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
		const response = await resolve(event, {
			transformPageChunk: ({ html }) => html.replace('data-theme=""', `data-theme="${theme}"`)
		});
		return response
	}

	const response = await resolve(event);
	return response;
}
