<script>
	import { isExtraMenu,extraMenuData, extraDataIs } from '../../../store';

	import BackToMainMenu from './BackToMainMenu.svelte';

	function setToDefault(){
		isExtraMenu.set(false)
		extraMenuData.set([])
		extraDataIs.set('')
	}
</script>

<div>
	<div class="nav-position">
		<BackToMainMenu />
		<div class="extra-menu-margin">
			{#each $extraMenuData as box}
				{#if $extraDataIs == 'weekly'}
					<a on:click={setToDefault} href="/weekly/{box.repeat.count}" 
						><div>First repeat</div></a
					>
				{:else if $extraDataIs == 'also-today'}
					<a on:click={setToDefault} href="/also-today/{box.box_id}" 
						><div>{box.repeat.data}</div></a
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
		width:fit-content;
	}
</style>
