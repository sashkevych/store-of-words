<script>
	import './style.css';

	import { workLog } from '../../../store';
</script>

<div id="work-log">
	<div class="home-widget surface-container-low">
		<div class="worklog-headline-position headline-small on-surface-text">Work log</div>
		<a href="/work-log" class="repeats-container">
			<div class="secondary-container work-log-sentences-bg">
				{#each $workLog[0].sentences as { text, id }}
					<div class="sentence-position body-small on-secondary-container-text header-position margin-right">
						<div>{id}.</div>
						<div>{@html text}</div>
					</div>
				{/each}
			</div>
		</a>
	</div>
</div>

<style>
	.margin-right {
		margin-right: 1.5rem;
		overflow: hidden;
	}
</style>
