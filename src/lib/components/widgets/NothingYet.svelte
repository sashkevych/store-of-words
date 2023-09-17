<script>
	export let widget = false;

	$: style = widget ? 'home-widget surface-container-low' : 'nothing-yet surface-container';
</script>

<div class={style}>
	{#if widget}
		<div class="headline-position">
			<div class="headline-small on-surface-text">Also today</div>
		</div>
	{/if}
	<div class="test">
		<div class="position">
			<div class="title-large on-surface-text">Nothing yet</div>
			<span class="material-symbols-schedule on-surface-text"> schedule </span>
		</div>
	</div>
</div>

<style>
	.material-symbols-schedule {
		font-family: 'Material Symbols Outlined';
		font-style: normal;
		line-height: 1;
		text-transform: none;
		letter-spacing: normal;
		word-wrap: normal;
		white-space: nowrap;
		direction: ltr;

		font-variation-settings: 'FILL' 0, 'GRAD' 0, 'opsz' 48;
		font-weight: 400;
		font-size: 33px;
	}

	.position {
		display: flex;
		flex-direction: column;
		align-items: center;

		gap: 10px;
	}
	.test {
		height: 80%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.nothing-yet {
		height: 100%;
		padding-top: 1px;
		margin-top: -1px;

		border-left: 1px solid var(--md-sys-color-outline-variant);
	}
</style>
