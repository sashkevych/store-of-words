<script>
	import HomeIcon from './home.svelte';
	import ScheduleIcon from './schedule.svelte';
	import TodayIcon from './today.svelte';
	import FileIcon from './file.svelte';

	import BurgerMenu from './burger-menu.svelte';

	export let size = '';
</script>
<!-- on-surface-variant-text label-small -->
{#if size == 'large'}
	<HomeIcon />
	<ScheduleIcon />
	<TodayIcon />
	<FileIcon />
{:else if size == 'default'}
	<HomeIcon/>
	<ScheduleIcon />
	<TodayIcon />
	<FileIcon />
{:else if size == 'small'}
	<BurgerMenu />
{/if}
