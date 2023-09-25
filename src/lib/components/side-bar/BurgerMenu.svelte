<script>
	import MenuClose from './icons/MenuClose.svelte';
	import MenuOpen from './icons/MenuOpen.svelte';
	import Theme from './icons/Theme.svelte';
	import ExtraMenu from './ExtraMenu.svelte';

	import Home from './icons/Home/Home.svelte';
	import Weekly from './icons/Weekly/Weekly.svelte';
	import Today from './icons/Today/Today.svelte';
	import WorkLog from './icons/WorkLog/Work-log.svelte';

	import { isExtraMenu, visible, mouseOver, mouseLeave } from '../../../store';
	import { fade, slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	function toggleView() {
		visible.set(!$visible);
	}

	const small = true;

	function onMouseOver() {
		mouseOver.set(true);
		mouseLeave.set(false);
	}
	function onMouseLeave() {
		mouseLeave.set(true);
		mouseOver.set(false);
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
	class="menu-position"
	role="button"
	on:click={toggleView}
	tabindex="0"
	on:mouseover={onMouseOver}
	on:mouseleave={onMouseLeave}
>
	<MenuClose />
</div>

{#if $visible}
	<!-- svelte-ignore a11y-mouse-events-have-key-events -->
	<div
		class="open-menu surface-container"
		role="button"
		tabindex="0"
		on:mouseover={onMouseOver}
		on:mouseleave={onMouseLeave}
		in:slide={{ delay: 50, duration: 350, easing: quintOut, axis: 'x' }}
		out:slide={{ delay: 0, duration: 250, easing: quintOut, axis: 'x' }}
	>
		<div>
			<MenuOpen />

			<div class="nav-position">
				{#if $isExtraMenu}
					<ExtraMenu />
				{:else}
					<div><Home {small} /></div>
					<div><Weekly {small} /></div>
					<div><Today {small} /></div>
					<div><WorkLog {small} /></div>
				{/if}
			</div>
		</div>

		<div class="theme-small">
			<Theme small={true} />
		</div>
	</div>
	<div in:fade={{ duration: 350 }} out:fade={{ duration: 250 }} class="background" />
{/if}

<style>
	.open-menu {
		height: 100vh;
		width: 320px;
		position: absolute;
		top: 0;

		display: flex;
		flex-direction: column;
		justify-content: space-between;

		border-radius: 0px 16px 16px 0px;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

		z-index: 4;
	}
	.background {
		position: absolute;
		top: 0;
		height: 100vh;
		width: 100vw;
		background-color: rgba(0, 0, 0, 0.32);

		z-index: 2;
	}
	.nav-position {
		margin-top: 42px;
		margin-left: 5px;
		margin-right: 10px;
	}

	.menu-position {
		display: flex;
		height: 100%;
		width: 100%;
		justify-content: center;
		align-items: center;
	}
</style>
