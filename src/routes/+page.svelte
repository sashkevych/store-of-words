<script>
	import { onDestroy, onMount } from 'svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	let weeklyRepeats = JSON.parse(data.weeklyRepeats)

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


	let a = 1;

	onMount(() => {});
	onDestroy(() => {
		function compareSentences(arr1, arr2) {
			for (let i = 0; i < arr1.length; i++) {
				const el1 = arr1[i].sentences;
				const el2 = arr2[i].sentences;

				if (el1.text != el2.text) {
					console.log(`Text mismatch for sentence with ID ${el1.id} at index ${i}`);
				} else {
					console.log(`Text equal for sentence with ID ${el1.id}`);
				}
			}
		}
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#each weeklyRepeats as repeat}
	<div>
		{repeat.box_id} :
		{#each repeat.sentences as {id,text}}
			<input type="text" bind:value={text}>
		{/each}
	</div>
{/each}
