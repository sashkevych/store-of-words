<script>
	export let small = false;
	import { selected, visible } from '../../../../store';
	function toggleView() {
		visible.set(!$visible);
		selected.set('work-log');
	}
	function clickHandler() {
		toggleView();
	}
</script>

<a href="/work-log">
	{#if small}
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
					<rect width="26" height="26" fill="#D9D9D9" />
				</mask>
				<g mask="url(#mask0_53_60)">
					<path
						d="M6.57775 24.0534C5.89556 24.0534 5.31424 23.8131 4.8338 23.3327C4.35336 22.8523 4.11314 22.271 4.11314 21.5888V4.4109C4.11314 3.72871 4.35336 3.14739 4.8338 2.66695C5.31424 2.18651 5.89556 1.94629 6.57775 1.94629H15.2574L21.8869 8.57583V21.5888C21.8869 22.271 21.6467 22.8523 21.1662 23.3327C20.6858 23.8131 20.1045 24.0534 19.4223 24.0534H6.57775ZM14.0056 9.82757V4.4109H6.57775V21.5888H19.4223V9.82757H14.0056Z"
						fill="#1C1B1F"
					/>
				</g>
			</svg>
			<div class="label-large on-surface-variant-text">Work log</div>
		</div>
	{:else}
		<div class="nav">
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
					<rect width="26" height="26" fill="#D9D9D9" />
				</mask>
				<g mask="url(#mask0_53_60)">
					<path
						d="M6.57775 24.0534C5.89556 24.0534 5.31424 23.8131 4.8338 23.3327C4.35336 22.8523 4.11314 22.271 4.11314 21.5888V4.4109C4.11314 3.72871 4.35336 3.14739 4.8338 2.66695C5.31424 2.18651 5.89556 1.94629 6.57775 1.94629H15.2574L21.8869 8.57583V21.5888C21.8869 22.271 21.6467 22.8523 21.1662 23.3327C20.6858 23.8131 20.1045 24.0534 19.4223 24.0534H6.57775ZM14.0056 9.82757V4.4109H6.57775V21.5888H19.4223V9.82757H14.0056Z"
						fill="#1C1B1F"
					/>
				</g>
			</svg>
			<div class="label-medium on-surface-variant-text">Work log</div>
		</div>
	{/if}
</a>

<style>
	.devider {
		padding-left: 16px;
		padding-right: 16px;

		padding-top: 7px;
		padding-bottom: 7px;
	}
</style>
