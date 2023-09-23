<script>
	import './style.css';

	import { workLog } from '../../../store';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	var ready = false;
	onMount(() => {
		ready = true;
	});
</script>

{#if ready}
	<div id="work-log" transition:fly={{ y: 2, delay: 200 }}>
		<div class="home-widget surface-container-low">
			<div class="worklog-headline-position headline-small on-surface-text">Work log</div>
			<a href="/work-log" class="repeats-container">
				<div class="secondary-container work-log-sentences-bg">
					{#each $workLog[0].sentences as { text, id }}
						<div
							class="sentence-position body-small on-secondary-container-text header-position margin-right"
						>
							<div>{id}.</div>
							<div>{@html text}</div>
						</div>
					{/each}
				</div>
			</a>
		</div>
	</div>
{/if}

<style>
	.margin-right {
		margin-right: 1.5rem;
		overflow: hidden;
	}
</style>
