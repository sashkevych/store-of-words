<script>
	export let small = false;
	import { selected, visible } from '../../../../store';

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

{#if small}
	<a href="/work-log">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="devider"
			class:clicked-icon={$selected == 'work-log'}
			on:click={clickHandler}
			role="button"
			tabindex="0"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="26"
				height="26"
				viewBox="0 0 26 26"
				fill="none"
			>
				<mask
					id="mask0_53_60"
					style="mask-type:alpha"
					maskUnits="userSpaceOnUse"
					x="0"
					y="0"
					width="26"
					height="26"
				>
					<rect width="26" height="26" fill="#51443A" />
				</mask>
				<g mask="url(#mask0_53_60)">
					<path
						d="M6.57775 24.0534C5.89556 24.0534 5.31424 23.8131 4.8338 23.3327C4.35336 22.8523 4.11314 22.271 4.11314 21.5888V4.4109C4.11314 3.72871 4.35336 3.14739 4.8338 2.66695C5.31424 2.18651 5.89556 1.94629 6.57775 1.94629H15.2574L21.8869 8.57583V21.5888C21.8869 22.271 21.6467 22.8523 21.1662 23.3327C20.6858 23.8131 20.1045 24.0534 19.4223 24.0534H6.57775ZM14.0056 9.82757V4.4109H6.57775V21.5888H19.4223V9.82757H14.0056Z"
						fill="#51443A"
					/>
				</g>
			</svg>
			<div class="title-medium on-surface-variant-text">Work log</div>
		</div>
	</a>
{:else}
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
{/if}

<style>
	.nav:hover .material-symbols-outlined {
		font-variation-settings: 'FILL' 0, 'GRAD' 0, 'opsz' 40;
		font-weight: 700;

		background-color: var(--md-sys-color-surface-variant-2);
		border-radius: 16px;
	}
	.nav:hover #icon-label {
		font-weight: 500;
	}

	.nav:active :is(.material-symbols-outlined, #icon-label) {
		font-weight: 300;
	}

	.material-symbols-outlined {
		font-family: 'Material Symbols Outlined';
		font-style: normal;
		line-height: 1;
		text-transform: none;
		letter-spacing: normal;
		word-wrap: normal;
		white-space: nowrap;
		direction: ltr;

		font-variation-settings: 'FILL' 0, 'GRAD' 0, 'opsz' 40;
		font-weight: 500;
		transition: font-weight 0.3s ease;
		transition: background-color 0.3s ease;

		border-radius: 16px;
		width: 56px;
		height: 32px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.clicked {
		font-variation-settings: 'FILL' 1 !important;
		background-color: var(--md-sys-color-on-surface-2) !important;
	}
	.clicked-hover-icon {
		font-size: 25px;
	}
	.devider {
		padding-left: 16px;
		padding-right: 16px;

		padding-top: 10px;
		padding-bottom: 10px;
	}
</style>
