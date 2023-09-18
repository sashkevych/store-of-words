<script>
	import Home from './icons/Home/Home.svelte';
	import Weekly from './icons/Weekly/Weekly.svelte';
	import Today from './icons/Today.svelte';
	import WorkLog from './icons/Work-log.svelte';

	import BurgerMenu from './BurgerMenu.svelte';

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
