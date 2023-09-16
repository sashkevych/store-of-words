<script>
	export let small = false;

	import { visible, selected } from '../../../../store';

	function toggleView() {
		selected.set('home');
		clicked = 'clicked';
		visible.set(!$visible);
		newHower = 'clicked-hover-icon';
		toggle = true;
	}

	var toggle = false;
	var activ = '';
	var newHower = '';
	var clicked = '';

	function mouseover() {
		if ($selected == 'home') {
			newHower = 'clicked-hover-icon';
			return;
		}
		toggle = true;
	}
	function mouseleave() {
		if ($selected == 'home') {
			newHower = '';
			return;
		}
		toggle = false;
	}
	function changeCallBack(selected) {
		if (selected == 'home') {
			clicked = 'clicked';
		} else {
			clicked = '';
			toggle = false;
		}
	}
	$: changeCallBack($selected);
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
		on:mouseover={mouseover}
		on:mouseleave={mouseleave}
		on:mousedown={() => (activ = 'activ')}
		on:mouseup={() => (activ = '')}
		role="button"
		on:click={toggleView}
		tabindex="0"
	>
		<span
			class="on-surface-variant-text material-symbols-outlined {activ} {clicked} {newHower}"
			class:icon-hover={toggle}>Home</span
		>
		<div class="label-medium on-surface-variant-text {activ}" class:text-hover={toggle}>Home</div>
	</a>
{/if}

<style>
	.devider {
		padding-left: 16px;
		padding-right: 16px;

		padding-top: 10px;
		padding-bottom: 10px;
	}
</style>
