<script>
	import { extraMenuData, extraDataIs } from '../../../store';

	import BackToMainMenu from './BackToMainMenu.svelte';
</script>

<div>
	<div class="nav-position">
		<BackToMainMenu />
		{#each $extraMenuData as box}
			{#if $extraDataIs == 'weekly'}
				<div>{box.repeat.count}</div>
			{:else if $extraDataIs == 'also-today'}
				<div>{box.repeat.data}</div>
			{/if}
		{/each}
	</div>
</div>

<style>
	.nav-position {
		margin-top: 42px;
	}
</style>
