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
				<div class="repeat-box">
					<div>Repeat: {repeat.count}</div>
					{#each sentences as { id, text }}
						<div>{id} {@html text}</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</div>