<script>
    async function sendPost() {
		const response = await fetch('http://localhost:5173/gcs', {
			method: 'POST',
			body: JSON.stringify({ description: 'hello' }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const { res } = await response.json();
		console.log('Post : ', res);
	}

	
	
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>



