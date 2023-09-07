<script>
	import Home from './home.svelte';
	import Weekly from './weekly.svelte';
	import Today from './today.svelte';
	import WorkLog from './work-log.svelte';

	import BurgerMenu from './burger-menu.svelte';

	export let size = '';
</script>
<!-- on-surface-variant-text label-small -->
{#if size == 'large'}
	<Home/>
	<Weekly/>
	<Today/>
	<WorkLog/>
{:else if size == 'default'}
	<Home/>
	<Weekly/>
	<Today/>
	<WorkLog/>
{:else if size == 'small'}
	<BurgerMenu />
{/if}
