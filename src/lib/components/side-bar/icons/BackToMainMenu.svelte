<script>
	import { isExtraMenu } from '../../../../store';

	function closeExtraMenu() {
		isExtraMenu.set(false);
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="back-to-main-position" role="button" tabindex="0" on:click={closeExtraMenu}>
	<span class="arrow-back"> arrow_back </span>
	<div id="icon-label" class="title-medium on-surface-variant-text">Main menu</div>
</div>

<style>
	.back-to-main-position {
		display: flex;
		align-items: center;
		gap: 12px;
		cursor: pointer;

		padding-top: 7px;
		padding-bottom: 7px;
		padding-left: 12px;
		margin-left: 3px;
		border-radius: 100px;
	}

	.back-to-main-position:hover {
		background-color: var(--md-sys-color-surface-variant-2);
	}
	.back-to-main-position:hover .arrow-back {
		font-variation-settings: 'FILL' 1;
		font-weight: 600;
		transition: font-weight 0.1s ease;
	}
	.back-to-main-position:hover #icon-label {
		font-weight: 500;	
	}
	.back-to-main-position:active :is(.arrow-back, #icon-label) {
		font-weight: 300;
	}

	.arrow-back {
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
		transition: font-weight 0.3s ease;
		transition: background-color 0.3s ease;

		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
