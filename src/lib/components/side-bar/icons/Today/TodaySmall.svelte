<script>
	import { isExtraMenu, extraMenuData, extraDataIs, alsoToday } from '../../../../../store';
	function goFurther(data, whichData) {
		isExtraMenu.set(true);
		extraDataIs.set(whichData);
		extraMenuData.set(data);
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="position-with-arrow"
	role="button"
	on:click={() => goFurther($alsoToday, 'also-today')}
	tabindex="0"
>
	<div class="nav-small small-icon-container">
		<div class="devider">
			<span class="on-surface-variant-text small-material-symbols-outlined">event</span>
			<div id="icon-label" class="nowrap title-medium on-surface-variant-text">Also today</div>
		</div>
		<span class="material-symbols-outlined on-surface-variant-text arrow-forward">
			arrow_forward
		</span>
	</div>
</div>

<style>
	.nowrap {
		white-space: nowrap;
	}
	.small-icon-container {
		border-radius: 100px;
	}
	.small-icon-container:hover {
		background-color: var(--md-sys-color-surface-variant-2);
	}
	.small-icon-container:hover :is(.small-material-symbols-outlined, .arrow-forward) {
		font-variation-settings: 'FILL' 1;
		font-weight: 600;
		transition: font-weight 0.1s ease;
	}
	.small-icon-container:active :is(.small-material-symbols-outlined, #icon-label) {
		font-weight: 300;
	}
	.small-material-symbols-outlined {
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

	.devider {
		padding-left: 16px;
		padding-right: 16px;

		padding-top: 10px;
		padding-bottom: 10px;
	}
</style>
