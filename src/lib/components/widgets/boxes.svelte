<script>
	import { newData } from '../../../store';
	export let weeklyRepeats = [];
	export let isWeekly = false;
	export let isAlsoToday = false;
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
		const lastBox = weeklyRepeats.find((el) => el.repeat.label == 7);
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
	<div class="home-widget surface-container-low">
		<div class="headline-position">
			<div class="headline-small on-surface-text">{label}</div>
			{#if isWeekly}
				<button class="move-all">
					<div class="primary" style="width: 100%; height: 100%;  border-radius: 100px;">
						<div
							style="align-self: stretch; flex: 1 1 0; padding-left: 24px; padding-right: 24px; padding-top: 10px; padding-bottom: 10px; justify-content: center; align-items: center; gap: 8px; display: inline-flex"
						>
							<div
								class="on-primary-text label-large"
								style="text-align: center; font-family: Roboto; font-weight: 500; line-height: 20px; letter-spacing: 0.10px; word-wrap: break-word"
							>
								Move all
							</div>
						</div>
					</div>
				</button>
				<!-- <div><button on:click={() => moveAll($newData)}>Move all</button></div> -->
			{/if}
		</div>
		<div class="repeats-container">
			{#each weeklyRepeats as { sentences, repeat, box_id }}
				{#if isWeekly}
					<a href="/weekly/{repeat.label.toLowerCase()}" class="repeat-box secondary-container">
						<div class="header-position title-medium on-secondary-container-text">
							{repeat.label} repeat
						</div>
						<div class="max-height">
							{#each sentences as { id, text }}
								<div class="sentence-position body-small on-secondary-container-text">
									<div>{id}.</div>
									<div class="text-hidden">{text}</div>
								</div>
							{/each}
						</div>
					</a>
				{/if}
				{#if isAlsoToday}
					<a href="/also-today/{box_id}" class="repeat-box secondary-container">
						<div class="header-position title-medium on-secondary-container-text">
							{repeat.date.value}
						</div>
						<div class="max-height">
							{#each sentences as { id, text }}
								<div class="sentence-position body-small on-secondary-container-text">
									<div>{id}.</div>
									<div class="text-hidden">{text}</div>
								</div>
							{/each}
						</div>
					</a>
				{/if}
			{/each}
		</div>
	</div>
{/if}

{#if vertical}
	<div class="surface-container weekly-widget">
		{#each weeklyRepeats as { sentences, repeat, box_id }}
			{#if isWeekly}
				<a
					href="/weekly/{repeat.label.toLowerCase()}"
					class="repeat-box-vertical secondary-container"
				>
					<div class="header-position title-medium on-secondary-container-text">
						{repeat.label} repeat
					</div>
					<div class="max-width">
						{#each sentences as { id, text }}
							<div class="sentence-position body-small on-secondary-container-text">
								<div>{id}.</div>
								<div class="">{text}</div>
							</div>
						{/each}
					</div>
				</a>
			{/if}
			{#if isAlsoToday}
				<a href="/also-today/{box_id}" class="repeat-box-vertical secondary-container">
					<div class="header-position title-medium on-secondary-container-text">
						{repeat.date.value}
					</div>
					<div class="max-width">
						{#each sentences as { id, text }}
							<div class="sentence-position body-small on-secondary-container-text">
								<div>{id}.</div>
								<div class="">{text}</div>
							</div>
						{/each}
					</div>
				</a>
			{/if}
		{/each}
	</div>
{/if}

<style>
	.move-all {
		cursor: pointer;
	}

	.repeat-box {
		width: 200px;
		white-space: normal;
		border-radius: 24px;

		transition: border-radius 0.3s  ease-in-out;
		flex: 0 0 auto;
	}
	.repeat-box:hover {
		border-radius: 48px;
		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	}

	.repeat-box-vertical {
		width: 100%;
		height: 140px;

		overflow: hidden;
		border-radius: 24px;
		transition: border-radius 0.3s  ease-in-out;
	}
	.repeat-box-vertical:hover {
		border-radius: 48px;
		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	}
</style>
