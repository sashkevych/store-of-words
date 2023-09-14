<script>
	import './style.css';

	import { workLog } from '../../../store';

</script>

<div id="work-log">
	<div class="home-widget surface-container-low">
		<div class="worklog-headline-position headline-small on-surface-text">Work log</div>
		<a href="/work-log">
			<div class="repeats-container">
				<div class="secondary work-log-sentences-bg">
					{#each $workLog[0].sentences as { text, id }}
						<div class="sentence-position body-small on-secondary-text header-position">
							<div>{id}.</div>
							<div>{text}</div>
						</div>
					{/each}
				</div>
			</div>
		</a>
	</div>
</div>

<style>
	
	
</style>
