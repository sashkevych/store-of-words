<script>
	import './style.css';
	import { newData } from '../../../store';

	let weeklyRepeats = [];
	newData.subscribe((vl) => (weeklyRepeats = vl));
</script>

<div id="weekly">
	<div class="home-widget surface-container">
		<div class="headline-position headline-small on-surface-text">Weekly repeats</div>
		<div class="repeats-container">
			{#each weeklyRepeats as { sentences, repeat }}
				<div class="repeat-box secondary">
					<div class="header-position title-medium on-secondary-text">First repeat: {repeat.count}</div>
					{#each sentences as { id, text }}
						<div class="sentence-position body-small on-secondary-text">
							<div>{id}. </div>
							<div class="text-hidden">{@html text}</div>
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	
</style>