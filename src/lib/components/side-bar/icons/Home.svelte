<script>
	export let small = false;

	import { visible, selected } from '../../../../store';

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

{#if small}
	<a href="/">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="devider" class:clicked-icon={true} role="button" on:click={toggleView} tabindex="0">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="26"
				height="26"
				viewBox="0 0 26 26"
				fill="none"
			>
				<mask
					id="mask0_53_51"
					style="mask-type:alpha"
					maskUnits="userSpaceOnUse"
					x="0"
					y="0"
					width="26"
					height="26"
				>
					<rect width="26" height="26" fill="#D9D9D9" />
				</mask>
				<g mask="url(#mask0_53_51)">
					<path
						d="M6.57778 20.5058H9.6011V13.9346H16.399V20.5058H19.4223V10.8724L13.0001 6.05566L6.57778 10.8724V20.5058ZM4.11317 22.9704V9.64008L13.0001 2.97168L21.8869 9.63792V22.9704H14.0316V16.302H11.9685V22.9704H4.11317Z"
						fill="#51443A"
					/>
				</g>
			</svg>
			<div class="title-medium on-surface-variant-text">Home</div>
		</div>
	</a>
{:else}
	<!-- svelte-ignore a11y-mouse-events-have-key-events -->
	<a
		class="nav"
		href="/"
		on:mouseover={mouseEvent}
		on:mouseleave={mouseEvent}
		on:click={() => clickHandler(name, $visible)}
		role="button"
		tabindex="0"
	>
		<span class="on-surface-variant-text material-symbols-outlined {clicked} {newHower}">Home</span>
		<div id="icon-label" class="label-medium on-surface-variant-text">Home</div>
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
