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
					<div class="distantion" class:clicked={$selected == box.repeat.label}>
						<a
							on:click={() => clicHandler(box.repeat.label)}
							href="/weekly/{box.repeat.label.toLowerCase()}"
							><div class="nowrap label on-surface-variant-text title-medium">
								{box.repeat.label} repeat
							</div></a
						>
					</div>
				{:else if $extraDataIs == 'also-today'}
					<div class="distantion" class:clicked={$selected == box.box_id}>
						<a on:click={() => clicHandler(box.box_id)} href="/also-today/{box.box_id}"
							><div class="nowrap label on-surface-variant-text title-medium">
								{box.repeat.date.value}
							</div></a
						>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>

<style>
	.nowrap {
		white-space: nowrap;
	}
	.distantion {
		padding-left: 16px;
		padding-right: 16px;

		padding-top: 10px;
		padding-bottom: 10px;

		cursor: pointer;

		border-radius: 100px;
	}
	.distantion:hover {
		background-color: var(--md-sys-color-surface-variant-2);
	}
	.distantion:hover > a > .label {
		font-weight: 500;
	}
	.clicked {
		background-color: var(--md-sys-color-on-surface-2);
	}
	.nav-position {
		/* margin-top: 42px; */
		margin-left: 15px;
	}

	.extra-menu-margin {
		margin-left: 22px;
	}
</style>
