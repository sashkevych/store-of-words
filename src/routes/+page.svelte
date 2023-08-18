<script>
	import { onMount } from 'svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	let weeklyRepeats = JSON.parse(data.weeklyRepeats);

	function compareSentences(arr1, arr2, box_id) {
		let obj = {
			box_id: box_id,
			sentences: []
		};

		arr1.forEach((el, i) => {
			const el1 = el;
			const el2 = arr2[i];

			if (el1.text != el2.text) {
				obj.sentences.push({
					id: el1.id,
					text: el2.text
				});
			} else {
			}
		});

		return obj;
	}

	async function compareBuckets(bucket_1, bucket_2) {
		console.log('COMPARE ! ! ');
		const result = [];

		bucket_1.forEach((el, i) => {
			const el1 = el.sentences;
			const el2 = bucket_2[i].sentences;

			let res = compareSentences(el1, el2, el.box_id);

			if (res.sentences[0]) result.push(res);
		});
		
		return result;
	}

	async function sendPost(content) {
		const response = await fetch('http://localhost:5173/gcs', {
			method: 'POST',
			body: JSON.stringify(content),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const { res } = await response.json();
		console.log('Post : ', res);
	}

	let a = 1;

	onMount(() => {

		return async () => {

			let res =  await compareBuckets(JSON.parse(data.weeklyRepeats), weeklyRepeats);

			console.log(res);
		};
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#each weeklyRepeats as repeat}
	<div>
		{repeat.box_id} :
		{#each repeat.sentences as { id, text }}
			<input type="text" bind:value={text} />
		{/each}
	</div>
{/each}
