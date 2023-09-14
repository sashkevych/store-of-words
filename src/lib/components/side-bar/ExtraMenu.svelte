<script>
	import { selected, visible, isExtraMenu, extraMenuData, extraDataIs } from '../../../store';

	import BackToMainMenu from './icons/BackToMainMenu.svelte';

	function setSelected(identifire) {
		selected.set(identifire);
	}
	function toggleView() {
		visible.set(!$visible);
	}
	function clicHandler(identifire) {
		toggleView();
		setSelected(identifire);
	}
</script>

<div>
	<div class="nav-position">
		<BackToMainMenu />
		<div class="extra-menu-margin" >
			{#each $extraMenuData as box}
				{#if $extraDataIs == 'weekly'}
					<a on:click={() => clicHandler(box.repeat.count)} href="/weekly/{box.repeat.count}"
						><div class:clicked-icon={$selected == box.repeat.count}>First repeat</div></a
					>
				{:else if $extraDataIs == 'also-today'}
					<a  on:click={() => clicHandler(box.box_id)} href="/also-today/{box.box_id}"
						><div class:clicked-icon={$selected == box.box_id}>{box.repeat.data}</div></a
					>
					<div>{box.repeat.data}</div>
				{/if}
			{/each}
		</div>
	</div>
</div>

<style>
	.nav-position {
		margin-top: 42px;
	}

	.extra-menu-margin {
		margin-left: 38px;
		margin-top: 15px;
	}
	.link-width {
		width: fit-content;
	}
</style>
