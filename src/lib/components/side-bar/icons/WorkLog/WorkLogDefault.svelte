<script>
	import { selected, visible } from '../../../../../store';

	const name = 'work-log';

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
	class="nav"
	href="/work-log"
	on:mouseover={mouseEvent}
	on:mouseleave={mouseEvent}
	on:click={() => clickHandler(name, $visible)}
	role="button"
	tabindex="0"
>
	<span class="on-surface-variant-text material-symbols-outlined {clicked} {newHower}">note</span>
	<div id="icon-label" class="label-medium on-surface-variant-text">Work log</div>
</a>
