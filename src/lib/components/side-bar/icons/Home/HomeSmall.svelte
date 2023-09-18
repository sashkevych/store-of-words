<script>
	import { visible, selected } from '../../../../../store';

	const name = 'home';

	var newHower = '',
		clicked = '';

	function changeCallBack(selected, name) {
		clicked = selected == name ? 'clicked' : '';
	}

	function clickHandler(name, visibleLastValue) {
		selected.set(name);
		visible.set(!visibleLastValue);
		clicked = 'clicked';
		newHower = 'clicked-hover-icon';
	}
	function mouseEvent() {
		newHower = clicked ? '' : 'clicked-hover-icon';
	}
	$: changeCallBack($selected, name);
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<a
	href="/"
	class="devider small-icon-container {clicked}"
	role="button"
	on:mouseover={mouseEvent}
	on:mouseleave={mouseEvent}
	on:click={() => clickHandler(name, $visible)}
	tabindex="0"
>
	<span class="on-surface-variant-text small-material-symbols-outlined">Home</span>
	<div id="icon-label" class="title-medium on-surface-variant-text">Home</div>
</a>

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
