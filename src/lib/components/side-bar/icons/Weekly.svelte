<script>
	export let small = false;
	import ArrowForward from './ArrowForward.svelte';
	import { isExtraMenu, extraMenuData, extraDataIs, newData } from '../../../../store';
	import { visible, selected } from '../../../../store';
	function goFurther(data, whichData) {
		console.log('goFurther');
		isExtraMenu.set(true);
		extraDataIs.set(whichData);
		extraMenuData.set(data);
	}
	const name = 'also-today';

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

{#if small}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="position-with-arrow"
		role="button"
		on:click={() => goFurther($newData, 'weekly')}
		tabindex="0"
	>
		<div class="nav-small">
			<div class="devider">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="26"
					height="26"
					viewBox="0 0 26 26"
					fill="none"
				>
					<mask
						id="mask0_53_54"
						style="mask-type:alpha"
						maskUnits="userSpaceOnUse"
						x="0"
						y="0"
						width="26"
						height="26"
					>
						<rect width="26" height="26" fill="#51443A" />
					</mask>
					<g mask="url(#mask0_53_54)">
						<path
							d="M8.56354 15.1471C8.23469 15.1471 7.95889 15.0359 7.73614 14.8134C7.51339 14.5909 7.40201 14.3153 7.40201 13.9865C7.40201 13.6576 7.51324 13.3808 7.73568 13.1559C7.95814 12.9309 8.23379 12.8185 8.56262 12.8185C8.89146 12.8185 9.16725 12.9309 9.38998 13.1559C9.61274 13.3808 9.72411 13.6576 9.72411 13.9865C9.72411 14.3153 9.61289 14.5909 9.39044 14.8134C9.168 15.0359 8.89236 15.1471 8.56354 15.1471ZM13.0005 15.1471C12.6716 15.1471 12.3958 15.0359 12.1731 14.8134C11.9503 14.5909 11.839 14.3153 11.839 13.9865C11.839 13.6576 11.9502 13.3808 12.1727 13.1559C12.3951 12.9309 12.6707 12.8185 12.9996 12.8185C13.3284 12.8185 13.6042 12.9309 13.827 13.1559C14.0497 13.3808 14.1611 13.6576 14.1611 13.9865C14.1611 14.3153 14.0499 14.5909 13.8274 14.8134C13.605 15.0359 13.3293 15.1471 13.0005 15.1471ZM17.4374 15.1471C17.1086 15.1471 16.8328 15.0359 16.6101 14.8134C16.3873 14.5909 16.2759 14.3153 16.2759 13.9865C16.2759 13.6576 16.3872 13.3808 16.6096 13.1559C16.8321 12.9309 17.1077 12.8185 17.4365 12.8185C17.7654 12.8185 18.0412 12.9309 18.2639 13.1559C18.4867 13.3808 18.598 13.6576 18.598 13.9865C18.598 14.3153 18.4868 14.5909 18.2644 14.8134C18.0419 15.0359 17.7663 15.1471 17.4374 15.1471ZM5.49443 24.0534C4.81223 24.0534 4.23092 23.8132 3.75048 23.3327C3.27004 22.8523 3.02982 22.271 3.02982 21.5888V6.57757C3.02982 5.89537 3.27004 5.31406 3.75048 4.83362C4.23092 4.35318 4.81223 4.11296 5.49443 4.11296H6.50003V1.94629H8.81565V4.11296H17.1844V1.94629H19.5V4.11296H20.5056C21.1878 4.11296 21.7691 4.35318 22.2496 4.83362C22.73 5.31406 22.9702 5.89537 22.9702 6.57757V21.5888C22.9702 22.271 22.73 22.8523 22.2496 23.3327C21.7691 23.8131 21.1878 24.0534 20.5056 24.0534L5.49443 24.0534ZM5.49443 21.5888H20.5056V10.8332H5.49443V21.5888ZM5.49443 8.6665H20.5056V6.57757H5.49443V8.6665Z"
							fill="#51443A"
						/>
					</g>
				</svg>
				<div class="title-medium on-surface-variant-text">Weekly</div>
			</div>
			<ArrowForward />
		</div>
	</div>
{:else}
	<!-- svelte-ignore a11y-mouse-events-have-key-events -->
	<a
		class="nav"
		href="/weekly"
		on:mouseover={mouseEvent}
		on:mouseleave={mouseEvent}
		on:click={() => clickHandler(name, $visible)}
		role="button"
		tabindex="0"
	>
		<span class="on-surface-variant-text material-symbols-outlined {clicked} {newHower}">date_range</span>
		<div id="icon-label" class="label-medium on-surface-variant-text">Weekly</div>
	</a>
{/if}
