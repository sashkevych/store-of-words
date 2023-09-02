<script>
	import './style.css';
	import HomeIcon from './home.svelte';
	import ScheduleIcon from './schedule.svelte';
	import TodayIcon from './today.svelte';
	import FileIcon from './file.svelte';
	import ThemeIcon from './theme.svelte';
</script>

<div id="side-bar" class="surface-container" style="width: 100%; height: 100%;">
	<div class="bar-container">
		<div class="nav-container">
			<HomeIcon />
			<ScheduleIcon />
			<TodayIcon />
			<FileIcon />
		</div>
		<div class="theme">
			<ThemeIcon />
		</div>
	</div>
</div>

<style>
	.nav-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 50px;
		margin-top: 10px;
	}
	.bar-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100vh;
		justify-content: space-between;
	}
	.theme {
		margin-bottom: 10px;
	}
</style>
