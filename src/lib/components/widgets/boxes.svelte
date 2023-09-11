<script>
	import { newData } from '../../../store';
	export let weeklyRepeats = [];
	export let isWeekly = true;
	export let label = '';
	export let horizontal = false;
	export let vertical = false;

	import { createBox } from '$lib/scripts/newbox';
	import { create7DayRep } from '$lib/scripts/sevenrep';

	async function sendPost(content) {
		await fetch('http://localhost:5173/gcp', {
			method: 'POST',
			body: JSON.stringify(content),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}

	function moveAll(weeklyRepeats) {
		console.log('move all');
		const lastBox = weeklyRepeats.find((el) => el.repeat.count == 7);
		let newWeeklyRepeats = weeklyRepeats.filter((el) => {
			if (el.repeat.count != 7) {
				el.repeat.count += 1;
				return el;
			}
		});
		const new7DayBox = create7DayRep(lastBox);

		const newBox = createBox();
		newWeeklyRepeats.unshift(newBox);

		newData.set(newWeeklyRepeats);

		sendPost({ day7: new7DayBox, week1: newBox });
	}
</script>

{#if horizontal}
	<div class="home-widget surface-container">
		<div class="headline-position">
			<div class="headline-small on-surface-text">{label}</div>
			{#if isWeekly}
				<div><button on:click={() => moveAll($newData)}>Move all</button></div>
			{/if}
		</div>
		<div class="repeats-container">
			{#each weeklyRepeats as { sentences, repeat }}
				<a href="/weekly/{repeat.count}" class="repeat-box secondary">
					<div class="header-position title-medium on-secondary-text">
						First repeat: {repeat.count}
					</div>
					<div class="max-height">
						{#each sentences as { id, text }}
							<div class="sentence-position body-small on-secondary-text">
								<div>{id}.</div>
								<div class="text-hidden">{@html text}</div>
							</div>
						{/each}
					</div>
				</a>
			{/each}
		</div>
	</div>
{/if}

{#if vertical}
	<div class="surface-container weekly-widget">
		{#each weeklyRepeats as { sentences, repeat }}
			<a href="/weekly/{repeat.count}" class="repeat-box-vertical secondary">
				<div class="header-position title-medium on-secondary-text">
					First repeat: {repeat.count}
				</div>
				<div class="max-width">
					{#each sentences as { id, text }}
						<div class="sentence-position body-small on-secondary-text">
							<div>{id}.</div>
							<div class="">{@html text}</div>
						</div>
					{/each}
				</div>
			</a>
		{/each}
	</div>
{/if}
