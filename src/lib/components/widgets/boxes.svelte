<script>
	import { newData } from '../../../store';
	export let weeklyRepeats = [];
	export let isWeekly = false;
	export let isAlsoToday = false;
	export let label = '';
	export let horizontal = false;
	export let vertical = false;

	export let shouldApplyTransition = true;

	import { createBox } from '$lib/scripts/newbox';
	import { create7DayRep } from '$lib/scripts/sevenrep';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	import { addLabels } from '$lib/scripts/addLables';

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

		const labeledRepeats = addLabels(newWeeklyRepeats);

		newData.set(labeledRepeats);

		sendPost({ day7: new7DayBox, week1: newBox, newData: labeledRepeats });
	}

	var ready = false;
	onMount(() => {
		ready = true;
	});
</script>

{#if horizontal}
	<div class="home-widget surface-container-low">
		<div class="headline-position">
			<div class="headline-small on-surface-text">{label}</div>
			{#if isWeekly}
				<button class="move-all" on:click={() => moveAll($newData)}>
					<div class="primary" style="width: 100%; height: 100%;  border-radius: 100px;">
						<div
							style="align-self: stretch; flex: 1 1 0; padding-left: 24px; padding-right: 24px; padding-top: 10px; padding-bottom: 10px; justify-content: center; align-items: center; gap: 8px; display: inline-flex"
							class="on-primary-text label-large"
						>
							Move all
						</div>
					</div>
				</button>
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
									<div class="text-hidden">{@html text}</div>
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
									<div class="text-hidden">{@html text}</div>
								</div>
							{/each}
						</div>
					</a>
				{/if}
			{/each}
		</div>
	</div>
{/if}
{#if vertical && ready}
	<div
		class="surface-container weekly-widget"
		transition:fly={{
			y: -4,
			delay: shouldApplyTransition ? 400 : 0,
			duration: shouldApplyTransition ? 350 : 0
		}}
	>
		{#each weeklyRepeats as { sentences, repeat, box_id }}
			{#if isWeekly}
				<a
					href="/weekly/{repeat.label.toLowerCase()}"
					class="repeat-box-vertical secondary-container"
				>
					<div class="header-position title-medium on-secondary-container-text">
						{repeat.label} repeat
					</div>
					<div class="max-width max-height-ver">
						{#each sentences as { id, text }}
							<div class="sentence-position body-small on-secondary-container-text">
								<div>{id}.</div>
								<div class="text-hidden-ver">{@html text}</div>
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
					<div class="max-width max-height-ver">
						{#each sentences as { id, text }}
							<div class="sentence-position body-small on-secondary-container-text">
								<div>{id}.</div>
								<div class="text-hidden-ver">{@html text}</div>
							</div>
						{/each}
					</div>
				</a>
			{/if}
		{/each}
	</div>
{/if}

<style>
	.max-height-ver {
		height: 85px;
		overflow: hidden;
	}
	.text-hidden-ver {
		width: 257px;
		overflow: hidden;
	}
	.move-all {
		cursor: pointer;
	}
	.move-all:hover > div {
		background-color: var(--md-sys-color-primary-2);
		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	}

	.move-all:hover > div > div {
		font-weight: 500;
	}

	.move-all:active > div > div {
		font-weight: 300;
	}

	.repeat-box {
		width: 200px;
		white-space: normal;
		border-radius: 24px;

		transition: transform 0.1s, border-radius 0.3s ease-in-out;

		flex: 0 0 auto;
	}
	.repeat-box:active {
		transform: scale(0.98);
	}
	.repeat-box:hover {
		border-radius: 48px;
		/* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
		background-color: var(--md-sys-color-secondary-container-2);
	}
	.repeat-box:hover .header-position {
		font-weight: 500;
	}

	/* Vertical */
	.repeat-box-vertical {
		width: 100%;
		height: 140px;

		overflow: hidden;
		border-radius: 24px;
		transition: transform 0.1s, border-radius 0.3s ease-in-out;
	}
	.repeat-box-vertical:hover {
		border-radius: 48px;
		/* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
	}
	.repeat-box-vertical:hover .header-position {
		font-weight: 500;
	}
	.repeat-box-vertical:active {
		transform: scale(0.98);
	}
</style>
