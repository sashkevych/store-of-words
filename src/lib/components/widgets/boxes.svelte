<script>
	export let weeklyRepeats = [];
	export let label = '';
	export let horizontal = false;
	export let vertical = false;
</script>

{#if horizontal}
	<div class="home-widget surface-container">
		<div class="headline-position headline-small on-surface-text">{label}</div>
		<div class="repeats-container">
			{#each weeklyRepeats as { sentences, repeat }}
				<a href="/weekly/{repeat.count}">
					<div class="repeat-box secondary">
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
					</div>
				</a>
			{/each}
		</div>
	</div>
{/if}

{#if vertical}
	<div class="surface-container weekly-widget">
		{#each weeklyRepeats as { sentences, repeat }}
			<a href="/weekly/{repeat.count}">
				<div class="repeat-box-vertical secondary">
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
				</div>
			</a>
		{/each}
	</div>
{/if}
