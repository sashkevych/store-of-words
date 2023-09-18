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
	<BackToMainMenu />
	<div class="nav-position">
		<div class="extra-menu-margin">
			{#each $extraMenuData as box}
				{#if $extraDataIs == 'weekly'}
					<div class="distantion">
						<a on:click={() => clicHandler(box.repeat.label)} href="/weekly/{box.repeat.label.toLowerCase()}"
							><div class="on-surface-variant-text title-medium" class:clicked-icon={$selected == box.repeat.label}>{box.repeat.label} repeat</div></a
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
		/* margin-top: 42px; */
		margin-left: 15px;
	}

	.extra-menu-margin {
		margin-left: 22px;
	}
	.distantion {
		padding-left: 16px;
		padding-right: 16px;

		padding-top: 10px;
		padding-bottom: 10px;
	}
</style>
