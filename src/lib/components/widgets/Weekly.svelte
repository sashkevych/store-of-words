<script>
	import './style.css';
	import { newData } from '../../../store';
	let weeklyRepeats = [];
	newData.subscribe((vl) => (weeklyRepeats = vl));
</script>

<div id="weekly">
	<div class="home-widget surface-container">
		<div class="repeats-template">
			<div class="headline-position headline-small on-surface-text">Weekly repeats</div>
			<div class="repeats-container">
				{#each weeklyRepeats as { sentences }}
					<div class="repeat-box">
						{#each sentences as { id, text }}
							{id} {@html text}
						{/each}
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.repeat-box {
		width: 150px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

		border: 1px solid black;
		height: 100%;
		flex: 0 0 auto;
	}
</style>
