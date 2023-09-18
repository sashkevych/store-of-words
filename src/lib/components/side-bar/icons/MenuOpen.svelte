<script>
	import { visible } from '../../../../store';

	function toggleView() {
		visible.set(!$visible);
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="menu-open-position" role="button" on:click={toggleView} tabindex="0">
	<!-- svelte-ignore a11y-mouse-events-have-key-events -->
	<div class="menu-container" role="button" tabindex="0">
		<span class="material-menu-open on-surface-variant-text"> menu_open </span>
	</div>
</div>

<style>
	.menu-container {
		width: 48px;
		height: 48px;
		stroke-width: 1px;
		border-radius: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
	.menu-container:hover {
		background-color: var(--md-sys-color-surface-variant-2);
	}
	.menu-container:hover .material-menu-open {
		font-variation-settings: 'FILL' 1;
		font-weight: 600;
		transition: font-weight 0.1s ease;
	}

	.menu-open-position {
		display: flex;
		margin-top: 10px;
		margin-left: 9px;
	}

	.menu-container:active .material-menu-open{
		font-weight: 300;
	}
	.material-menu-open {
		font-family: 'Material Symbols Outlined';
		font-style: normal;
		line-height: 1;
		text-transform: none;
		letter-spacing: normal;
		word-wrap: normal;
		white-space: nowrap;
		direction: ltr;

		font-variation-settings: 'FILL' 0, 'GRAD' 0, 'opsz' 40;
		font-size: 25px;
		font-weight: 500;
		transition: font-weight 1.3s ease;
		transition: background-color 0.3s ease;

		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
