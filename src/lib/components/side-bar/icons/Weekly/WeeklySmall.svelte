<script>
	import ArrowForward from '../ArrowForward.svelte';
	import { isExtraMenu, extraMenuData, extraDataIs, newData } from '../../../../../store';
	function goFurther(data, whichData) {
		console.log('goFurther');
		isExtraMenu.set(true);
		extraDataIs.set(whichData);
		extraMenuData.set(data);
	}

	// import { visible, selected } from '../../../../../store';

	// const name = 'home';

	// var newHower = '',
	// 	clicked = '';

	// function changeCallBack(selected, name) {
	// 	clicked = selected == name ? 'clicked' : '';
	// }

	// function clickHandler(name, visibleLastValue) {
	// 	selected.set(name);
	// 	visible.set(!visibleLastValue);
	// 	clicked = 'clicked';
	// 	newHower = 'clicked-hover-icon';
	// }
	// function mouseEvent() {
	// 	newHower = clicked ? '' : 'clicked-hover-icon';
	// }
	// $: changeCallBack($selected, name);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="position-with-arrow"
	role="button"
	on:click={() => goFurther($newData, 'weekly')}
	tabindex="0"
>
	<div class="nav-small small-icon-container">
		<div class="devider">
			<span class="on-surface-variant-text small-material-symbols-outlined">date_range</span>
			<div id="icon-label" class="title-medium on-surface-variant-text">Weekly</div>
		</div>
		<ArrowForward />
	</div>
</div>

<style>
	.small-icon-container {
		border-radius: 100px;
	}
	.small-icon-container:hover {
		background-color: var(--md-sys-color-surface-variant-2);
	}
	.small-icon-container:hover .small-material-symbols-outlined {
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
	.clicked {
		background-color: var(--md-sys-color-on-surface-2);
	}

	.devider {
		padding-left: 16px;
		padding-right: 16px;

		padding-top: 10px;
		padding-bottom: 10px;
	}
</style>
