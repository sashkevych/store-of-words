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
		<div class="extra-menu-margin">
			{#each $extraMenuData as box}
				{#if $extraDataIs == 'weekly'}
					<div class="distantion">
						<a on:click={() => clicHandler(box.repeat.count)} href="/weekly/{box.repeat.count}"
							><div class="on-surface-variant-text title-medium" class:clicked-icon={$selected == box.repeat.count}>First repeat</div></a
						>
					</div>
				{:else if $extraDataIs == 'also-today'}
					<div class="distantion">
						<a on:click={() => clicHandler(box.box_id)} href="/also-today/{box.box_id}"
							><div class="on-surface-variant-text title-medium" class:clicked-icon={$selected == box.box_id}>{box.repeat.data.value}</div></a
						>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>

<style>
	.nav-position {
		margin-top: 42px;
		margin-left: 18px;
	}

	.extra-menu-margin {
		margin-left: 22px;
	}
	.distantion {
		padding-left: 16px;
		padding-right: 16px;

		padding-top: 10px;
		padding-bottom: 10px;
		border: 1px solid black;
	}
</style>
