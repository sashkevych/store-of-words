<script>
	import './style.css';

	import { workLog } from '../../../store';

	console.log($workLog);
</script>

<div id="work-log">
	<div class="home-widget surface-container">
		<div class="headline-position headline-small on-surface-text">Work log</div>
		<a href="/work-log">
			<div class="repeats-container">
				<div class="secondary test">
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
	.test {
		/* height: 100%; */
		width: 100%;
		border-radius: 23px;
	}
	.home-widget {
		height: 100%;
		border-radius: 30px;
		padding-top: 1px;
		margin-top: -1px;
	}

	.headline-position {
		margin-top: 30px;
		margin-left: 55px;
	}
	.repeats-container {
		height: 68%;
		margin-left: 55px;
		margin-top: 30px;
		margin-right: 55px;

		display: flex;
		white-space: nowrap;
		flex-wrap: nowrap;
		overflow: auto;

		gap: 1.5rem;
	}
</style>
