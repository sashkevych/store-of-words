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
	<HomeIcon class="label-medium on-surface-variant-text"/>
	<ScheduleIcon class="label-medium on-surface-variant-text"/>
	<TodayIcon class="label-medium on-surface-variant-text"/>
	<FileIcon class="label-medium on-surface-variant-text"/>
{:else if size == 'default'}
	<HomeIcon class="label-medium on-surface-variant-text"/>
	<ScheduleIcon class="label-medium on-surface-variant-text"/>
	<TodayIcon class="label-medium on-surface-variant-text"/>
	<FileIcon class="label-medium on-surface-variant-text"/>
{:else if size == 'small'}
	<BurgerMenu />
{/if}
