<script>
	import MenuClose from './icons/MenuClose.svelte';
	import MenuOpen from './icons/MenuOpen.svelte';
	import Theme from './icons/Theme.svelte';
	import ExtraMenu from './ExtraMenu.svelte';

	import Home from './icons/Home.svelte';
	import Weekly from './icons/Weekly.svelte';
	import Today from './icons/Today.svelte';
	import WorkLog from './icons/Work-log.svelte';

	import { isExtraMenu, visible, mouseOver, mouseLeave } from '../../../store';

	function toggleView() {
		console.log('toggle visible');
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
	{#if $visible}
		<MenuOpen />
	{:else}
		<MenuClose />
	{/if}
</div>

{#if $visible}
	<!-- svelte-ignore a11y-mouse-events-have-key-events -->
	<div
		class="open-menu"
		role="button"
		tabindex="0"
		on:mouseover={onMouseOver}
		on:mouseleave={onMouseLeave}
	>
		<div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="top-icon-position" role="button" on:click={toggleView} tabindex="0">
				<MenuOpen />
			</div>

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

		<div class="theme">
			<Theme />
		</div>
	</div>
{/if}

<style>
	.nav-position {
		margin-top: 42px;
	}
	.top-icon-position {
		margin-top: 20px;
	}
	.menu-position {
		display: flex;
		height: 100%;
		width: 100%;
		justify-content: center;
		align-items: center;
	}

	.open-menu {
		height: 100vh;
		width: 320px;
		position: absolute;
		top: 0;

		display: flex;
		flex-direction: column;
		justify-content: space-between;

		background-color: sandybrown;
	}
	.open-menu > div {
		margin-left: 26px;
	}
	.main {
		height: 100vh;
		background-color: rgb(173, 255, 47);
	}
	.bg {
		background-color: rgba(173, 255, 47, 0.32);
	}
</style>
